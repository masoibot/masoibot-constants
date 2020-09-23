import {Skills} from "./Skills";
import {Stages} from "./Stages";

export const SKILL_ALLOWED_IN_STAGE: {[stage in Stages]: Skills[]} = {
    END_GAME: [Skills.SKIP],
    WAITING_STAGE: [Skills.ADMIN_START_GAME],
    START_GAME: [Skills.READY, Skills.POINT],
    CUPID: [Skills.PAIRING, Skills.POINT],
    WILD_CHILD: [Skills.CHOOSE_MOTHER, Skills.POINT],
    SEER: [Skills.SEE, Skills.POINT],
    SAVER: [Skills.PROTECT, Skills.POINT],
    WOLF: [Skills.BITE, Skills.SKIP, Skills.POINT],
    WOLF_PLUS: [Skills.CURSE, Skills.POINT],
    WITCH_SAVE: [Skills.SAVE, Skills.POINT, Skills.SKIP],
    WITCH_KILL: [Skills.KILL, Skills.POINT, Skills.SKIP],
    OLD_MAN: [Skills.NO_SKILL],
    HUNTER: [Skills.FIRE, Skills.FIRE_DIRECTLY, Skills.POINT],
    COUPLE: [Skills.SKIP, Skills.POINT],
    DISCUSS: [Skills.SKIP, Skills.POINT],
    VOTE: [Skills.VOTE, Skills.SKIP, Skills.POINT],
    LAST_WORD: [Skills.SKIP],
    VOTE_YES_NO: [Skills.VOTE_YES, Skills.VOTE_NO],
    END_OF_DAY: [Skills.NO_SKILL]
};
