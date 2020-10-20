export interface JoinOptions {
    playerId: string;
    playerName: string;
    playerPic: string;
    signature: string;
    villageId: string;
}

export interface Metadata {
    villageId: string;
    isPlaying: boolean;
    lock?: boolean;
    watchers?: number;
    playing?: boolean;
    playersCount?: number;
    followings?: number;
}

export interface Auth {
    uid: string;
}
