import {Schema, type} from "@colyseus/schema";
import {v4 as uuidv4} from "uuid";
import {StageNames} from "../../enums";

export class Message extends Schema {
    @type("string") id: string = uuidv4();
    @type("string") fromID: string = "";
    @type("string") stageName: StageNames = StageNames.WAITING_STAGE; // => stagePlayers => toIDs
    @type("string") content: string = "";
    @type("int64") createTime: number = Math.floor(Date.now() / 1000);

    constructor() {
        super();
    }

    _assign(fromID: string, content: string) {
        return (this as Message).assign({fromID, content});
    }
}
