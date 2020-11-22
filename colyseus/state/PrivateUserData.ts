import {ArraySchema, Schema, type} from "@colyseus/schema";
import {Event} from "./Event";
import {Roles} from "../../enums";

export class PrivateUserData extends Schema {
    @type([Event]) eventInbox: ArraySchema<Event>;

    @type("uint16") roleID: Roles;

    @type("boolean") alive: boolean;
}
