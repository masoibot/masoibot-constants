import {Schema, type} from "@colyseus/schema";
import {WerewolfRole} from "./WerewolfRole";

export class Player extends Schema {
    @type("uint8") seat: number = 0;
    @type("string") playerId: string = "";
    @type("string") name: string = "";
    @type("string") avatar: string = "";
    // @filter(function (this: Player, client: Client, root:Schema) {
    //     return this.playerId == client.auth.uid ;
    // })
    @type(WerewolfRole) role: WerewolfRole | undefined = undefined;
    @type("boolean") alive: boolean = true;
    @type("boolean") flagChange: boolean = false;

    constructor() {
        super();
    }

    _assign(seat: number, playerId: string, name: string, avatar: string){
        return (this as Player).assign({seat, playerId, name, avatar});
    }
}
