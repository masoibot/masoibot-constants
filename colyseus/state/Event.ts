import {ArraySchema, Schema, SetSchema, type} from "@colyseus/schema";
import {EventNames, SkillNames, StageNames} from "../../enums";

export class Action extends Schema {
    @type("string") name: EventNames | undefined;
    @type("string") from: string | undefined = undefined;
    @type({set: "string"}) targets: SetSchema<string> = new SetSchema<string>();

    constructor() {
        super();
    }
    _assign(
        name: SkillNames,
        from: string | undefined,
        targetIds: string[] = [],
        result?: EventResult,
        stageName?: StageNames,
        dayNo?: number
    ) {
        const targets = new SetSchema<string>(targetIds);
        return (this as Action).assign({name, from, targets});
    }
}

export enum EventResult {
    // COMMON:
    FAILED,
    SUCCESS,
    // COUPLE:
    THIRD_PARTY,
    WOLF_PARTY,
    VILLAGER_PARTY,
    // SEER:
    SEE_WEREWOLF,
    SEE_VILLAGER,
    // OLD_MAN
    YOLO,
    DIED
}

export class Event extends Action {
    @type("int16") dayNo: number | undefined;
    @type("string") stageName: StageNames | undefined;
    @type("uint8") result: EventResult | undefined;

    constructor() {
        super();
    }
    _assign(
        name: EventNames,
        from: string | undefined,
        targetIds: string[] = [],
        result: EventResult | undefined,
        stageName: StageNames,
        dayNo: number
    ) {
        const targets = new SetSchema<string>(targetIds);
        return (this as Event).assign({dayNo, stageName, name, from, targets, result});
    }
}

export enum SESSION {
    DAY = 0,
    NIGHT
}

export const StagesInDay = [
    StageNames.DISCUSS,
    StageNames.VOTE_YES_NO,
    StageNames.VOTE,
    StageNames.LAST_WORD,
    StageNames.END_OF_DAY,
    StageNames.WAITING_STAGE,
    StageNames.END_GAME,
    StageNames.START_GAME
];

export class WereWolfLog extends Schema {
    @type("int8") session: SESSION = SESSION.NIGHT;
    @type("int8") dayNo: number = 0;
    @type([Event]) events: ArraySchema<Event> = new ArraySchema<Event>();

    constructor() {
        super();
    }

    _assign(session: SESSION, dayNo: number) {
        return (this as WereWolfLog).assign({session, dayNo});
    }
}
