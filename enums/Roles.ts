/**
 * Lưu ý : giữ nguyên thứ tự enum để tránh ảnh hưởng tới việc hiển thị
 */
export enum Roles {
    // Phe dân
    VILLAGER,
    LYCAN,
    ANGEL,
    CUPID,
    SEER,
    SAVER,
    HUNTER,
    WITCH,
    OLD_MAN,
    APPRENTICE_SEER,
    AURA_SEER,
    DISEASED,
    GHOST,
    MASON,
    MAYOR,
    PACIFIST,
    PI,
    PRIEST,
    PRINCE,
    SPELL_CASTER,
    TOUGH_GUY,
    TROUBLE_MAKER,
    IDIOT,
    VIRGINIA_WOOLF,
    // Đổi phe
    WILD_CHILD,
    CURSED,
    CULT_LEADER,
    DOPPEL_GANGER,
    DRUNK,
    HOODLUM,
    ILLUMINATI,
    TANNER,
    VAMPIRE,
    // Phe sói
    WEREWOLF,
    WOLF_PLUS,
    FANG_FACE,
    DIRE_WOLF,
    FRUIT_WOLF,
    LONE_WOLF,
    MINION,
    SORCERESS,
    WOLVERINE,
    WOLF_CUB,
    ALPHA_WOLF
}

export const AVAILABLE_ROLES = Object.keys(Roles)
    .slice(0, Object.keys(Roles).length / 2)
    .map((str) => parseInt(str) as Roles);

// Dùng phía server, không xoá
export const ROLE_NAMES: {[role in Roles]: string} = {
    // PHE SÓI
    [Roles.WEREWOLF]: "SÓI",
    [Roles.CURSED]: "BÁN SÓI",
    [Roles.WOLF_PLUS]: "SÓI NGUYỀN",
    [Roles.WILD_CHILD]: "CON HOANG",
    // PHE DÂN
    [Roles.SEER]: "TIÊN TRI",
    [Roles.SAVER]: "BẢO VỆ",
    [Roles.HUNTER]: "THỢ SĂN",
    [Roles.VILLAGER]: "DÂN",
    [Roles.WITCH]: "PHÙ THỦY",
    [Roles.OLD_MAN]: "GIÀ LÀNG",
    [Roles.CUPID]: "THẦN TÌNH YÊU",
    [Roles.LYCAN]: "NGƯỜI HÓA SÓI",
    [Roles.ANGEL]: "THIÊN SỨ",
    [Roles.ALPHA_WOLF]: "",
    [Roles.APPRENTICE_SEER]: "",
    [Roles.AURA_SEER]: "",
    [Roles.CULT_LEADER]: "",
    [Roles.DIRE_WOLF]: "",
    [Roles.DISEASED]: "",
    [Roles.DOPPEL_GANGER]: "",
    [Roles.DRUNK]: "",
    [Roles.FANG_FACE]: "",
    [Roles.FRUIT_WOLF]: "",
    [Roles.GHOST]: "",
    [Roles.HOODLUM]: "",
    [Roles.ILLUMINATI]: "",
    [Roles.LONE_WOLF]: "",
    [Roles.MASON]: "",
    [Roles.MAYOR]: "",
    [Roles.MINION]: "",
    [Roles.PACIFIST]: "",
    [Roles.PI]: "",
    [Roles.PRIEST]: "",
    [Roles.PRINCE]: "",
    [Roles.SORCERESS]: "",
    [Roles.SPELL_CASTER]: "",
    [Roles.TANNER]: "",
    [Roles.TOUGH_GUY]: "",
    [Roles.TROUBLE_MAKER]: "",
    [Roles.VAMPIRE]: "",
    [Roles.IDIOT]: "",
    [Roles.VIRGINIA_WOOLF]: "",
    [Roles.WOLF_CUB]: "",
    [Roles.WOLVERINE]: ""
};