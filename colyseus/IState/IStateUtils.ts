import {IState, IUser} from "./index";
import {ISetToArray} from "./types";
import {arrayNullUndefinedFilter} from "../../utils/miscellaneous";

/**
 * getActivePlayers return activePlayer in current stage (each state.stageName)
 * NOTE1: stages with full players don't need to be defined in state.listStages
 *      so by default activePlayer is state.playerIds
 * NOTE2: stages is defined in state,listStages but activePlayerIDs is null/undefined
 *      it must be in IState-side state where activePlayerIDs is filtered to null/undefined
 * @param state
 */
export function getIActivePlayerIds(state: IState) {
    const stage = state.listStages.get(state.stageName);
    return stage != null ? stage.activePlayerIDs || new Set<string>() : state.playerIDs;
}

export function getAlivePlayers({playerIDs, users}: IState): IUser[] {
    return ISetToArray(playerIDs)
        .map((uid) => users.get(uid))
        .filter((user) => user?.alive)
        .filter(arrayNullUndefinedFilter);
}

export function getSpectators(state: IState): IUser[] {
    return ISetToArray(state.spectatorIDs)
        .map((uid) => state.users.get(uid))
        .filter(arrayNullUndefinedFilter);
}

export function getPlayers(state: IState): IUser[] {
    return ISetToArray(state.playerIDs)
        .map((uid) => state.users.get(uid))
        .filter(arrayNullUndefinedFilter);
}
