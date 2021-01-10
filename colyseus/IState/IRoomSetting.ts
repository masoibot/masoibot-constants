import {IMap} from "./types/IMap";
import {ISet} from "./types/ISet";

export interface IRoomSetting {
    roomAdminID: string;
    password: string;
    autoChangeSetup: boolean;
    maxPlayer: number;
    bannedUserIDs: ISet<string>;

    rolesSetup: IMap<string, number>;
}

export function createIRoomSetting(): IRoomSetting {
    return {
        roomAdminID: "string",
        password: "string",
        autoChangeSetup: false,
        maxPlayer: 100,
        bannedUserIDs: new Set<string>(),

        rolesSetup: new Map<string, number>()
    };
}
