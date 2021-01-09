import {MapSchema, Schema, SetSchema, type} from "@colyseus/schema";

export class RoomSetting extends Schema {
    @type("string") roomAdminID: string = "";
    @type("string") password: string = "";
    @type("boolean") autoChangeSetup: boolean = true;
    @type("number") maxPlayer: number = 20;
    @type({set: "string"}) bannedUserIDs: SetSchema<string> = new SetSchema<string>();

    // Cấu hình nhân vật tương ứng với người chơi
    // Cấu hình game
    @type({map: "uint8"}) rolesSetup: MapSchema<number> = new MapSchema();

    constructor() {
        super();
    }
}
