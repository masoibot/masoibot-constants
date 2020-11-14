import {EventNames, Roles, SkillNames} from "../enums";
import {Event} from "./state/WereWolfLog";
import {arraySchema2Array, mapSchema2Object} from "./Utils";
import {EventData} from "../definitions/EventData";
import {User} from "./state/User";
import {Action, State} from "./State";
import {MapSchema} from "@colyseus/schema";

export function countRoleEvent(state: State, id: string, eventName: EventNames, success?: boolean): number {
    if (!isPlayerExist(state, id) || state.users.get(id).role == null) return 0;
    let events = arraySchema2Array<Event>(state.users.get(id).role.roleEvents);
    return events.filter((e) => {
        const data = mapSchema2Object<EventData>(e.data);
        let successCondition = success ? data.success === success : true;
        return e.eventName === eventName && successCondition;
    }).length;
}

export function getCurrentTargets(state: State, uid: string, skill: SkillNames): string[] {
    if (isPlayerExist(state, uid)) {
        const player = state.users.get(uid);
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

export function getLastTargets(state: State, uid: string, skill: SkillNames, dayNo?: number): string[] {
    if (isPlayerExist(state, uid)) {
        const player: User = state.users.get(uid);
        let roleEvents = player.role?.roleEvents;
        const events = roleEvents
            ?.filter((e) => {
                let data = mapSchema2Object<EventData>(e.data);
                let dayNoCondition = dayNo ? data.dayNo === dayNo : true;
                return dayNoCondition && e.eventName === skill;
            })
            .reverse();
        if (events && events.length > 0) {
            let data = mapSchema2Object<EventData>(events[0].data);
            return data.targets;
        }
    }
    return [];
}

export function isPlayerExist(state: State, id: string | undefined, alive?: boolean, role?: Roles): boolean {
    if (id == null || state.users.get(id) == null) return false;
    let player = state.users.get(id);
    let roleCondition = role ? player.role.roleID === role : true;
    let aliveCondition = alive != null ? player.alive === alive : true;
    return roleCondition && aliveCondition;
}

export function getAlivePlayers(state: State): MapSchema<User> {
    const {users} = state;
    let result: MapSchema<User> = new MapSchema<User>();
    users.forEach((value, playersKey) => {
        if (users.get(playersKey).alive) result.set(playersKey, users.get(playersKey));
    });
    return result;
}

export function getDeadPlayers(state: State): MapSchema<User> {
    const {users} = state;
    let result: MapSchema<User> = new MapSchema<User>();
    users.forEach((value, playersKey) => {
        if (!users.get(playersKey).alive) result.set(playersKey, users.get(playersKey));
    });
    return result;
}

export function getMaxVoted(state: State): string | null {
    const actions: Action[] = state.currentStage.actions.filter((action) => action.skill !== SkillNames.SKIP);
    let result: string | null = null;
    let countMap = new MapSchema<number>();
    for (const action of actions) {
        let target = action.targets[0];
        const countTarget = countMap.get(target);
        if (countTarget != null) countMap.set(target, countTarget + 1);
        else countMap.set(target, 1);
    }
    let maxCount = -1;
    countMap.forEach((value, target) => {
        if (value === maxCount) {
            // hoà vote
            result = null;
        }
        if (value > maxCount) {
            maxCount = value;
            result = target;
        }
    });
    return result;
}

export function getPlayersName(state: State, listID: string[] | string | undefined, withSeat?: boolean) {
    if (typeof listID === "string") listID = [listID];
    if (Array.isArray(listID)) {
        // Vẫn phải check vì không biết tại sao react vẫn nhận "target" thay vì ["target"]
        return listID.map((id) => {
            if (isPlayerExist(state, id)) {
                return `${state.users.get(id).name}${
                    withSeat && typeof state.users.get(id).seat === "number" ? `(${state.users.get(id).seat})` : ""
                }`;
            } else return "";
        });
    } else return [];
}
