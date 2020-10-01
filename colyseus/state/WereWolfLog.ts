import {ArraySchema, Schema, type} from "@colyseus/schema";
import {CoupleTeams, EventNames} from "../../enums";
import {array2ArraySchema} from "../Utils";

export class WereWolfEvent extends Schema {
    @type("string") eventName: EventNames;
    @type("string") from: string = "";
    @type(["string"]) targets: ArraySchema<string> = new ArraySchema<string>();
    @type("boolean") success: boolean;

    constructor(eventName: EventNames, from: string, targets: string[], success: boolean) {
        super();
        this.eventName = eventName;
        this.from = from;
        this.targets = array2ArraySchema<string>(targets);
        this.success = success;
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
