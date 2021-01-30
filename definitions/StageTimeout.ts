import {StageNames} from "../enums";

export const STAGE_TIMEOUT: {[stage in StageNames]: number} = {
    [StageNames.START_GAME]: -1,
    [StageNames.CUPID]: 15 * 1000,
    [StageNames.WILD_CHILD]: 15 * 1000,
    [StageNames.SAVIOR]: 15 * 1000,
    [StageNames.SEER]: 15 * 1000,
    [StageNames.HUNTER]: 15 * 1000,
    [StageNames.WOLF]: 30 * 1000, // 35 * 1000,
    [StageNames.WOLF_PLUS]: 15 * 1000,
    [StageNames.WITCH_SAVE]: 15 * 1000,
    [StageNames.WITCH_KILL]: 15 * 1000,
    [StageNames.COUPLE]: 30 * 1000,
    [StageNames.DISCUSS]: 5 * 60 * 1000, // 5 * 60 * 1000,
    [StageNames.VOTE]: 10 * 1000,
    [StageNames.LAST_WORD]: 60 * 1000, // 1 * 60 * 1000,
    [StageNames.VOTE_YES_NO]: 15 * 1000,
    [StageNames.END_OF_DAY]: 3 * 1000,
    [StageNames.WAITING_STAGE]: -1,
    [StageNames.END_GAME]: -1
};
export const NEXT_STAGE_DELAY: {[stage in StageNames]: number} = {
    [StageNames.START_GAME]: 0,
    [StageNames.CUPID]: 0,
    [StageNames.WILD_CHILD]: 0,
    [StageNames.SAVIOR]: 0,
    [StageNames.SEER]: 0,
    [StageNames.HUNTER]: 0,
    [StageNames.WOLF]: 0, // 35 * 1000,
    [StageNames.WOLF_PLUS]: 0,
    [StageNames.WITCH_SAVE]: 0,
    [StageNames.WITCH_KILL]: 0,
    [StageNames.COUPLE]: 0,
    [StageNames.DISCUSS]: 0, // 5 * 60 * 1000,
    [StageNames.VOTE]: 0,
    [StageNames.LAST_WORD]: 0, // 1 * 60 * 1000,
    [StageNames.VOTE_YES_NO]: 0,
    [StageNames.END_OF_DAY]: 0,
    [StageNames.WAITING_STAGE]: 0,
    [StageNames.END_GAME]: 0
};
