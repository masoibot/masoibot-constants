import {ArraySchema, SetSchema, filter, Schema, type} from "@colyseus/schema";
import {StageNames} from "../../enums";
import {Client} from "colyseus";
import {Action} from "./Action";
import {Message} from "./Message";
import {STAGE_TIMEOUT} from "../../definitions/StageTimeout";

export class Stage extends Schema {
    @type("string")
    stageName: StageNames = StageNames.WAITING_STAGE;

    @type("int64") // dynamic stage duration
    duration: number = STAGE_TIMEOUT[this.stageName] / 1000;

    @type({set: "string"}) playerIDs: SetSchema<string> = new SetSchema<string>();

    _assign(stageName: StageNames, playerIds?: string[]) {
        return (this as Stage).assign({
            stageName,
            playerIDs: new SetSchema(playerIds ? [...playerIds] : undefined)
        });
    }
}
