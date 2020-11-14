import {Schema, type} from "@colyseus/schema";
import {WerewolfRole} from "./WerewolfRole";

export class User extends Schema {
    @type("string") userID: string = "";
    @type("string") name: string = "";
    @type("string") avatar: string = "";
    @type("uint8") seat: number = 0;
    @type("boolean") alive: boolean = true;

    _assign(seat: number, playerId: string, name: string, avatar: string) {
        return (this as User).assign({seat, userID: playerId, name, avatar});
    }
}
