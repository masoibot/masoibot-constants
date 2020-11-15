import {ArraySchema, MapSchema, Schema, type} from "@colyseus/schema";

export class RoomSetting extends Schema {
    @type("string") roomAdmin: string = "";
    @type("string") password: string = "";
    @type("boolean") autoChangeSetup: boolean = true;
    @type("number") maxPlayer: number = 20;
    @type(["string"]) bannedUsers: ArraySchema<string> = new ArraySchema<string>();

    // Cấu hình nhân vật tương ứng với người chơi
    // Cấu hình game
    @type({map: "uint8"}) rolesSetup: MapSchema<number> = new MapSchema();

    constructor() {
        super();
    }
}
