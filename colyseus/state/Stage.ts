import {Schema, SetSchema, type} from "@colyseus/schema";

export class Stage extends Schema {
    @type({set: "string"}) activePlayerIDs: SetSchema<string> = new SetSchema<string>();

    _assign(playerIds?: string[]) {
        return (this as Stage).assign({
            activePlayerIDs: new SetSchema(playerIds ? [...playerIds] : undefined)
        });
    }
}
