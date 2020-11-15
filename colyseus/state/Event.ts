import {ArraySchema, MapSchema, SetSchema, CollectionSchema, Schema, type} from "@colyseus/schema";
import {EventNames, StageNames} from "../../enums";
import {object2MapSchema} from "../Utils";
import {EventData} from "../../definitions/EventData";

export class Action extends Schema {
    @type("string") eventName: EventNames | undefined;
    @type("string") from: string | undefined = undefined;
    @type({set: "string"}) targets: SetSchema<string> = new SetSchema<string>();

    constructor() {
        super();
    }
    _assign(
        eventName?: EventNames,
        from?: string,
        targets: string[] = [],
    ) {
        return (this as Action).assign({eventName, from, targets: new SetSchema<string>(targets)});
    }
}

export class Event extends Action {
    @type("int16") dayNo: number | undefined;
    @type("string") stageName: StageNames | undefined;
    @type("boolean") // BE_PAIRED_WITH: true: thirdParty, false: sameParty / SEE: true: werewolf, false: other
    result: boolean | undefined;
    constructor() {
        super();
    }
    _assign(
        eventName?: EventNames,
        from?: string,
        targets: string[] = [],
        result?: boolean,
        stageName?: StageNames,
        dayNo?: number,
    ) {
        return (this as Event).assign({dayNo, stageName, eventName, from, targets: new SetSchema<string>(targets), result});
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
