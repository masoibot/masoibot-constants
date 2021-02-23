import {EventNames, SkillNames, StageNames} from "../../enums";
import {EventResult} from "../state";
import {ISet} from "./types";

export interface IEvent {
    name: EventNames;
    to: string[];

    from: string | undefined;
    targets: ISet<string>;
    result: EventResult | undefined;

    dayNo: number | undefined;
    stageName: StageNames | undefined;
}

export interface IAction {
    name: SkillNames;
    from: string | undefined;
    targets: ISet<string>;
}

export interface IActionProto {
    skill: EventNames;
    from: string | undefined;
    targets: string[];
}

export function createIEvent(
    name: EventNames,
    to: string[],
    from: string | undefined,
    targetIds: string[] = [],
    result: EventResult | undefined,
    stageName: StageNames = StageNames.WAITING_STAGE,
    dayNo: number = 1
): IEvent {
    return {dayNo, stageName, to, name, from, targets: new Set(targetIds), result};
}
