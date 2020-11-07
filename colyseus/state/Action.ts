import {ArraySchema, Schema, type} from "@colyseus/schema";
import {SkillNames} from "../../enums";
import {array2ArraySchema} from "../Utils";

export class Action extends Schema {
    @type("string") from: string = "";
    @type("string") skill: SkillNames = SkillNames.POINT;
    @type(["string"]) targets: ArraySchema<string> = new ArraySchema<string>();

    constructor() {
        super();
    }

    _assign(from: string, skill: SkillNames, targets: string[]){
        return (this as Action).assign({from, skill, targets: array2ArraySchema<string>(targets)})
    }
}
