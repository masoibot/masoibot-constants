import {ArraySchema, MapSchema, Schema, type} from "@colyseus/schema";
import {StageNames, TeamNames} from "../enums";
import {WereWolfLog} from "./state/WereWolfLog";
import {Player} from "./state/Player";
import {Stage} from "./state/Stage";
import {RoomSetting} from "./state/RoomSetting";

export * from "./state/Action";
export * from "./state/Message";
export * from "./state/Player";
export * from "./state/Stage";
export * from "./state/WereWolfLog";
export * from "./state/WerewolfRole";
export * from "./state/RoomSetting";

export class State extends Schema {
    // State is not Stage <- remember this;
    @type({map: "number"}) setup: MapSchema<number> = new MapSchema();
    @type({map: Player}) players: MapSchema<Player> = new MapSchema();
    @type([Player]) spectators: ArraySchema<Player> = new ArraySchema<Player>();
    @type(Stage) currentStage: Stage = new Stage(StageNames.WAITING_STAGE);
    @type("int8") dayNo: number = 1;
    @type([WereWolfLog]) gameHistory: ArraySchema<WereWolfLog> = new ArraySchema<WereWolfLog>();
    @type("int8") winTeam: TeamNames = TeamNames.NO_TEAM;
    @type(RoomSetting) roomSetting: RoomSetting = new RoomSetting();
}
