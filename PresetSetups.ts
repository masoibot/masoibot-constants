import {Roles as R} from "./Roles";
import {Random} from "../Utils";
export const MAX_PLAYER_IN_GAME = 20;
export const MIN_PLAYER_IN_GAME = 4;
export const SETUPS: {[numberOfPlayers: number]: Array<Array<R>>} = {
    [4]: [[R.SEER, R.VILLAGER, R.VILLAGER, R.WEREWOLF]],
    [5]: [
        [R.SEER, R.SAVER, R.VILLAGER, R.CURSED, R.WEREWOLF],
        [R.SEER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WEREWOLF]
    ],
    [6]: [
        [R.SEER, R.SAVER, R.VILLAGER, R.VILLAGER, R.CURSED, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.VILLAGER, R.LYCAN, R.CURSED, R.WEREWOLF],
        [R.SEER, R.VILLAGER, R.VILLAGER, R.WITCH, R.LYCAN, R.WOLF_PLUS]
    ],
    [7]: [
        [R.SEER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, R.LYCAN, R.WOLF_PLUS],
        [R.SEER, R.SAVER, R.VILLAGER, R.VILLAGER, R.LYCAN, R.CURSED, R.WEREWOLF],
        [R.SEER, R.SAVER, R.VILLAGER, R.WITCH, R.LYCAN, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.LYCAN, R.WEREWOLF, R.WEREWOLF]
    ],
    [8]: [
        [R.SEER, R.SAVER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, -R.HUNTER, R.CURSED],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.VILLAGER, R.VILLAGER, R.WITCH, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.VILLAGER, R.WITCH, R.LYCAN, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.WITCH, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.WITCH, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.HUNTER, R.VILLAGER, R.WITCH, R.OLD_MAN, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.VILLAGER, R.WITCH, R.OLD_MAN, R.CURSED, R.WEREWOLF, R.WEREWOLF]
    ],
    [9]: [
        [R.SEER, R.SAVER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, R.LYCAN, -R.HUNTER, R.CURSED],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.LYCAN, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.VILLAGER, R.VILLAGER, R.WITCH, R.LYCAN, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.WITCH, R.LYCAN, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.WITCH, R.OLD_MAN, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.WITCH, R.OLD_MAN, -R.HUNTER, R.CURSED],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.WITCH, R.OLD_MAN, R.LYCAN, -R.HUNTER, R.CURSED]
    ],
    [10]: [
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, R.OLD_MAN, -R.HUNTER, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, -R.HUNTER, R.CURSED, R.WEREWOLF],
        [R.SEER, R.SAVER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, R.OLD_MAN, R.CURSED, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, R.WEREWOLF, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.WITCH, R.LYCAN, R.WEREWOLF, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.VILLAGER, R.WITCH, R.CUPID, -R.HUNTER, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.WITCH, R.CURSED, R.WEREWOLF, R.WEREWOLF, R.WEREWOLF],
        [R.SEER, R.SAVER, R.HUNTER, R.VILLAGER, R.VILLAGER, R.WITCH, R.OLD_MAN, R.WEREWOLF, R.WEREWOLF, R.WEREWOLF]
    ],
    [11]: [
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WITCH,
            R.OLD_MAN,
            R.WEREWOLF,
            R.WEREWOLF,
            R.WEREWOLF
        ],
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WITCH,
            R.CURSED,
            R.WEREWOLF,
            R.WEREWOLF,
            R.WEREWOLF
        ],
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WITCH,
            R.CUPID,
            -R.HUNTER,
            R.WEREWOLF
        ],
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WITCH,
            R.CUPID,
            -R.HUNTER,
            R.CURSED
        ],
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WITCH,
            R.OLD_MAN,
            -R.HUNTER,
            R.CURSED
        ],
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WITCH,
            -R.HUNTER,
            R.CURSED,
            R.WEREWOLF
        ],
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WITCH,
            R.CUPID,
            R.CURSED,
            R.WEREWOLF,
            R.WEREWOLF
        ]
    ],
    [12]: [
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.WITCH,
            R.OLD_MAN,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WOLF_PLUS,
            R.WEREWOLF,
            R.WEREWOLF,
            R.WEREWOLF
        ]
    ],
    [13]: [
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.WITCH,
            R.OLD_MAN,
            R.VILLAGER,
            R.LYCAN,
            R.CUPID,
            R.WILD_CHILD,
            R.WOLF_PLUS,
            R.WEREWOLF,
            R.CURSED,
            R.ANGEL
        ]
    ],
    [14]: [
        [
            R.SEER,
            R.SAVER,
            R.HUNTER,
            R.WITCH,
            R.OLD_MAN,
            R.VILLAGER,
            R.VILLAGER,
            R.VILLAGER,
            R.WILD_CHILD,
            R.ANGEL,
            R.WOLF_PLUS,
            R.WEREWOLF,
            R.WEREWOLF,
            R.WEREWOLF
        ]
    ]
};

