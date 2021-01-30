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
export const BadRoleStages = [StageNames.WOLF, StageNames.WOLF_PLUS];
export const NEXT_STAGE: {[stage in StageNames]: StageNames} = {
    [StageNames.END_GAME]: StageNames.WAITING_STAGE,
    [StageNames.WAITING_STAGE]: StageNames.START_GAME,
    [StageNames.START_GAME]: StageNames.CUPID,
    [StageNames.CUPID]: StageNames.WILD_CHILD,
    [StageNames.WILD_CHILD]: StageNames.SEER,
    [StageNames.SEER]: StageNames.SAVIOR,
    [StageNames.SAVIOR]: StageNames.WOLF,
    [StageNames.WOLF]: StageNames.WOLF_PLUS,
    [StageNames.WOLF_PLUS]: StageNames.WITCH_SAVE,
    [StageNames.WITCH_SAVE]: StageNames.WITCH_KILL,
    [StageNames.WITCH_KILL]: StageNames.HUNTER,
    [StageNames.HUNTER]: StageNames.COUPLE,
    [StageNames.COUPLE]: StageNames.DISCUSS,
    [StageNames.DISCUSS]: StageNames.VOTE,
    [StageNames.VOTE]: StageNames.LAST_WORD,
    [StageNames.LAST_WORD]: StageNames.VOTE_YES_NO,
    [StageNames.VOTE_YES_NO]: StageNames.END_OF_DAY,
    [StageNames.END_OF_DAY]: StageNames.SEER // cupid và wildchild chỉ được gọi 1 lần
};
export const STAGE_DESCRIPTION: {[stage in StageNames]: string} = {
    [StageNames.END_GAME]: "Trò chơi kết thúc",
    [StageNames.END_OF_DAY]: "Trời tối rồi, cả làng đi ngủ",
    [StageNames.WAITING_STAGE]: "Đang chờ người chơi khác tham gia",
    [StageNames.START_GAME]: "Mọi người hãy sẵn sàng để bắt đầu chơi",
    [StageNames.CUPID]: "Cupid ơi dậy đi! Đêm nay cupid hãy chọn 2 người để ghép thành một đôi!",
    [StageNames.WILD_CHILD]: "Con hoang ơi dậy đi! Đêm nay con hoang hãy chọn một người làm mẹ!",
    [StageNames.SAVIOR]: "Bảo vệ ơi dậy đi! Đêm nay bảo vệ muốn bảo vệ ai?",
    [StageNames.SEER]: "Tiên tri ơi dậy đi!Đêm nay tiên tri muốn soi ai?",
    [StageNames.HUNTER]: "Thợ săn ơi dậy đi! Đêm nay thợ săn muốn ghim ai?",
    [StageNames.WOLF]: "Sói ơi dậy đi! Đêm nay sói muốn cắn ai?",
    [StageNames.WOLF_PLUS]: "Sói nguyền ơi dậy đi! Đêm nay người này chết, Sói nguyền có muốn nguyền không?",
    [StageNames.WITCH_SAVE]: "Phù thủy ơi dậy đi! Đêm nay người này chết, Phù thuỷ có muốn cứu không?",
    [StageNames.WITCH_KILL]: "Phù thủy ơi dậy đi! Phù thuỷ có muốn giết ai không?",
    [StageNames.COUPLE]: "Cặp đôi ơi dậy đi! 2 bạn có 1 phút để trò chuyện với nhau.",
    [StageNames.DISCUSS]: "Trời sáng rồi! Mọi người hãy thức dậy thôi",
    [StageNames.VOTE]: "Đã hết thời gian thảo luận!",
    [StageNames.LAST_WORD]: "Mời người bị treo cổ lên giàn!",
    [StageNames.VOTE_YES_NO]: "Đã hết giờ thanh minh, mọi người hãy đưa ra quyết định của mình!"
};
export const STAGES_SHOW_ACTION_PUSH = [
    StageNames.WOLF,
    StageNames.VOTE,
    StageNames.VOTE_YES_NO,
    StageNames.LAST_WORD,
    StageNames.DISCUSS,
    StageNames.WAITING_STAGE,
    StageNames.START_GAME,
    StageNames.END_GAME
];
