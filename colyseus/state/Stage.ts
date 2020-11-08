import {ArraySchema, filter, Schema, type} from "@colyseus/schema";
import {StageNames} from "../../enums";
import {Client} from "colyseus";
import {Action} from "./Action";
import {Message} from "./Message";
import {STAGE_TIMEOUT} from "../../definitions/StageTimeout";

export class Stage extends Schema {
    @type("string") stageName: StageNames = StageNames.WAITING_STAGE;
    @type("int32") openTime: number = Math.floor(Date.now() / 1000);
    @type("int32") closeTime: number = Math.floor(STAGE_TIMEOUT[this.stageName] / 1000) + this.openTime;
    @type(["string"]) activePlayers: ArraySchema<string> = new ArraySchema();
    @filter(function (this: Stage, client: Client) {
        return client.auth && this.activePlayers.includes(client.auth.uid);
    })
    @type(["string"])
    deadMans: ArraySchema<string> = new ArraySchema<string>();
    @filter(function (this: Stage, client: Client) {
        return client.auth && this.activePlayers.includes(client.auth.uid);
    })
    @type([Action])
    actions: ArraySchema<Action> = new ArraySchema<Action>();
    @filter(function (this: Stage, client: Client) {
        return (
            (client.auth && this.activePlayers.includes(client.auth.uid)) || this.stageName === StageNames.WAITING_STAGE
        );
    })
    @type([Message])
    messages: ArraySchema<Message> = new ArraySchema<Message>();

    constructor() {
        super();
        this.openTime = Math.floor(Date.now() / 1000);
        this.closeTime = Math.floor(STAGE_TIMEOUT[this.stageName] / 1000) + this.openTime;
    }

    _assign(stageName: StageNames, activePlayers?: string[]) {
        const activePlayersArr = activePlayers ? new ArraySchema(...activePlayers) : new ArraySchema<string>();
        return (this as Stage).assign({stageName, activePlayers: activePlayersArr});
    }
}
