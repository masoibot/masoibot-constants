export enum TeamNames {
    ANGEL = 9,
    COUPLE = 2,
    WEREWOLF = -1,
    VILLAGER = 1,
    NO_TEAM = 0
}

export const TEAM_NAME: {[team: string]: string} = {
    [TeamNames.ANGEL]: "Thiên sứ",
    [TeamNames.COUPLE]: "Cặp đôi",
    [TeamNames.WEREWOLF]: "Sói",
    [TeamNames.VILLAGER]: "DÂN",
    [TeamNames.NO_TEAM]: "HÒA"
};
