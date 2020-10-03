export enum RoomErrors {
    WRONG_SETUP = "WRONG_SETUP",
    ROOM_IS_FULL = "ROOM_IS_FULL",
    WRONG_ROOM_PASSWORD = "WRONG_ROOM_PASSWORD"
}

export enum SetupErrorTypes {
    PLAYERS_NOT_FIT = "PLAYERS_NOT_FIT",
    NOT_ENOUGH_WEREWOLF = "NOT_ENOUGH_WEREWOLF",
    TOO_MUCH_WEREWOLF = "TOO_MUCH_WEREWOLF",
    ROLE_REQUIRE_NOT_FIT = "ROLE_REQUIRE_NOT_FIT",
    ROLE_MAX_NOT_FIT = "ROLE_MAX_NOT_FIT",
    NOT_ENOUGH_VILLAGER = "NOT_ENOUGH_VILLAGER",
    ROLE_NOT_FOUND = "ROLE_NOT_FOUND"
}

export interface ISetupError {
    type: SetupErrorTypes;
    data: any[];
}
