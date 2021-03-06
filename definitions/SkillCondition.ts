import {SkillNames, StageNames} from "../enums";

export const SKILL_ALLOWED_IN_STAGE: {[stage in StageNames]: SkillNames[]} = {
    END_GAME: [SkillNames.READY, SkillNames.SKIP],
    WAITING_STAGE: [SkillNames.ADMIN_START_GAME],
    START_GAME: [SkillNames.READY],
    CUPID: [SkillNames.PAIRING, SkillNames.POINT],
    WILD_CHILD: [SkillNames.CHOOSE_MOTHER, SkillNames.POINT],
    SEER: [SkillNames.SEE, SkillNames.POINT],
    SAVER: [SkillNames.PROTECT, SkillNames.POINT],
    WOLF: [SkillNames.BITE, SkillNames.SKIP, SkillNames.POINT],
    WOLF_PLUS: [SkillNames.CURSE, SkillNames.SKIP],
    WITCH_SAVE: [SkillNames.SAVE, SkillNames.SKIP],
    WITCH_KILL: [SkillNames.KILL, SkillNames.POINT, SkillNames.SKIP],
    HUNTER: [SkillNames.FIRE, SkillNames.POINT],
    COUPLE: [SkillNames.SKIP, SkillNames.POINT],
    DISCUSS: [SkillNames.SKIP, SkillNames.POINT],
    VOTE: [SkillNames.VOTE, SkillNames.SKIP, SkillNames.POINT],
    LAST_WORD: [SkillNames.SKIP],
    VOTE_YES_NO: [SkillNames.VOTE_YES, SkillNames.VOTE_NO],
    END_OF_DAY: [SkillNames.SKIP]
};
export const SKILL_REQUIRE_TARGETS = {
    [SkillNames.BITE]: 1,
    [SkillNames.CHOOSE_MOTHER]: 1,
    [SkillNames.FIRE]: 1,
    [SkillNames.FIRE_DIRECTLY]: 1,
    [SkillNames.KILL]: 1,
    [SkillNames.PAIRING]: 2,
    [SkillNames.PROTECT]: 1,
    [SkillNames.SEE]: 1,
    [SkillNames.VOTE]: 1
} as {[skill in SkillNames]: number};
