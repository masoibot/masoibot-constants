import {ArraySchema, filter, MapSchema, Schema, type} from "@colyseus/schema";
import {Roles} from "./Roles";
import {STAGE_TIMEOUT, Stages} from "./Stages";
import {Skills} from "./Skills";
import {Client} from "colyseus";
import {array2ArraySchema, arraySchema2Array} from "./Utils";
import {Teams} from "./Teams";
import {WereWolfLog} from "../PrivateState";
import {v4 as uuidv4} from "uuid";

export interface JoinOptions {
    playerId: string;
    playerName: string;
    playerPic: string;
    signature: string;
    villageId: string;
}

export interface Metadata {
    villageId: string;
    isPlaying: boolean;
}

export interface Auth {
    uid: string;
}

export class RoleData extends Schema implements IIRoleData {
    @type("boolean") skillWorking: boolean = true;
    @type("string") lover: string = null;

    @type("boolean") canCursed: boolean = true; // wolf+ only
    @type("string") lastTarget: string = null; // for both seer/saver or hunter
    @type("boolean") lastResult: boolean = false; // seer only
    @type("boolean") canSave: boolean = true; // witch only
    @type("boolean") canKill: boolean = true; // witch only
    @type("string") mother: string = null; // wild child only
    @type("uint8") lifeCount: number = 2; // old man only

    set<T extends IIRoleData = IIRoleData>(initValues: Partial<T>) {
        this.skillWorking = initValues.skillWorking ?? true;
        this.lover = initValues.lover ?? null;
        this.canCursed = initValues.canCursed ?? true;
        this.lastTarget = initValues.lastTarget ?? null;
        this.lastResult = initValues.lastResult ?? false;
        this.canSave = initValues.canSave ?? true;
        this.canKill = initValues.canKill ?? true;
        this.mother = initValues.mother ?? null;
        this.lifeCount = initValues.lifeCount ?? 2;
    }

    get<T extends IBaseRoleData = IIRoleData>(): Pick<RoleData, Extract<keyof T, keyof IIRoleData>> {
        return this;
    }
}

export class WerewolfRole extends Schema {
    @type("int8") roleID: Roles = Roles.VILLAGER;
    @type(RoleData) roleData: RoleData = new RoleData();

    constructor(roleID: Roles, roleData: RoleData) {
        super();
        this.roleID = roleID;
        this.roleData = roleData;
    }
}

export class Player extends Schema {
    @type("uint8") seat: number = 0;
    @type("string") playerId: string = ""; // facebook token or something else :))
    @type("string") name: string = "";
    @type("string") avatar: string = "";
    // @filter(function (this: Player, client: Client, root:Schema) {
    //     return this.playerId == client.auth.uid ;
    // })
    @type(WerewolfRole) role: WerewolfRole;
    @type("boolean") alive: boolean = true;
    @type("boolean") flagChange: boolean = false;

    constructor(seat: number, playerId: string, name: string, avatar: string) {
        super();Schema
        this.alive = true;
        this.seat = seat;
        this.playerId = playerId;
        this.name = name;
        this.avatar = avatar;
        this.role = undefined;
    }
}

export class Message extends Schema {
    @type("string") from: string = "";
    @type("string") content: string = "";
    @type("int32") createTime: number = 0;
    @type("string") id: string;

    constructor(from: string, content: string) {
        super();
        this.id = uuidv4();
        this.from = from;
        this.content = content;
        this.createTime = Math.floor(Date.now() / 1000);
    }
}

export class Action extends Schema {
    @type("string") from: string = "";
    @type("string") skill: Skills = Skills.NO_SKILL;
    @type(["string"]) targets: ArraySchema<string> = new ArraySchema<string>();

    constructor(from: string, type: Skills, targets: string[]) {
        super();
        this.from = from;
        this.skill = type;
        this.targets = array2ArraySchema<string>(targets);
    }
}

export class Stage extends Schema {
    @type("string") stageName: Stages = Stages.WAITING_STAGE;
    @type("int32") openTime: number = 0;
    @type("int32") closeTime: number = 0;
    @type(["string"]) activePlayers: ArraySchema<string> = new ArraySchema();
    @filter(function (this: Stage, client: Client) {
        return arraySchema2Array<string>(this.activePlayers).includes(client.auth.uid);
    })
    @type(["string"])
    deadMans: ArraySchema<string> = new ArraySchema();
    @filter(function (this: Stage, client: Client) {
        return arraySchema2Array<string>(this.activePlayers).includes(client.auth.uid);
    })
    @type([Action])
    actions: ArraySchema<Action> = new ArraySchema();
    @filter(function (this: Stage, client: Client) {
        return (
            arraySchema2Array<string>(this.activePlayers).includes(client.auth.uid) ||
            this.stageName == Stages.WAITING_STAGE
        );
    })
    @type([Message])
    messages: ArraySchema<Message> = new ArraySchema<Message>();

    constructor(stageName: Stages, activePlayers?: Array<string>) {
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

export class State extends Schema {
    // State is not Stage <- remember this;
    @type("string") roomAdmin: string = "";
    @type({map: "number"}) setup: MapSchema<number> = new MapSchema();
    @type({map: Player}) players: MapSchema<Player> = new MapSchema();
    @type(Stage) currentStage: Stage = new Stage(Stages.WAITING_STAGE);
    @type("int8") dayNo: number = 0;
    @type([WereWolfLog]) gameHistory: ArraySchema<WereWolfLog> = new ArraySchema<WereWolfLog>();
    @type("int8") winTeam: Teams = Teams.NO_TEAM;
}

export interface IBaseRoleData {
    skillWorking: boolean;
    lover: string | "" | null;
}

export interface IRoleDataWithLastTarget extends IBaseRoleData {
    lastTarget: string | "" | null;
}

export interface IHunterData extends IRoleDataWithLastTarget {
}

export interface ISeerData extends IRoleDataWithLastTarget {
    lastResult: boolean;
}

export interface ISaverData extends IRoleDataWithLastTarget {
}

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

export type IIRoleData = IBaseRoleData &
    IHunterData &
    ISeerData &
    ISaverData &
    IWitchData &
    IOldManData &
    IWildChildData &
    IWolfPlusData;
