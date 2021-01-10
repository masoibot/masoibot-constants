import {DEFAULT_AVATAR} from "../../../../const";
import {getBotPlatformName} from "../../../chatbot-core/bot-platforms/Platforms";

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

export function getChatbotPlatformName(user: IUser) {
    let splits = user.userID.split("-");
    if (splits.length === 2) return getBotPlatformName(splits[0]);
    return "";
}
