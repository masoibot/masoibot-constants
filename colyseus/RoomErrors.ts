export enum RoomErrors {
    WRONG_SETUP = "WRONG_SETUP",
    ROOM_IS_FULL = "ROOM_IS_FULL",
    WRONG_ROOM_PASSWORD = "WRONG_ROOM_PASSWORD"
}

export enum SetupErrorTypes {
    PLAYERS_NOT_FIT = "setupNotFitToPlayers",
    NOT_ENOUGH_WEREWOLF = "setupHaveNoWolf",
    TOO_MUCH_WEREWOLF = "setupHaveTooMuchWolf",
    ROLE_REQUIRE_NOT_FIT = "setupHaveRoleRequireRole"
}

export interface ISetupError {
    type: SetupErrorTypes;
    data: string[];
}
