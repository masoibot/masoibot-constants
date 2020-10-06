import {ArraySchema, filter, Schema, type} from "@colyseus/schema";
import {StageNames} from "../../enums";
import {Client} from "colyseus";
import {Action} from "./Action";
import {Message} from "./Message";
import {STAGE_TIMEOUT} from "../../definitions/StageTimeout";

export class Stage extends Schema {
    @type("string") stageName: StageNames = StageNames.WAITING_STAGE;
    @type("int32") openTime: number = 0;
    @type("int32") closeTime: number = 0;
    @type(["string"]) activePlayers: ArraySchema<string> = new ArraySchema();
    @filter(function (this: Stage, client: Client) {
        return this.activePlayers.includes(client.auth.uid);
    })
    @type(["string"])
    deadMans: ArraySchema<string> = new ArraySchema();
    @filter(function (this: Stage, client: Client) {
        return this.activePlayers.includes(client.auth.uid);
    })
    @type([Action])
    actions: ArraySchema<Action> = new ArraySchema();
    @filter(function (this: Stage, client: Client) {
        return (
            this.activePlayers.includes(client.auth.uid) ||
            this.stageName === StageNames.WAITING_STAGE
        );
    })
    @type([Message])
    messages: ArraySchema<Message> = new ArraySchema<Message>();

    constructor(stageName: StageNames, activePlayers?: Array<string>) {
        super();
        this.stageName = stageName;
        this.openTime = Math.floor(Date.now() / 1000);
        this.closeTime = Math.floor(STAGE_TIMEOUT[this.stageName] / 1000) + this.openTime;
        this.messages = new ArraySchema<Message>();
        // this.messages.push(new Message("bot", "Chao mung ban den voi chat!"))
        this.deadMans = new ArraySchema<string>();
        activePlayers?.forEach((id) => this.activePlayers.push(id));
    }
}
