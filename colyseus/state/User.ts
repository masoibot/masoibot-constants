import {Schema, type} from "@colyseus/schema";
import {WerewolfRole} from "./WerewolfRole";

export class User extends Schema {
    @type("string") userID: string = "";
    @type("string") name: string = "";
    @type("string") avatar: string = "";
    @type("uint8") seat: number = 0;
    @type("boolean") online: boolean = true;
    @type("boolean") alive: boolean = true;

    _assign(userID: string, name: string, avatar: string, seat: number = 0) {
        return (this as User).assign({userID, name, avatar, seat});
    }
}
