import {EventNames, Roles, SkillNames} from "../enums";
import {arraySchema2Array, setSchema2Array} from "./Utils";
import {Action, Event, EventResult, SESSION, StagesInDay, State, User} from "./state";
import {MapSchema, SetSchema} from "@colyseus/schema";

/**
 * getActivePlayers return activePlayer in current stage (each state.stageName)
 * NOTE1: stages with full players don't need to be defined in state.listStages
 *      so by default activePlayer is state.playerIds
 * NOTE2: stages is defined in state,listStages but activePlayerIDs is null/undefined
 *      it must be in client-side state where activePlayerIDs is filtered to null/undefined
 * @param state
 */
export function getActivePlayers(state: State) {
    const stage = state.listStages.get(state.stageName);
    return stage != null ? stage.activePlayerIDs || new SetSchema<string>() : state.playerIDs;
}

export function getSession(state: State) {
    return StagesInDay.includes(state.stageName) ? SESSION.DAY : SESSION.NIGHT;
}

/**
 * Đếm số lượng của 1 kiểu event của 1 người chơi
 * (Dùng cho các người chơi nhân vật đặc biệt, VD: Phù thuỳ biết mình đã dùng bao nhiêu bình cứu, già làng biết đã bị cắn bao nhiêu lần)
 * @param state
 * @param id
 * @param eventName
 * @param result
 */
export function countRoleEvent(state: State, id: string, eventName: EventNames, result?: EventResult): number {
    if (!isPlayerExist(state, id)) return 0; // || state.users.get(id).role == null
    // let events = arraySchema2Array<Event>(state.users.get(id).role.roleEvents);
    return state.events.filter((e) => {
        // const data = mapSchema2Object<EventData>(e.data);
        return e.from === id && e.name === eventName && (result == null || e.result === result);
    }).length;
}

/**
 * Đếm số lượng của event nhận được của 1 người chơi
 * @param state
 * @param userID
 * @param eventName
 * @param result
 */
export function countEvent(state: State, userID: string, eventName: EventNames, result?: EventResult): number {
    if (!isPlayerExist(state, userID)) return 0; // || state.users.get(id).role == null
    // let events = arraySchema2Array<Event>(state.users.get(id).role.roleEvents);
    return state.events.filter((e) => {
        // const data = mapSchema2Object<EventData>(e.data);
        return e.to.includes(userID) && e.name === eventName && (result == null || e.result === result);
    }).length;
}

/**
 * Lấy ra targets của action đầu tiên trong stage (dùng cho các state có 1 action như Witch, Hunter). note: các action được reset sau mỗi stage
 * @param state
 * @param uid
 * @param skill
 */
export function getCurrentTargets(state: State, uid: string, skill: SkillNames): string[] {
    if (isPlayerExist(state, uid)) {
        let actions = state.actions
            .filter((a) => a.name === skill && a.from === uid)
            .reverse();
        if (actions.length > 0) {
            return actions[0].targets.toArray().filter((targetId: string) => isPlayerExist(state, targetId, true));
        }
    }
    return [];
}

/**
 * Lấy ra targets gần đây nhất từ 1 Action của 1 nhân vật tại 1 ngày trong game.
 * Sử dụng cho xử lý điều kiện ở 1 số stage đặc biệt (VD: Stage sói cần check người bị cắn có được bảo vệ trước đó hay không)
 * @param state
 * @param userID
 * @param skill
 * @param dayNo
 */
export function getLastTargets(state: State, userID: string, skill: SkillNames, dayNo?: number): string[] {
    if (isPlayerExist(state, userID)) {
        const events: Event[] = state.events
            .filter((e) => e.name === skill && (dayNo == null || e.dayNo === dayNo))
            .reverse();
        if (events.length > 0) return events[0].targets.toArray().filter(uid => isPlayerExist(state, uid));
    }
    return [];
}

export function isPlayerExist(state: State, id: string | undefined, aliveFilterOn: boolean = false, roleFilter?: Roles): boolean {
    if (id == null || state.users.get(id) == null) return false;
    const player = state.users.get(id);
    const roleId = state.roleAssignment.get(id);
    const roleCondition = roleFilter == null || roleId === roleFilter;
    const aliveCondition = !aliveFilterOn || player.alive;
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
