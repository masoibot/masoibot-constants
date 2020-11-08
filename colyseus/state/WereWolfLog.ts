import {ArraySchema, MapSchema, Schema, type} from "@colyseus/schema";
import {EventNames, StageNames} from "../../enums";
import {object2MapSchema} from "../Utils";
import {EventData} from "../../definitions/EventData";

export class WereWolfEvent extends Schema {
    @type("string") eventName: EventNames;
    @type("string") from: string | undefined = undefined;
    @type({map: "string"}) data: MapSchema<string> = new MapSchema<string>();

    constructor() {
        super();
    }

    _assign(eventName: EventNames, from: string | undefined, data: EventData) {
        return (this as WereWolfEvent).assign({eventName, from, data: object2MapSchema(data)});
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
    @type([WereWolfEvent]) events: ArraySchema<WereWolfEvent> = new ArraySchema<WereWolfEvent>();

    constructor() {
        super();
    }

    _assign(session: SESSION, dayNo: number) {
        return (this as WereWolfLog).assign({session, dayNo});
    }
}
