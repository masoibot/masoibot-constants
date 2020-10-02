import {ArraySchema, Schema, type} from "@colyseus/schema";

export class RoomSetting extends Schema {
    @type("string") roomAdmin: string = "";
    @type("string") passWord: string = "";
    @type("boolean") autoChangeSetup: boolean = true;
    @type("number") maxPlayer: number = 20;
    @type(["string"]) bannedUsers: ArraySchema<string> = new ArraySchema<string>();
}
