import {Roles} from "./Roles";
import {Stages} from "./Stages";

export const STAGES_BY_ROLE: {[role in Roles]: Stages[]} = {
    [Roles.WEREWOLF]: [], // Stage WOLF là 1 stage mặc định giống VOTE, DISCUS,.. nên không thêm vào đây
    [Roles.CURSED]: [],
    [Roles.WOLF_PLUS]: [Stages.WOLF_PLUS],
    [Roles.SEER]: [Stages.SEER],
    [Roles.SAVER]: [Stages.SAVER],
    [Roles.HUNTER]: [Stages.HUNTER],
    [Roles.VILLAGER]: [],
    [Roles.WITCH]: [Stages.WITCH_SAVE, Stages.WITCH_KILL],
    [Roles.OLD_MAN]: [Stages.OLD_MAN],
    [Roles.CUPID]: [Stages.CUPID, Stages.COUPLE],
    [Roles.LYCAN]: [],
    [Roles.ANGEL]: [],
    [Roles.WILD_CHILD]: [Stages.WILD_CHILD]
};
export const STAGES_FOR_ROLE: {[role in Roles]: Stages[]} = {
    [Roles.WEREWOLF]: [Stages.WOLF],
    [Roles.CURSED]: [],
    [Roles.WOLF_PLUS]: [Stages.WOLF_PLUS, Stages.WOLF],
    [Roles.SEER]: [Stages.SEER],
    [Roles.SAVER]: [Stages.SAVER],
    [Roles.HUNTER]: [Stages.HUNTER],
    [Roles.VILLAGER]: [],
    [Roles.WITCH]: [Stages.WITCH_SAVE, Stages.WITCH_KILL],
    [Roles.OLD_MAN]: [Stages.OLD_MAN],
    [Roles.CUPID]: [Stages.CUPID, Stages.COUPLE],
    [Roles.LYCAN]: [],
    [Roles.ANGEL]: [],
    [Roles.WILD_CHILD]: [Stages.WILD_CHILD]
};
