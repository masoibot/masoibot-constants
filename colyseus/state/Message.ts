import {Schema, type} from "@colyseus/schema";
import {v4 as uuidv4} from "uuid";

export class Message extends Schema {
    @type("string") from: string = "";
    @type("string") content: string = "";
    @type("int32") createTime: number = 0;
    @type("string") id: string;

    constructor(from: string, content: string) {
        super();
        this.id = uuidv4();
        this.from = from;
        this.content = content;
        this.createTime = Math.floor(Date.now() / 1000);
    }
}
