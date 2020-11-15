import {Schema, SetSchema, type} from "@colyseus/schema";

export class Stage extends Schema {
    @type({set: "string"}) activePlayerIDs: SetSchema<string> = new SetSchema<string>();
    @type("int64") maxChoices: number = 0;

    _assign(playerIds?: string[], maxChoices: number = 0) {
        return (this as Stage).assign({
            activePlayerIDs: new SetSchema(playerIds ? [...playerIds] : undefined),
            maxChoices
        });
    }
}
