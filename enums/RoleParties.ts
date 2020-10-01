import {Roles} from "./Roles";

export enum PARTY {
    VILLAGER,
    BETRAYER, // Những kẻ phản bội
    WEREWOLF
}

export const ROLE_PARTY: {[party in PARTY]: Roles[]} = {
    [PARTY.VILLAGER]: [
        Roles.VILLAGER,
        Roles.OLD_MAN,
        Roles.WITCH,
        Roles.SEER,
        Roles.SAVER,
        Roles.HUNTER,
        Roles.CUPID,
        Roles.LYCAN,
        Roles.ANGEL,
        Roles.APPRENTICE_SEER,
        Roles.AURA_SEER,
        Roles.DISEASED,
        Roles.GHOST,
        Roles.IDIOT,
        Roles.MASON,
        Roles.MAYOR,
        Roles.PACIFIST,
        Roles.VIRGINIA_WOOLF,
        Roles.PI,
        Roles.PRIEST,
        Roles.PRINCE,
        Roles.SPELL_CASTER,
        Roles.TOUGH_GUY,
        Roles.TROUBLE_MAKER
    ],
    [PARTY.BETRAYER]: [
        Roles.WILD_CHILD,
        Roles.CURSED,
        Roles.DOPPEL_GANGER,
        Roles.DRUNK,
        Roles.CULT_LEADER,
        Roles.HOODLUM,
        Roles.TANNER,
        Roles.VAMPIRE,
        Roles.ILLUMINATI
    ],
    [PARTY.WEREWOLF]: [
        Roles.WEREWOLF,
        Roles.WOLF_PLUS,
        Roles.SORCERESS,
        Roles.LONE_WOLF,
        Roles.WOLF_CUB,
        Roles.MINION,
        Roles.DIRE_WOLF,
        Roles.ALPHA_WOLF,
        Roles.FRUIT_WOLF,
        Roles.FANG_FACE,
        Roles.WOLVERINE
    ]
};
