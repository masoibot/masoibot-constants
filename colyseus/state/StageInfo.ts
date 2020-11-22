import {Schema, SetSchema, type} from "@colyseus/schema";

export class StageInfo extends Schema {
    @type({set: "string"}) activePlayerIDs: SetSchema<string> = new SetSchema<string>();
    @type("int64") maxChoices: number = 0;

    _assign(playerIds: string[] = [], maxChoices: number = 0) {
        return (this as StageInfo).assign({
            activePlayerIDs: new SetSchema(playerIds),
            maxChoices
        });
    }
}
