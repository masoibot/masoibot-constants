import {CoupleTeams, EventNames} from "../enums";

export class EventData {
    constructor(
        public targets: string[] = [],
        public success: boolean = true,
        public dayNo: number|undefined = undefined,
        public session: number|undefined = undefined
    ) {}
}

export class CupidEventData extends EventData {
    constructor(targets: string[], public team: CoupleTeams) {
        super(targets, true);
    }
}
