import {ArraySchema, Schema, type} from "@colyseus/schema";
import {SkillNames} from "../../enums";
import {array2ArraySchema} from "../Utils";

export class Action extends Schema {
    @type("string") from: string = "";
    @type("string") skill: SkillNames = SkillNames.POINT;
    @type(["string"]) targets: ArraySchema<string> = new ArraySchema<string>();

    constructor(from: string, type: SkillNames, targets: string[]) {
        super();
        this.from = from;
        this.skill = type;
        this.targets = array2ArraySchema<string>(targets);
    }
}
