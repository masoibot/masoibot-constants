export enum Roles {
    WOLF_PLUS = -3,
    CURSED = -2,
    WEREWOLF = -1,
    SEER = 1,
    SAVER = 2,
    HUNTER = 3,
    VILLAGER = 4,
    WITCH = 5,
    OLD_MAN = 6,
    CUPID = 7,
    LYCAN = 8,
    ANGEL = 9,
    WILD_CHILD = 10
}

export const ROLE_NAMES: {[role: number]: string} = {
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
    [Roles.ANGEL]: "THIÊN SỨ"
};

export const ROLE_IMAGES: {[role: number]: string} = {
    // PHE SÓI
    [Roles.WEREWOLF]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278418034541",
    [Roles.CURSED]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278411367875",
    [Roles.WOLF_PLUS]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1897745170521199",
    // PHE DÂN
    [Roles.SEER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278528034530",
    [Roles.SAVER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278331367883",
    [Roles.HUNTER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278518034531",
    [Roles.VILLAGER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278298034553",
    [Roles.WITCH]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278464701203‍",
    [Roles.OLD_MAN]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278381367878",
    [Roles.CUPID]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278324701217",
    [Roles.LYCAN]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1891874781108238",
    [Roles.ANGEL]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1903763679919348‍"
};
export const MAX_ROLE_COUNT_IN_GAME: {[role: number]: number} = {
    // PHE SÓI
    [Roles.WEREWOLF]: 100,
    [Roles.CURSED]: 1,
    [Roles.WOLF_PLUS]: 1,
    // PHE DÂN
    [Roles.SEER]: 1,
    [Roles.SAVER]: 1,
    [Roles.HUNTER]: 1,
    [Roles.VILLAGER]: 100,
    [Roles.WITCH]: 1,
    [Roles.OLD_MAN]: 1,
    [Roles.CUPID]: 1,
    [Roles.LYCAN]: 100,
    [Roles.ANGEL]: 1
};

export const AVAILABLE_ROLES = [
    Roles.VILLAGER,
    Roles.HUNTER,
    Roles.SAVER,
    Roles.SEER,
    Roles.WITCH,
    Roles.OLD_MAN,
    Roles.CUPID,
    Roles.CURSED,
    Roles.WEREWOLF,
    Roles.ANGEL,
    Roles.WOLF_PLUS,
    Roles.WILD_CHILD,
    Roles.LYCAN
];
