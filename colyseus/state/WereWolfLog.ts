import {ArraySchema, MapSchema, Schema, type} from "@colyseus/schema";
import {CoupleTeams, EventNames} from "../../enums";
import {array2ArraySchema, object2MapSchema} from "../Utils";

export class WereWolfEvent extends Schema {
    @type("string") eventName: EventNames;
    @type("string") from: string = "";
    @type({map: "string"}) data: MapSchema<string> = new MapSchema<string>();

    constructor(eventName: EventNames, from: string, data: EventData) {
        super();
        this.eventName = eventName;
        this.from = from;
        this.data = object2MapSchema(data);
    }
}

export enum SESSION {
    DAY = 0,
    NIGHT
}

export class WereWolfLog extends Schema {
    @type("int8") session: SESSION;
    @type("int8") dayNo: number;
    @type([WereWolfEvent]) events: ArraySchema<WereWolfEvent> = new ArraySchema<WereWolfEvent>();

    constructor(session: SESSION, dayNo: number) {
        super();
        this.session = session;
        this.dayNo = dayNo;
        this.events = new ArraySchema<WereWolfEvent>();
    }
}

type TargetId = string;
export type BePairTargets = [TargetId, CoupleTeams];
export type ViewLifeTargets = [TargetId, "0" | "1" | "2"];
