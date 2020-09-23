export enum Stages {
    WAITING_STAGE = "WAITING_STAGE",
    START_GAME = "START_GAME",
    CUPID = "CUPID" /** @const CUPID gọi cupid dậy ghép đôi */,
    WILD_CHILD = "WILD_CHILD" /** @const WILD_CHILD gọi con hoang dậy nhận mẹ */,
    SAVER = "SAVER" /** @const SAVER gọi bảo vệ dậy chọn người cần cứu */,
    SEER = "SEER" /** @const SEER gọi tiên tri dậy */,
    HUNTER = "HUNTER" /**@const HUNTER gọi thợ săn dậy chọn người chết theo nếu bị sói cắn */,
    WOLF = "WOLF" /** @const WOLF gọi sói dậy cắn người */,
    WOLF_PLUS = "WOLF_PLUS" /** @const WOLF_PLUS gọi sói nguyền dậy */,
    WITCH_SAVE = "WITCH_SAVE" /** @const WITCH gọi phù thuỷ dậy */,
    WITCH_KILL = "WITCH_KILL" /** @const WITCH gọi phù thuỷ dậy */,
    COUPLE = "COUPLE" /**@const COUPLE cặp đôi thảo luận*/,
    OLD_MAN = "OLD_MAN" /**@const OLD_MAN gọi già làng thông báo số mạng  */,
    DISCUSS = "DISCUSS",
    VOTE = "VOTE",
    LAST_WORD = "LAST_WORD",
    VOTE_YES_NO = "VOTE_YES_NO",
    END_OF_DAY = "END_OF_DAY",
    END_GAME = "END_GAME"
}

export const STAGE_TIMEOUT: {[stage in Stages]: number} = {
    START_GAME: -1,
    CUPID: 15 * 1000,
    WILD_CHILD: 15 * 1000,
    SAVER: 15 * 1000,
    SEER: 15 * 1000,
    HUNTER: 15 * 1000,
    WOLF: 30 * 1000, // 35 * 1000,
    WOLF_PLUS: 15 * 1000,
    WITCH_SAVE: 15 * 1000,
    WITCH_KILL: 15 * 1000,
    COUPLE: 30 * 1000,
    OLD_MAN: 3 * 1000,
    DISCUSS: 5 * 60 * 1000, // 5 * 60 * 1000,
    VOTE: 10 * 1000,
    LAST_WORD: 60 * 1000, // 1 * 60 * 1000,
    VOTE_YES_NO: 15 * 1000,
    END_OF_DAY: 3 * 1000,
    WAITING_STAGE: -1,
    END_GAME: -1
};
export const NEXT_STAGE_DELAY: {[stage in Stages]: number} = {
    START_GAME: 0,
    CUPID: 0,
    WILD_CHILD: 0,
    SAVER: 0,
    SEER: 0,
    HUNTER: 0,
    WOLF: 0, // 35 * 1000,
    WOLF_PLUS: 0,
    WITCH_SAVE: 0,
    WITCH_KILL: 0,
    COUPLE: 0,
    OLD_MAN: 0,
    DISCUSS: 0, // 5 * 60 * 1000,
    VOTE: 0,
    LAST_WORD: 0, // 1 * 60 * 1000,
    VOTE_YES_NO: 0,
    END_OF_DAY: 0,
    WAITING_STAGE: 0,
    END_GAME: 0
};

export const NEXT_STAGE: {[stage in Stages]: Stages} = {
    END_GAME: Stages.WAITING_STAGE,
    WAITING_STAGE: Stages.START_GAME,
    START_GAME: Stages.CUPID,
    CUPID: Stages.WILD_CHILD,
    WILD_CHILD: Stages.SEER,
    SEER: Stages.SAVER,
    SAVER: Stages.WOLF,
    WOLF: Stages.WOLF_PLUS,
    WOLF_PLUS: Stages.WITCH_SAVE,
    WITCH_SAVE: Stages.WITCH_KILL,
    WITCH_KILL: Stages.OLD_MAN,
    OLD_MAN: Stages.HUNTER,
    HUNTER: Stages.COUPLE,
    COUPLE: Stages.DISCUSS,
    DISCUSS: Stages.VOTE,
    VOTE: Stages.LAST_WORD,
    LAST_WORD: Stages.VOTE_YES_NO,
    VOTE_YES_NO: Stages.END_OF_DAY,
    END_OF_DAY: Stages.SEER // cupid và wildchild chỉ được gọi 1 lần
};

