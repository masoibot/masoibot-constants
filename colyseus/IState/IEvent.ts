import {EventNames, StageNames} from "../../enums";
import {EventResult} from "../state";
import {ISet} from "./types/ISet";

export interface IEvent extends IAction {
    dayNo: number | undefined;
    stageName: StageNames | undefined;
    result: EventResult | undefined;
}

export interface IAction {
    name: EventNames;
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
    from: string | undefined,
    targetIds: string[] = [],
    result: EventResult | undefined,
    stageName: StageNames = StageNames.WAITING_STAGE,
    dayNo: number = 1
): IEvent {
    return {dayNo, stageName, name, from, targets: new Set(targetIds), result};
}
