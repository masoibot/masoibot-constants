import {SkillNames, StageNames} from "../enums";

export const SKILL_ALLOWED_IN_STAGE: {[stage in StageNames]: SkillNames[]} = {
    [StageNames.END_GAME]: [SkillNames.ADMIN_START_GAME, SkillNames.READY, SkillNames.SKIP],
    [StageNames.WAITING_STAGE]: [SkillNames.ADMIN_START_GAME],
    [StageNames.START_GAME]: [SkillNames.READY],
    [StageNames.CUPID]: [SkillNames.PAIRING, SkillNames.POINT],
    [StageNames.WILD_CHILD]: [SkillNames.CHOOSE_MOTHER, SkillNames.POINT],
    [StageNames.SEER]: [SkillNames.SEE, SkillNames.POINT],
    [StageNames.SAVIOR]: [SkillNames.PROTECT, SkillNames.POINT],
    [StageNames.WOLF]: [SkillNames.BITE, SkillNames.SKIP, SkillNames.POINT],
    [StageNames.WOLF_PLUS]: [SkillNames.CURSE, SkillNames.SKIP],
    [StageNames.WITCH_SAVE]: [SkillNames.SAVE, SkillNames.SKIP],
    [StageNames.WITCH_KILL]: [SkillNames.KILL, SkillNames.POINT, SkillNames.SKIP],
    [StageNames.HUNTER]: [SkillNames.FIRE, SkillNames.POINT],
    [StageNames.COUPLE]: [SkillNames.SKIP, SkillNames.POINT],
    [StageNames.DISCUSS]: [SkillNames.SKIP, SkillNames.POINT],
    [StageNames.VOTE]: [SkillNames.VOTE, SkillNames.SKIP, SkillNames.POINT],
    [StageNames.LAST_WORD]: [SkillNames.SKIP],
    [StageNames.VOTE_YES_NO]: [SkillNames.VOTE_SAVE, SkillNames.VOTE_HANG],
    [StageNames.END_OF_DAY]: [SkillNames.SKIP]
};
/**
 * Skills require auto target (choose target by bot)
 */
export const MANDATORY_SKILLS: SkillNames[] = [
    SkillNames.PAIRING,
    SkillNames.CHOOSE_MOTHER,
    SkillNames.SEE,
    SkillNames.PROTECT,
    SkillNames.BITE,
    SkillNames.FIRE,
    SkillNames.VOTE,
    SkillNames.VOTE_HANG
];
/**
 * Skill of the stage, where the targets is extracted from
 * used by PrepareTargetCommands to determine 'skill' to retrieve targets
 */
export const STAGE_TARGET_SKILLS: {[stage in StageNames]?: SkillNames} = {
    [StageNames.CUPID]: SkillNames.PAIRING,
    [StageNames.WILD_CHILD]: SkillNames.CHOOSE_MOTHER,
    [StageNames.SEER]: SkillNames.SEE,
    [StageNames.SAVIOR]: SkillNames.PROTECT,
    [StageNames.WOLF]: SkillNames.BITE,
    [StageNames.HUNTER]: SkillNames.FIRE,
    [StageNames.WITCH_KILL]: SkillNames.KILL,
    [StageNames.WITCH_SAVE]: SkillNames.SAVE,
    [StageNames.WOLF_PLUS]: SkillNames.CURSE,
    [StageNames.VOTE]: SkillNames.VOTE,
    [StageNames.VOTE_YES_NO]: SkillNames.VOTE_HANG
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

export const SKILL_TARGET_IS_DEAD_MAN0 = [
    SkillNames.CURSE,
    SkillNames.SAVE,
    SkillNames.VOTE_SAVE,
    SkillNames.VOTE_HANG
];

export const SKILLS_REQUIRE_LAST_TARGET_DIFFERENT = [SkillNames.PROTECT, SkillNames.FIRE];
