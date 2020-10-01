import {Schema, type} from "@colyseus/schema";
import {WerewolfRole} from "./WerewolfRole";

export class Player extends Schema {
    @type("uint8") seat: number = 0;
    @type("string") playerId: string = ""; // facebook token or something else :))
    @type("string") name: string = "";
    @type("string") avatar: string = "";
    // @filter(function (this: Player, client: Client, root:Schema) {
    //     return this.playerId == client.auth.uid ;
    // })
    @type(WerewolfRole) role: WerewolfRole | undefined;
    @type("boolean") alive: boolean = true;
    @type("boolean") flagChange: boolean = false;

    constructor(seat: number, playerId: string, name: string, avatar: string) {
        super();
        this.alive = true;
        this.seat = seat;
        this.playerId = playerId;
        this.name = name;
        this.avatar = avatar;
        this.role = undefined;
    }
}
