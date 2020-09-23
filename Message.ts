import {Skills} from "./Skills";
import {array2ArraySchema, arraySchema2Array} from "../Utils";
import {Action} from "../State";

export interface IAction {
    from: string;
    targets: string[];
    skill: Skills;
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

export function action2IAction(source: Action): IAction {
    return {
        from: source.from,
        targets: arraySchema2Array(source.targets),
        skill: source.skill
    };
}

export function iAction2Action(source: IAction): Action {
    return new Action(source.from, source.skill, array2ArraySchema<string>(source.targets));
}
