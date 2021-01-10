import {ISet} from "./types";

export interface IStageInfo {
    activePlayerIDs: ISet<string>;
    maxChoices: number;
}
