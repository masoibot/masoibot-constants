import {Schema, type} from "@colyseus/schema";
import {v4 as uuidv4} from "uuid";

export class Message extends Schema {
    @type("string") from: string = "";
    @type("string") content: string = "";
    @type("int32") createTime: number = Math.floor(Date.now() / 1000);
    @type("string") id: string = uuidv4();

    constructor() {
        super();
    }

    _assign(from: string, content: string) {
        return (this as Message).assign({from, content});
    }
}
