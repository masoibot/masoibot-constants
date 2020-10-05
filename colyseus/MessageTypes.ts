import {MapSchema} from "@colyseus/schema";
import {SkillNames} from "../enums";

export interface IAction {
    from: string;
    targets: string[];
    skill: SkillNames;
}

export enum AdminActionTypes {
    UPDATE_ROOM_SETTING = "UPDATE_ROOM_SETTING",
    UPDATE_GAME_SETUP = "UPDATE_GAME_SETUP",
    SKIP_STAGE = "SKIP_STAGE",
    JUMP_TO_STAGE = "JUMP_TO_STAGE",
    RESET_TEST_GAME = "RESET_TEST_GAME"
}

export interface IAdminAction {
    type: AdminActionTypes;
    data: any;
}

export enum RoomNoticeTypes {
    ADMIN_CHANGE_SETUP = "ADMIN_CHANGE_SETUP",
    ADMIN_KICK_PLAYER = "ADMIN_KICK_PLAYER",
    PLAYER_JOIN_ROOM = "PLAYER_JOIN_ROOM",
    PLAYER_LEAVE_ROOM = "PLAYER_JOIN_ROOM"
}

export interface IRoomNotice {
    type: RoomNoticeTypes;
    data: any;
}

export enum MessageTypes {
    ACTION = "ACTION",
    CHAT = "CHAT",
    CHAT_REFUSED = "CHAT_REFUSED",
    ADMIN_ACTION = "ADMIN_ACTION",
    ACTION_RESULT = "ACTION_RESULT",
    ACTION_PUSH = "ACTION_PUSH",
    ROOM_NOTICE = "ROOM_NOTICE"
}

export interface IZoomSetting {
    setup: MapSchema<number>;
    maxPlayer: number;
    private: boolean;
}
