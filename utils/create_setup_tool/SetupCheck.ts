import {AVAILABLE_ROLES, PARTY, ROLE_PARTY, Roles} from "../../enums";
import {MapSchema} from "@colyseus/schema";
import {arrayNumber2MapSchema, mapSchemaNumber2Array} from "../../colyseus/Utils";
import {ISetupError, SetupErrorTypes} from "../../colyseus/RoomErrors";
import {ROLE_REQUIRE_ROLES} from "./SetupRequiments";
import {ROLE_MAX} from "../../definitions/RoleConsts";

export function checkSetup(setup: Roles[] | MapSchema<number>, numOfPlayer: number): boolean | ISetupError {
    let setupMap = Array.isArray(setup) ? arrayNumber2MapSchema(setup) : setup;
    let setupArr = Array.isArray(setup) ? setup : mapSchemaNumber2Array(setup);
    let trueRoles = setupArr.filter((r) => r < AVAILABLE_ROLES.length && r >= 0);
    if (trueRoles.length < setupArr.length)
        return {
            type: SetupErrorTypes.ROLE_NOT_FOUND,
            data: []
        } as ISetupError;
    if (setupArr.length !== numOfPlayer) return {type: SetupErrorTypes.PLAYERS_NOT_FIT, data: []} as ISetupError;
    let goodCount = 0;
    let badCount = 0;
    for (const roleKey in setupMap) {
        const role = parseInt(roleKey) as Roles;
        for (const requireRole of ROLE_REQUIRE_ROLES[role]) {
            if (!setupArr.includes(requireRole))
                return {
                    type: SetupErrorTypes.ROLE_REQUIRE_NOT_FIT,
                    data: [role, requireRole]
                } as ISetupError;
        }
        if (ROLE_PARTY[PARTY.VILLAGER].includes(role)) goodCount += setupMap[roleKey];
        if (ROLE_PARTY[PARTY.WEREWOLF].includes(role)) badCount += setupMap[roleKey];
        if (ROLE_MAX[role] < setupMap[roleKey])
            return {
                type: SetupErrorTypes.ROLE_MAX_NOT_FIT,
                data: [role, ROLE_MAX[role]]
            } as ISetupError;
    }
    if (badCount > 0 && badCount >= goodCount)
        return {
            type: SetupErrorTypes.TOO_MUCH_WEREWOLF,
            data: []
        } as ISetupError;
    if (badCount === 0)
        return {
            type: SetupErrorTypes.NOT_ENOUGH_WEREWOLF,
            data: []
        } as ISetupError;
    if (goodCount === 0)
        return {
            type: SetupErrorTypes.NOT_ENOUGH_VILLAGER,
            data: []
        } as ISetupError;
    return true;
}

export function isSameSetup(setup1: MapSchema<number>, setup2: MapSchema<number>) {
    if (Object.keys(setup1).length !== Object.keys(setup2).length) return false;
    for (const key in setup1) {
        if (setup1[key] !== setup2[key]) return false;
    }
    return true;
}
