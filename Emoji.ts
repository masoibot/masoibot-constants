import {Stages} from "./Stages";
import {Roles} from "./Roles";
import {Skills} from "./Skills";

const stageChatEmoji: {[stage: string]: string} = {
    [Stages.WOLF]: "🐺",
    [Stages.COUPLE]: "<3",
    [Stages.DISCUSS]: "💬"
};

export function getStageChatEmoji(stage?: Stages) {
    if (stage === undefined) return "💬";
    let emoji = stageChatEmoji[stage];
    if (emoji !== undefined) return emoji;
    return "💬";
}

const skillEmoji: {[skill: string]: string} = {
    [Skills.VOTE_YES]: "👎",
    [Skills.VOTE_NO]: "👍",
    [Skills.BITE]: "🎯",
    [Skills.VOTE]: "🎯"
};

export function getSkillEmoji(skill: Skills) {
    let emoji = skillEmoji[skill];
    if (emoji !== undefined) return emoji;
    return "🎯";
}

export const ROLE_EMOJI: {[role in number]: string} = {
    // PHE SÓI
    [Roles.WEREWOLF]: "🐺",
    [Roles.CURSED]: "🐺",
    [Roles.WOLF_PLUS]: "🐺",

    // PHE DÂN
    [Roles.SEER]: "👁",
    [Roles.SAVER]: "🛡",
    [Roles.HUNTER]: "🏹",
    [Roles.VILLAGER]: "🎅",
    [Roles.WITCH]: "🧙‍",
    [Roles.OLD_MAN]: "👴",
    [Roles.CUPID]: "👼",
    [Roles.LYCAN]: "👽",
    [Roles.ANGEL]: "🧚‍"
};

export const ROOM_HOT_LEVER_EMOJI = ["🔵", "🟢", "🟡", "🟠", "🔴"];
