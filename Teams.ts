export enum Teams {
    ANGEL = 9,
    COUPLE = 2,
    WEREWOLF = -1,
    VILLAGER = 1,
    NO_TEAM = 0
}

export const TEAM_NAME: {[team: string]: string} = {
    [Teams.ANGEL]: "Thiên sứ",
    [Teams.COUPLE]: "Cặp đôi",
    [Teams.WEREWOLF]: "Sói",
    [Teams.VILLAGER]: "DÂN",
    [Teams.NO_TEAM]: "HÒA"
};
