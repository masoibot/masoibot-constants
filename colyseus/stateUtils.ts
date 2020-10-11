import {EventNames, Roles, SkillNames} from "../enums";
import {WereWolfEvent} from "./state/WereWolfLog";
import {arraySchema2Array, mapSchema2Object} from "./Utils";
import {EventData} from "../definitions/EventData";
import {Player} from "./state/Player";
import {State} from "./State";
import {MapSchema} from "@colyseus/schema";

export function countRoleEvent(state:State,id: string, eventName: EventNames, success?: boolean): number {
    if (!isPlayerExist(state,id)) return 0;
    let events: WereWolfEvent[] = state.players[id].role.roleEvents;
    return events.filter((e) => {
        const data = mapSchema2Object<EventData>(e.data);
        let successCondition = success ? data.success === success : true;
        return e.eventName === eventName && successCondition;
    }).length;
}

export function getCurrentTargets(state:State,uid: string, skill: SkillNames): string[] {
    if (isPlayerExist(state,uid)) {
        const player = state.players[uid];
        let actions = state.currentStage.actions
            .filter((a) => {
                return a.skill === skill && a.from === uid;
            })
            .reverse();
        if (actions.length > 0) {
            return arraySchema2Array(actions[0].targets);
        }
    }
    return [];
}

export function getLastTargets(state:State,uid: string, skill: SkillNames, dayNo?: number): string[] {
    if (isPlayerExist(state,uid)) {
        const player: Player = state.players[uid];
        let {roleEvents} = player.role;
        const events = roleEvents
            .filter((e) => {
                let data = mapSchema2Object<EventData>(e.data);
                let dayNoCondition = dayNo ? data.dayNo === dayNo : true;
                return dayNoCondition && e.eventName === skill;
            })
            .reverse();
        if (events.length > 0) {
            let data = mapSchema2Object<EventData>(events[0].data);
            return data.targets;
        }
    }
    return [];
}

export function isPlayerExist(state:State,id: string | undefined, alive?: boolean, role?: Roles): boolean {
    if (id == null || state.players[id] == null) return false;
    let player = state.players[id];
    let roleCondition = role ? player.role.roleID === role : true;
    let aliveCondition = alive != null ? player.alive === alive : true;
    return roleCondition && aliveCondition;
}
export function getAlivePlayers(state:State): MapSchema<Player> {
    const {players} = state;
    let result: MapSchema<Player> = new MapSchema<Player>();
for (const playersKey in players) {
    if (players[playersKey].alive) result[playersKey] = players[playersKey];
}
return result;
}

export function getDeadPlayers(state:State): MapSchema<Player> {
    const {players} = state;
    let result: MapSchema<Player> = new MapSchema<Player>();
for (const playersKey in players) {
    if (!players[playersKey].alive) result[playersKey] = players[playersKey];
}
return result;
}
export function getMaxVoted(state:State): string {
    const actions = state.currentStage.actions.filter((action) => action.skill !== SkillNames.SKIP);
    let result = null;
    let countMap = new MapSchema<number>();
    for (const action of actions) {
        let target = action.targets[0];
        if (countMap[target]) countMap[target]++;
        else countMap[target] = 1;
    }
    let maxCount = -1;
    for (const target in countMap) {
        if (countMap[target] === maxCount) {
            // hoà vote
            result = null;
        }
        if (countMap[target] > maxCount) {
            maxCount = countMap[target];
            result = target;
        }
    }
    return result;
}