import {EventNames, Roles, SkillNames} from "../enums";
import {arraySchema2Array, setSchema2Array} from "./Utils";
import {Action, Event, EventResult, SESSION, StagesInDay, State, User} from "./state";
import {MapSchema, SetSchema} from "@colyseus/schema";

export function getActivePlayers(state: State) {
    return state.listStages.get(state.stageName)?.activePlayerIDs || new SetSchema<string>();
}

export function getSession(state: State) {
    return StagesInDay.includes(state.stageName) ? SESSION.DAY : SESSION.NIGHT;
}

export function countRoleEvent(state: State, id: string, eventName: EventNames, result?: EventResult): number {
    if (!isPlayerExist(state, id)) return 0; // || state.users.get(id).role == null
    // let events = arraySchema2Array<Event>(state.users.get(id).role.roleEvents);
    return state.events.filter((e) => {
        // const data = mapSchema2Object<EventData>(e.data);
        return e.from === id && e.name === eventName && (result == null || e.result === result);
    }).length;
}

export function getCurrentTargets(state: State, uid: string, skill: SkillNames): string[] {
    if (isPlayerExist(state, uid)) {
        const player = state.users.get(uid);
        let actions = state.actions
            .filter((a) => {
                return a.name === skill && a.from === uid;
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
        const events: Event[] = state.events
            ?.filter((e) => {
                // let data = mapSchema2Object<EventData>(e.data);
                let dayNoCondition = dayNo == null || e.dayNo === dayNo;
                return dayNoCondition && e.name === skill;
            })
            .reverse();
        if (events && events.length > 0) {
            // let data = mapSchema2Object<EventData>(events[0].data);
            return setSchema2Array(events[0].targets);
        }
    }
    return [];
}

export function isPlayerExist(state: State, id: string | undefined, alive?: boolean, role?: Roles): boolean {
    if (id == null || state.users.get(id) == null) return false;
    const player = state.users.get(id);
    const roleId = state.roleAssignment.get(id);
    const roleCondition = role == null || roleId === role;
    const aliveCondition = alive == null || player.alive === alive;
    return roleCondition && aliveCondition;
}

export function getAlivePlayers(state: State): MapSchema<User> {
    const {users} = state;
    const result: MapSchema<User> = new MapSchema<User>();
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
    const actions: Action[] = state.actions.filter((action) => action.name !== SkillNames.SKIP);
    let result: string | null = null;
    let countMap = new MapSchema<number>();
    for (const action of actions) {
        let target = setSchema2Array(action.targets)[0];
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
