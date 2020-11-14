import {ArraySchema, SetSchema, filter, Schema, type} from "@colyseus/schema";
import {StageNames} from "../../enums";
import {Client} from "colyseus";
import {Action} from "./Action";
import {Message} from "./Message";
import {STAGE_TIMEOUT} from "../../definitions/StageTimeout";

export class Stage extends Schema {
    @type("string") stageName: StageNames = StageNames.WAITING_STAGE;
    @type("int64") closeTime: number = Math.floor(Date.now() + STAGE_TIMEOUT[this.stageName] / 1000);
    @type({set: "string"}) activePlayers: SetSchema<string> = new SetSchema<string>();

    _assign(stageName: StageNames, activePlayers?: string[]) {
        const activePlayersArr = activePlayers ? new ArraySchema(...activePlayers) : new ArraySchema<string>();
        return (this as Stage).assign({stageName});
    }
}
