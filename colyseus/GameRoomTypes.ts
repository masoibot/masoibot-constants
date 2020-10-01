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
}

export interface Auth {
    uid: string;
}
