import {ArraySchema, MapSchema, SetSchema, CollectionSchema, Schema, type} from "@colyseus/schema";
import {EventNames, StageNames} from "../../enums";
import {object2MapSchema} from "../Utils";
import {EventData} from "../../definitions/EventData";

export class Event extends Schema {
    @type("int16") dayNo: number | undefined;
    @type("string") stageName: StageNames | undefined;
    @type("string") eventName: EventNames | undefined;
    @type("string") from: string | undefined = undefined;
    @type({set: "string"}) targets: SetSchema<string> = new SetSchema<string>();
    @type("string") result: boolean | undefined;
    constructor() {
        super();
    }
    _assign(
        dayNo?: number,
        stageName?: StageNames,
        eventName?: EventNames,
        from?: string,
        targets: string[] = [],
        result?: boolean,
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
