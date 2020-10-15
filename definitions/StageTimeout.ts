import {StageNames} from "../enums";

export const STAGE_TIMEOUT: {[stage in StageNames]: number} = {
    START_GAME: -1,
    CUPID: 15 * 1000,
    WILD_CHILD: 15 * 1000,
    SAVER: 15 * 1000,
    SEER: 15 * 1000,
    HUNTER: 15 * 1000,
    WOLF: 30 * 1000, // 35 * 1000,
    WOLF_PLUS: 15 * 1000,
    WITCH_SAVE: 15 * 1000,
    WITCH_KILL: 15 * 1000,
    COUPLE: 30 * 1000,
    DISCUSS: 5 * 60 * 1000, // 5 * 60 * 1000,
    VOTE: 10 * 1000,
    LAST_WORD: 60 * 1000, // 1 * 60 * 1000,
    VOTE_YES_NO: 15 * 1000,
    END_OF_DAY: 3 * 1000,
    WAITING_STAGE: -1,
    END_GAME: -1
};
export const NEXT_STAGE_DELAY: {[stage in StageNames]: number} = {
    START_GAME: 0,
    CUPID: 0,
    WILD_CHILD: 0,
    SAVER: 0,
    SEER: 0,
    HUNTER: 0,
    WOLF: 0, // 35 * 1000,
    WOLF_PLUS: 0,
    WITCH_SAVE: 0,
    WITCH_KILL: 0,
    COUPLE: 0,
    DISCUSS: 0, // 5 * 60 * 1000,
    VOTE: 0,
    LAST_WORD: 0, // 1 * 60 * 1000,
    VOTE_YES_NO: 0,
    END_OF_DAY: 0,
    WAITING_STAGE: 0,
    END_GAME: 0
};
