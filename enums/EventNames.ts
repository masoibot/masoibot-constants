import {SkillNames} from "./SkillNames";

export enum mEventNames {
    VOTE_YES_NO = "VOTE_YES_NO",
    BE_CURSED = "BE_CURSED",
    BE_PAIRED_WITH = "BE_PAIRED_WITH",
    SEE_MOTHER_DIE = "SEE_MOTHER_DIE",
    BE_BITTEN = "BE_BITTEN",
    VIEW_DEAD_MAN = "VIEW_DEAD_MAN",
    BECOME_WOLF = "BECOME_WOLF",
    DIE_OF_LOVE = "DIE_OF_LOVE",
    NO_EVENT = "NO_EVENT"
}

export type EventNames = SkillNames | mEventNames;
export const EventNames = {...SkillNames, ...mEventNames};

export const EVENTS: EventNames[] = [
    EventNames.VOTE,
    EventNames.VOTE_SAVE,
    EventNames.VOTE_HANG,
    EventNames.BITE,
    EventNames.SEE,
    EventNames.SAVE,
    EventNames.FIRE,
    EventNames.FIRE_DIRECTLY,
    EventNames.KILL,
    EventNames.CURSE,
    EventNames.PAIRING,
    EventNames.CHOOSE_MOTHER,
    EventNames.READY,
    EventNames.SKIP,
    EventNames.ADMIN_START_GAME,
    EventNames.POINT,
    EventNames.PROTECT,
    EventNames.BE_BITTEN,
    EventNames.VIEW_DEAD_MAN,
    EventNames.BECOME_WOLF
];
