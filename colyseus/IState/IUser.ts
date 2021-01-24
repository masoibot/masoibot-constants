export const DEFAULT_AVATAR =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiPTRl5x5DEr1_O3TXqt7V7nFLO9UzDwcoMA&usqp=CAU";

export interface IUserCredential {
    userID: string;
    name: string;
    avatar: string;
}

export function createIUserCredential(
    uid: string = "undefined!",
    name: string = uid,
    avatar: string = DEFAULT_AVATAR
): IUserCredential {
    return {
        userID: uid,
        name: name,
        avatar: avatar
    };
}

export interface IUser extends IUserCredential {
    seat: number;
    online: boolean;
    alive: boolean;
}

export function createIUser(uid: string = "undefined!", name: string = uid, avatar: string = DEFAULT_AVATAR, seat = 1) {
    return {
        userID: uid,
        name: name,
        avatar: avatar,
        seat: seat,
        online: true,
        alive: true
    };
}
