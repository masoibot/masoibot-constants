import {MapSchema} from "@colyseus/schema";
import {SkillNames} from "../enums";

export interface IAction {
    from: string;
    targets: string[];
    skill: SkillNames;
}

export enum AdminActionTypes {
    UPDATE_SETTING = "UPDATE_SETTING",
    SKIP_STAGE = "SKIP_STAGE",
    JUMP_TO_STAGE = "JUMP_TO_STAGE",
    RESET_TEST_GAME = "RESET_TEST_GAME"
}

export interface IAdminAction {
    type: AdminActionTypes;
    data: any;
}

export enum MessageTypes {
    ACTION = "ACTION",
    CHAT = "CHAT",
    ADMIN_ACTION = "ADMIN_ACTION",
    ACTION_RESULT = "ACTION_RESULT",
    ACTION_PUSH = "ACTION_PUSH"
}

export interface IZoomSetting {
    setup: MapSchema<number>;
    maxPlayer: number;
    private: boolean;
}
