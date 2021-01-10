import {Roles, StageNames, TeamNames} from "../../enums";
import {createIRoomSetting, IRoomSetting} from "./IRoomSetting";
import {IArray, IMap, ISet} from "./types";
import {IAction, IEvent} from "./IEvent";
import {IUser} from "./IUser";
import {IMessage} from "./IMessage";
import {IStageInfo} from "./IStageInfo";

export interface IState {
    roomSetting: IRoomSetting;
    playerIDs: ISet<string>;
    spectatorIDs: ISet<string>;

    listStages: IMap<string, IStageInfo>;
    users: IMap<string, IUser>;
    roleAssignment: IMap<string, Roles>;

    actions: IArray<IAction>;
    messages: IArray<IMessage>;
    events: IArray<IEvent>;

    stageName: StageNames;
    dayNo: number;
    winTeam: TeamNames;
    closeTime: number;
    deadMenIDs: ISet<string>;
}

export function createIState(stageName: StageNames = StageNames.WAITING_STAGE): IState {
    return {
        roomSetting: createIRoomSetting(),
        playerIDs: new Set<string>(),
        spectatorIDs: new Set<string>(),

        listStages: new Map<string, IStageInfo>(),
        users: new Map<string, IUser>(),
        roleAssignment: new Map<string, Roles>(),

        actions: new Array<IAction>(),
        messages: new Array<IMessage>(),
        events: new Array<IEvent>(),

        stageName: stageName,
        dayNo: 0,
        winTeam: TeamNames.NO_TEAM,
        closeTime: 0,
        deadMenIDs: new Set<string>()
    };
}

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
