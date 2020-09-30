import {SkillNames} from "./SkillNames";

export interface IAction {
    from: string;
    targets: string[];
    skill: SkillNames;
}

export interface IAdminAction {
    action: string;
    data: any;
}

export enum MessageTypes {
    ACTION = "ACTION",
    CHAT = "CHAT",
    ADMIN_ACTION = "ADMIN_ACTION",
    ACTION_RESULT = "ACTION_RESULT",
    ACTION_PUSH = "ACTION_PUSH"
}
