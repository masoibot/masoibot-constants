import {ArraySchema, Schema, type} from "@colyseus/schema";
import {Roles} from "../../enums";
import {Event} from "./Event";

export class RoleData extends Schema implements IRoleData {
    @type("boolean") skillWorking: boolean = true;
    @type("string") lover: string = "";

    @type("boolean") canCursed: boolean = true; // wolf+ only
    @type("string") lastTarget: string = ""; // for both seer/saver or hunter
    @type("boolean") lastResult: boolean = false; // seer only
    @type("boolean") canSave: boolean = true; // witch only
    @type("boolean") canKill: boolean = true; // witch only
    @type("string") mother: string = ""; // wild child only
    @type("uint8") lifeCount: number = 2; // old man only

    set<T extends IRoleData = IRoleData>(initValues: Partial<T>) {
        this.skillWorking = initValues.skillWorking ?? true;
        this.lover = initValues.lover ?? "";
        this.canCursed = initValues.canCursed ?? true;
        this.lastTarget = initValues.lastTarget ?? "";
        this.lastResult = initValues.lastResult ?? false;
        this.canSave = initValues.canSave ?? true;
        this.canKill = initValues.canKill ?? true;
        this.mother = initValues.mother ?? "";
        this.lifeCount = initValues.lifeCount ?? 2;
    }

    get<T extends IBaseRoleData = IRoleData>(): Pick<RoleData, Extract<keyof T, keyof IRoleData>> {
        return this;
    }
}

export class WerewolfRole extends Schema {
    @type("int8") roleID: Roles = Roles.VILLAGER;
    @type([Event]) roleEvents: ArraySchema<Event> = new ArraySchema<Event>();

    constructor(roleID: Roles) {
        super();
        this.roleID = roleID;
        this.roleEvents = new ArraySchema<Event>();
    }
}

export interface IBaseRoleData {
    skillWorking: boolean;
    lover: string | "" | null;
}

export interface IRoleDataWithLastTarget extends IBaseRoleData {
    lastTarget: string | "" | null;
}

export interface IHunterData extends IRoleDataWithLastTarget {}

export interface ISeerData extends IRoleDataWithLastTarget {
    lastResult: boolean;
}

export interface ISaverData extends IRoleDataWithLastTarget {}

export interface IWitchData extends IBaseRoleData {
    canSave: boolean;
    canKill: boolean;
}

export interface IOldManData extends IBaseRoleData {
    lifeCount: number;
}

export interface IWildChildData extends IBaseRoleData {
    mother: string;
}

export interface IWolfPlusData extends IBaseRoleData {
    canCursed: boolean;
}

export type IRoleData = IBaseRoleData &
    IHunterData &
    ISeerData &
    ISaverData &
    IWitchData &
    IOldManData &
    IWildChildData &
    IWolfPlusData;
