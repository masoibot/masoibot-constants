import {SkillNames} from "./SkillNames";

enum mEventNames {
    BE_CURSED = "BE_CURSED",
    BE_PARED_WITH = "BE_PARED_WITH",
    SEE_MOTHER_DIE = "SEE_MOTHER_DIE",
    VIEW_LIFE = "VIEW_LIFE",
    VIEW_DEAD_MAN = "VIEW_DEAD_MAN",
    BECOME_WOLF = "BECOME_WOLF",
    DIE_OF_LOVE = "DIE_OF_LOVE",
    NO_EVENT = "NO_EVENT"
}

export type EventNames = SkillNames | mEventNames;
export const EventNames = {...SkillNames, ...mEventNames};
