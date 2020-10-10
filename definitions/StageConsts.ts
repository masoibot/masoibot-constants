import {StageNames} from "../enums";

export * from "./StageTimeout";

/**
 * Các stage được gán mặc định cho người chơi
 */
export const DEFAULT_STAGES = [
    StageNames.WAITING_STAGE,
    StageNames.START_GAME,
    StageNames.DISCUSS,
    StageNames.VOTE,
    StageNames.LAST_WORD,
    StageNames.VOTE_YES_NO,
    StageNames.END_OF_DAY,
    StageNames.END_GAME
];
export const NEXT_STAGE: {[stage in StageNames]: StageNames} = {
    END_GAME: StageNames.WAITING_STAGE,
    WAITING_STAGE: StageNames.START_GAME,
    START_GAME: StageNames.CUPID,
    CUPID: StageNames.WILD_CHILD,
    WILD_CHILD: StageNames.SEER,
    SEER: StageNames.SAVER,
    SAVER: StageNames.WOLF,
    WOLF: StageNames.WOLF_PLUS,
    WOLF_PLUS: StageNames.WITCH_SAVE,
    WITCH_SAVE: StageNames.WITCH_KILL,
    WITCH_KILL: StageNames.HUNTER,
    HUNTER: StageNames.COUPLE,
    COUPLE: StageNames.DISCUSS,
    DISCUSS: StageNames.VOTE,
    VOTE: StageNames.LAST_WORD,
    LAST_WORD: StageNames.VOTE_YES_NO,
    VOTE_YES_NO: StageNames.END_OF_DAY,
    END_OF_DAY: StageNames.SEER // cupid và wildchild chỉ được gọi 1 lần
};
export const STAGE_DESCRIPTION: {[stage in StageNames]: string} = {
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
    DISCUSS: "Trời sáng rồi! Mọi người hãy thức dậy thôi",
    VOTE: "Đã hết thời gian thảo luận!",
    LAST_WORD: "Mời người bị treo cổ lên giàn!",
    VOTE_YES_NO: "Đã hết giờ thanh minh, mọi người hãy đưa ra quyết định của mình!"
};
export const STAGES_SHOW_ACTION_PUSH = [
    StageNames.WOLF,
    StageNames.VOTE,
    StageNames.VOTE_YES_NO,
    StageNames.LAST_WORD,
    StageNames.DISCUSS
];
