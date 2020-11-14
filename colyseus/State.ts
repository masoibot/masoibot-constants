import {ArraySchema, filterChildren, MapSchema, Schema, SetSchema, type} from "@colyseus/schema";
import {Roles, StageNames, TeamNames} from "../enums";
import {Event} from "./state/WereWolfLog";
import {User} from "./state/User";
import {Stage} from "./state/Stage";
import {RoomSetting} from "./state/RoomSetting";
import {Message} from "./state/Message";
import {Client} from "colyseus";

export * from "./state/Action";
export * from "./state/Message";
export * from "./state/User";
export * from "./state/Stage";
export * from "./state/WereWolfLog";
export * from "./state/WerewolfRole";
export * from "./state/RoomSetting";

export class State extends Schema {
    @type(RoomSetting) roomSetting: RoomSetting = new RoomSetting();
    @type({map: User}) users: MapSchema<User> = new MapSchema();
    // Cấu hình nhân vật tương ứng với người chơi
    // Cấu hình game
    @type({map: "int16"}) rolesSetup: MapSchema<number> = new MapSchema();

    @filterChildren(function (client: Client, key: string, value, root: State) {
        let userID = client.auth.uid;
        if (root.playerIDs.has(userID)) {
            return key === userID ||
                root.currentStage.stageName === StageNames.END_GAME
        }
        return false;
    })
    @type({map: "int16"}) roleIDs: MapSchema<Roles> = new MapSchema<Roles>();
    // Khán giả
    @type({set: "string"}) spectatorIDs: SetSchema<string> = new SetSchema<string>();
    // Danh sách người chơi
    @type({set: "string"}) playerIDs: SetSchema<string> = new SetSchema<string>();

    @type("int8") winTeam: TeamNames = TeamNames.NO_TEAM;
    @type("int8") dayNo: number = 1;
    @type(Stage) currentStage: Stage = new Stage()._assign(StageNames.WAITING_STAGE);
    @filterChildren(function (client, key, value: Event, root: State) {
        let userID = client.auth.uid;
        if (root.playerIDs.has(userID)) {
            // player xem được phép xem lại event chủ động
            return value.from === userID ||
                // players trong 1 stage được xem các event trong stage đó
                (value.dayNo === root.dayNo
                    && value.stageName === root.currentStage.stageName
                    && root.currentStage.activePlayers.has(userID)) ||
                // mọi players được xem các event khi trò chơi kết thúc
                (root.currentStage.stageName === StageNames.END_GAME)
        }
        return false;
    })
    @type([Event]) events: ArraySchema<Event> = new ArraySchema<Event>();
    @filterChildren(function (client: Client, key, value: Message, root: State) {
        let userID = client.auth.uid;
        if (root.playerIDs.has(userID)) {
            return value.fromID === userID || value.toIDs.has(userID)
        }
        return false;
    })
    @type([Message]) messages: ArraySchema<Message> = new ArraySchema<Message>();
}
