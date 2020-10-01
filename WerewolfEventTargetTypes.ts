export enum CoupleTeams {
    THIRD_PARTY = "teamThree",
    VILLAGER = "teamVillager",
    WOLF = "teamWolf"
}
type TargetId = string;
export type BePairTargets = [TargetId, CoupleTeams];
export type ViewLifeTargets = [TargetId, "0" | "1" | "2"];
