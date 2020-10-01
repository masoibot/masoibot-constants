import {SkillNames} from "./SkillNames";

enum mEventNames {
    BE_CURSED = "BE_CURSED",
    BE_PAIRED_WITH = "BE_PAIRED_WITH",
    SEE_MOTHER_DIE = "SEE_MOTHER_DIE",
    VIEW_LIFE = "VIEW_LIFE",
    VIEW_DEAD_MAN = "VIEW_DEAD_MAN",
    BECOME_WOLF = "BECOME_WOLF",
    DIE_OF_LOVE = "DIE_OF_LOVE",
    NO_EVENT = "NO_EVENT"
}

export type EventNames = SkillNames | mEventNames;
export const EventNames = {...SkillNames, ...mEventNames};

export const EVENTS: EventNames[] = [
    EventNames.VOTE,
    EventNames.VOTE_YES,
    EventNames.VOTE_NO,
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
    EventNames.VIEW_LIFE,
    EventNames.VIEW_DEAD_MAN,
    EventNames.BECOME_WOLF
];
