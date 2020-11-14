import {Schema, SetSchema, type} from "@colyseus/schema";
import {v4 as uuidv4} from "uuid";

export class Message extends Schema {
    @type("string") id: string = uuidv4();
    @type("string") fromID: string = "";
    @type({set: "string"}) toIDs: SetSchema<string> = new SetSchema<string>();
    @type("string") content: string = "";
    @type("int64") createTime: number = Math.floor(Date.now() / 1000);

    constructor() {
        super();
    }

    _assign(fromID: string, content: string) {
        return (this as Message).assign({fromID, content});
    }
}
