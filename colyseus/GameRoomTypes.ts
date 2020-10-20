export interface JoinOptions {
    playerId: string;
    playerName: string;
    playerPic: string;
    signature: string;
    villageId: string;
    pass?: string;
}

export interface Metadata {
    villageId: string;
    lock?: boolean;
    isPlaying: boolean;
    playersCount?: number;
    watchers?: number;
    followings?: number;
}

export interface Auth {
    uid: string;
}
