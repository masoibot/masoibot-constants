import {ArraySchema, filterChildren, MapSchema, Schema, SetSchema, type} from "@colyseus/schema";
import {Roles, StageNames, TeamNames} from "../../enums";
import {Action, Event} from "./Event";
import {User} from "./User";
import {StageInfo} from "./StageInfo";
import {RoomSetting} from "./RoomSetting";
import {Message} from "./Message";
import {Client} from "colyseus";
import {STAGE_TIMEOUT} from "../../definitions/StageTimeout";
import {getActivePlayers, getSession} from "../stateUtils";

export class State extends Schema {
    @type(RoomSetting) roomSetting: RoomSetting = new RoomSetting();

    // REPOSITORIES:

    @type({map: User}) // UDR (user data repository): Map<userID, User>
    users: MapSchema<User> = new MapSchema<User>();

    @filterChildren(function (this: State, client: Client, key: StageNames, stage: StageInfo, root: State) {
        const userID = client.auth?.uid;
        return root.stageName === StageNames.END_GAME || stage.activePlayerIDs.has(userID);
    })
    @type({map: StageInfo}) // SDR (stage data repository): Map<StageNames, StageInfo>
    listStages: MapSchema<StageInfo> = new MapSchema<StageInfo>();

    @filterChildren(function (client, key, value: Event, root: State) {
        let userID = client.auth?.uid;
        if (root.playerIDs.has(userID)) {
            // player được phép xem lại event chủ động
            return (
                value.from === userID ||
                // players trong 1 stage được xem các event trong stage đó
                (value.dayNo === root.dayNo &&
                    value.stageName === root.stageName &&
                    root._$activePlayers.has(userID)) ||
                // mọi players được xem các event khi trò chơi kết thúc
                root.stageName === StageNames.END_GAME
            );
        }
        return false;
    })
    @type([Action]) // ADR (action data repository) Map<fromId, Action>
    actions: ArraySchema<Action> = new ArraySchema<Action>();

    @type([Event]) // EDR (event data repository)
    events: ArraySchema<Event> = new ArraySchema<Event>();

    @filterChildren(function (client: Client, key, value: Message, root: State) {
        let userID = client.auth?.uid;
        if (root.spectatorIDs.has(userID)) return true;
        if (root.playerIDs.has(userID)) {
            return value.fromID === userID || root.listStages.get(value.stageName)?.activePlayerIDs.has(userID);
        }
        return false;
    })
    @type([Message]) // MDR (message data repository)
    messages: ArraySchema<Message> = new ArraySchema<Message>();

    @filterChildren(function (client: Client, key: number, value: Action, root: State) {
        let userID = client.auth?.uid;
        return root._$activePlayers.has(userID);
    })

    // GAME DATA
    @type({set: "string"}) // Khán giả
    spectatorIDs: SetSchema<string> = new SetSchema<string>();

    @type({set: "string"}) // Danh sách người chơi
    playerIDs: SetSchema<string> = new SetSchema<string>();

    @type({set: "string"}) // Danh sách người vừa/sẽ chết
    deadMenIDs: SetSchema<string> = new SetSchema<string>();

    @filterChildren(function (this: State, client: Client, key: string, value: Roles, root: State) {
        const userID = client.auth?.uid;
        if (root.spectatorIDs.has(userID)) return true;
        return root.playerIDs.has(userID) && (key === userID || root.stageName === StageNames.END_GAME);
    })
    @type({map: "uint16"}) // role of each single user
    roleAssignment: MapSchema<Roles> = new MapSchema<Roles>();

    @type("uint8") winTeam: TeamNames = TeamNames.NO_TEAM;
    @type("uint8") dayNo: number = 1;
    @type("string") stageName: StageNames = StageNames.WAITING_STAGE;
    @type("uint64") closeTime: number = Math.floor(Date.now() + STAGE_TIMEOUT[this.stageName] / 1000);

    /**
     * return activePlayers of current StageInfo
     * WARNING: return undefined in client-side
     */
    get _$activePlayers() {
        return getActivePlayers(this);
    }

    /**
     * return session of current StageInfo
     * WARNING: return undefined in client-side
     */
    get _$session() {
        return getSession(this);
    }
}