/** @deprecated */
export const STAGE_NAME: {[stage in Stages]: string} = {
    END_GAME: "",
    END_OF_DAY: "",
    WAITING_STAGE: "Đang chờ người chơi khác tham gia",
    START_GAME: "Trò chơi bắt đầu",
    CUPID: "Cupid ơi dậy đi! Đêm nay cupid hãy chọn 2 người để ghép thành một đôi!",
    WILD_CHILD: "Con hoang ơi dậy đi! Đêm nay con hoang hãy chọn một người làm mẹ!",
    SAVER: "Bảo vệ ơi dậy đi! Đêm nay bảo vệ muốn bảo vệ ai?",
    SEER: "Tiên tri ơi dậy đi!Đêm nay tiên tri muốn soi ai?",
    HUNTER: "Thợ săn ơi dậy đi! Đêm nay thợ săn muốn ghim ai?",
    WOLF: "Những con sói hãy dậy đi! Đêm nay những con sói muốn cắn ai?",
    WOLF_PLUS: "Sói nguyền hãy dậy đi! Đêm nay người này chết, Sói nguyền có muốn nguyền không?",
    WITCH_SAVE: "Phù thủy ơi dậy đi! Đêm nay người này chết, Phù thuỷ có muốn cứu không?",
    WITCH_KILL: "Phù thủy ơi dậy đi! Phù thuỷ có muốn giết ai không?",
    COUPLE: "Cặp đôi ơi dậy đi! 2 bạn có 1 phút để trò chuyện với nhau.",
    OLD_MAN: "Già làng ơi dậy đi! Đây là số mạng còn lại của già làng.",
    DISCUSS: "Trời sáng rồi! Mọi người hãy thức dậy thôi",
    VOTE: "Đã hết thời gian thảo luận!",
    LAST_WORD: "Mời người bị treo cổ lên giàn!",
    VOTE_YES_NO: "Đã hết giờ thanh minh, mọi người hãy đưa ra quyết định của mình!"
};
export const STAGE_DESCRIPTION: {[stage in Stages]: string} = {
    END_GAME: "Trò chơi kết thúc",
    END_OF_DAY: "Trời tối rồi, cả làng đi ngủ",
    WAITING_STAGE: "Đang chờ người chơi khác tham gia",
    START_GAME: "Mọi người hãy sẵn sàng để bắt đầu chơi",
    CUPID: "Cupid ơi dậy đi! Đêm nay cupid hãy chọn 2 người để ghép thành một đôi!",
    WILD_CHILD: "Con hoang ơi dậy đi! Đêm nay con hoang hãy chọn một người làm mẹ!",
    SAVER: "Bảo vệ ơi dậy đi! Đêm nay bảo vệ muốn bảo vệ ai?",
    SEER: "Tiên tri ơi dậy đi!Đêm nay tiên tri muốn soi ai?",
    HUNTER: "Thợ săn ơi dậy đi! Đêm nay thợ săn muốn ghim ai?",
    WOLF: "Sói ơi dậy đi! Đêm nay sói muốn cắn ai?",
    WOLF_PLUS: "Sói nguyền ơi dậy đi! Đêm nay người này chết, Sói nguyền có muốn nguyền không?",
    WITCH_SAVE: "Phù thủy ơi dậy đi! Đêm nay người này chết, Phù thuỷ có muốn cứu không?",
    WITCH_KILL: "Phù thủy ơi dậy đi! Phù thuỷ có muốn giết ai không?",
    COUPLE: "Cặp đôi ơi dậy đi! 2 bạn có 1 phút để trò chuyện với nhau.",
    OLD_MAN: "Già làng ơi dậy đi! Đây là số mạng còn lại của già làng.",
    DISCUSS: "Trời sáng rồi! Mọi người hãy thức dậy thôi",
    VOTE: "Đã hết thời gian thảo luận!",
    LAST_WORD: "Mời người bị treo cổ lên giàn!",
    VOTE_YES_NO: "Đã hết giờ thanh minh, mọi người hãy đưa ra quyết định của mình!"
};
/**
 * Các stage được gán mặc định cho người chơi
 */
export const DEFAULT_STAGES = [
    Stages.WAITING_STAGE,
    Stages.START_GAME,
    Stages.DISCUSS,
    Stages.VOTE,
    Stages.LAST_WORD,
    Stages.VOTE_YES_NO,
    Stages.END_OF_DAY,
    Stages.END_GAME
];
