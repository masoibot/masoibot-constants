/**
 * Lưu ý : giữ nguyên thứ tự enum để tránh ảnh hưởng tới việc hiển thị
 */
export enum Roles {
    //Phe dân
    VILLAGER,
    LYCAN,
    ANGEL,
    CUPID,
    SEER,
    SAVER,
    HUNTER,
    WITCH,
    OLD_MAN,
    APPRENTICE_SEER,
    AURA_SEER,
    DISEASED,
    GHOST,
    MASON,
    MAYOR,
    PACIFIST,
    PI,
    PRIEST,
    PRINCE,
    SPELL_CASTER,
    TOUGH_GUY,
    TROUBLE_MAKER,
    IDIOT,
    VIRGINIA_WOOLF,
    // Đổi phe
    WILD_CHILD,
    CURSED,
    CULT_LEADER,
    DOPPEL_GANGER,
    DRUNK,
    HOODLUM,
    ILLUMINATI,
    TANNER,
    VAMPIRE,
    //Phe sói
    WEREWOLF,
    WOLF_PLUS,
    FANG_FACE,
    DIRE_WOLF,
    FRUIT_WOLF,
    LONE_WOLF,
    MINION,
    SORCERESS,
    WOLVERINE,
    WOLF_CUB,
    ALPHA_WOLF,

}

export enum PARTY {
    VILLAGER,
    BETRAYER,// Những kẻ phản bội
    WEREWOLF
}

// map các role với phe tương ứng
export const ROLE_PARTY: { [party in PARTY]: Roles[] } = {
    [PARTY.VILLAGER]: [Roles.VILLAGER, Roles.OLD_MAN, Roles.WITCH, Roles.SEER, Roles.SAVER,
        Roles.HUNTER, Roles.CUPID, Roles.LYCAN, Roles.APPRENTICE_SEER, Roles.AURA_SEER, Roles.DISEASED, Roles.GHOST,
        Roles.IDIOT, Roles.MASON, Roles.MAYOR, Roles.PACIFIST, Roles.VIRGINIA_WOOLF, Roles.PI, Roles.PRIEST,
        Roles.PRINCE, Roles.SPELL_CASTER, Roles.TOUGH_GUY, Roles.TROUBLE_MAKER],
    [PARTY.BETRAYER]: [Roles.WILD_CHILD, Roles.CURSED, Roles.DOPPEL_GANGER, Roles.DRUNK,
        Roles.CULT_LEADER, Roles.HOODLUM, Roles.TANNER, Roles.VAMPIRE, Roles.ILLUMINATI],
    [PARTY.WEREWOLF]: [Roles.WEREWOLF, Roles.WOLF_PLUS, Roles.SORCERESS, Roles.LONE_WOLF,
        Roles.WOLF_CUB, Roles.MINION, Roles.DIRE_WOLF, Roles.ALPHA_WOLF, Roles.FRUIT_WOLF, Roles.FANG_FACE, Roles.WOLVERINE]
};

export const ROLE_NAMES: { [role in Roles]: string } = {
    // PHE SÓI
    [Roles.WEREWOLF]: "SÓI",
    [Roles.CURSED]: "BÁN SÓI",
    [Roles.WOLF_PLUS]: "SÓI NGUYỀN",
    [Roles.WILD_CHILD]: "CON HOANG",
    // PHE DÂN
    [Roles.SEER]: "TIÊN TRI",
    [Roles.SAVER]: "BẢO VỆ",
    [Roles.HUNTER]: "THỢ SĂN",
    [Roles.VILLAGER]: "DÂN",
    [Roles.WITCH]: "PHÙ THỦY",
    [Roles.OLD_MAN]: "GIÀ LÀNG",
    [Roles.CUPID]: "THẦN TÌNH YÊU",
    [Roles.LYCAN]: "NGƯỜI HÓA SÓI",
    [Roles.ANGEL]: "THIÊN SỨ",
    [Roles.ALPHA_WOLF]: "",
    [Roles.APPRENTICE_SEER]: "",
    [Roles.AURA_SEER]: "",
    [Roles.CULT_LEADER]: "",
    [Roles.DIRE_WOLF]: "",
    [Roles.DISEASED]: "",
    [Roles.DOPPEL_GANGER]: "",
    [Roles.DRUNK]: "",
    [Roles.FANG_FACE]: "",
    [Roles.FRUIT_WOLF]: "",
    [Roles.GHOST]: "",
    [Roles.HOODLUM]: "",
    [Roles.ILLUMINATI]: "",
    [Roles.LONE_WOLF]: "",
    [Roles.MASON]: "",
    [Roles.MAYOR]: "",
    [Roles.MINION]: "",
    [Roles.PACIFIST]: "",
    [Roles.PI]: "",
    [Roles.PRIEST]: "",
    [Roles.PRINCE]: "",
    [Roles.SORCERESS]: "",
    [Roles.SPELL_CASTER]: "",
    [Roles.TANNER]: "",
    [Roles.TOUGH_GUY]: "",
    [Roles.TROUBLE_MAKER]: "",
    [Roles.VAMPIRE]: "",
    [Roles.IDIOT]: "",
    [Roles.VIRGINIA_WOOLF]: "",
    [Roles.WOLF_CUB]: "",
    [Roles.WOLVERINE]: ""
};
export const ROLE_DESCIPTIONS: { [role in Roles]: string } = {
    // PHE SÓI
    [Roles.WEREWOLF]:
        "Vào ban đêm, Ma sói sẽ tỉnh dậy cùng nhau và thống nhất giết 1 nạn nhận nào đó. Sói có thể không giết người nào và không được giết sói khác",
    [Roles.CURSED]:
        "Kẻ bị Nguyền rủa ban đầu là người, Tiên tri soi cũng ra người. Nếu Kẻ bị Nguyền rủa bị Sói cắn thì sẽ không chết, mà từ đêm tiếp theo sẽ biến thành Sói, đồng thời nếu Tiên tri sói thì cũng sẽ là Sói. Kẻ bị Nguyền rủa mỗi đêm được gọi dậy riêng biệt, kể cả sau khi hóa Sói, để cho người này biết đã bị hóa Sói hay chưa.",
    [Roles.WOLF_PLUS]:
        "Sói nguyền: khi có 1 sói trong đàn chết. Đêm tiếp theo sói nguyền có thể (hoặc không) kích hoạt chức năng: nguyền 1 mục tiêu của đàn sói cắn đêm đó. Người bị nguyền trở thành sói thường. Mục tiêu bị nguyền không báo với phù thủy đêm đó. Kích hoạt 1 lần duy trong toàn game.",
    [Roles.WILD_CHILD]:
    "Cậu bé hoang là một Dân làng, Đêm đầu tiên, khi nghe quản trò gọi, Cậu bé sẽ tỉnh dậy và chọn một người chơi làm thủ lĩnh. Nếu trong ván, thủ lĩnh chết, thì Cậu bé sẽ trở thành Sói và được gọi dậy vào đêm tiếp theo để đi săn cùng bầy đàn.\n" +
    "Nhưng, Cậu bé vẫn là Dân khi nào thủ lĩnh còn sống, không quan trọng nhân vật của thủ lĩnh là Sói hay không.\n" +
    "Nếu thủ lĩnh còn sống khi tất cả Sói bị tiêu diệt, thì Cậu bé thắng cùng Dân làng. Cậu bé vẫn thắng nếu thủ lĩnh đã bị giết và Sói chiến thắng.",
    // PHE DÂN
    [Roles.SEER]:
        "Mỗi đêm, Tiên tri chỉ tay vào một người. Quản trò sẽ cho Tiên tri biết người đó có thuộc phe sói hay không.",
    [Roles.SAVER]: "Mỗi đêm, Bảo vệ chọn một người khác nhau để bảo vệ. Người chơi này sẽ bất tử vào đêm đó.",
    [Roles.HUNTER]:
        "Nếu thợ săn chết, hắn lập tức được phép nhắm vào một người và người này sẽ bị chết. Nếu thợ săn chết trong đêm, Quản trò sẽ đụng vai Thợ săn để báo Thợ săn nhắm bắn.",
    [Roles.VILLAGER]: "Không có tính năng đặc biệt nào cả, ngủ suốt đêm và tham gia biểu quyết tìm Sói vào ban ngày.",
    [Roles.WITCH]:
        "Phù thủy sẽ có hai bình thuốc. Một bình thuốc để cứu 1 người và một bình thuốc để giết 1 người. Trong đêm, Quản trò sẽ cho Phù Thủy biết ai sẽ bị giết trong đêm và hỏi xem Phù thủy có muốn sử dụng quyền năng nào hay không. Có thể dùng cả hai bình thuốc này vào cùng 1 đêm, nhưng mỗi bình chỉ dùng một lần.",
    [Roles.OLD_MAN]:
        "Già Làng có hai mạng khi bị Ma sói cắn. Tuy nhiên, nếu bị treo cổ, bị Thợ Săn bắn hoặc bị Phù Thủy giết thì Già Làng vẫn chết ngay lập tức. Khi Già Làng chết, tất cả các vai trò đặc biệt trừ Thợ Săn đều bị mất chức năng.",
    [Roles.CUPID]:
        "Thức dậy vào đêm đầu tiên và chọn ra 2 người chơi ( được phép chọn cả mình). Hai người được chọn sẽ trở thành 2 người yêu nhau. Nếu một trong hai người này chết, người còn lại cũng sẽ chết theo.",
    [Roles.LYCAN]:
        "Người hóa sói thuộc Phe dân làng, nhưng nếu được chỉ định bởi Tiên tri, thì sẽ bị thông báo là Sói.",
    [Roles.ANGEL]:
        "Nếu bạn chết trong đêm hoặc ngày đầu tiên, bạn sẽ giành chiến thắng một mình. Nếu không, bạn là một người dân bình thường",
    [Roles.ALPHA_WOLF]: "",
    [Roles.APPRENTICE_SEER]: "",
    [Roles.AURA_SEER]: "",
    [Roles.CULT_LEADER]: "",
    [Roles.DIRE_WOLF]: "",
    [Roles.DISEASED]: "",
    [Roles.DOPPEL_GANGER]: "",
    [Roles.DRUNK]: "",
    [Roles.FANG_FACE]: "",
    [Roles.FRUIT_WOLF]: "",
    [Roles.GHOST]: "",
    [Roles.HOODLUM]: "",
    [Roles.ILLUMINATI]: "",
    [Roles.LONE_WOLF]: "",
    [Roles.MASON]: "",
    [Roles.MAYOR]: "",
    [Roles.MINION]: "",
    [Roles.PACIFIST]: "",
    [Roles.PI]: "",
    [Roles.PRIEST]: "",
    [Roles.PRINCE]: "",
    [Roles.SORCERESS]: "",
    [Roles.SPELL_CASTER]: "",
    [Roles.TANNER]: "",
    [Roles.TOUGH_GUY]: "",
    [Roles.TROUBLE_MAKER]: "",
    [Roles.VAMPIRE]: "",
    [Roles.IDIOT]: "",
    [Roles.VIRGINIA_WOOLF]: "",
    [Roles.WOLF_CUB]: "",
    [Roles.WOLVERINE]: ""

};
export const ROLE_IMAGES: { [role: number]: string } = {
    // PHE SÓI
    [Roles.WEREWOLF]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278418034541",
    [Roles.CURSED]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278411367875",
    [Roles.WOLF_PLUS]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1897745170521199",
    // PHE DÂN
    [Roles.SEER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278528034530",
    [Roles.SAVER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278331367883",
    [Roles.HUNTER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278518034531",
    [Roles.VILLAGER]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278298034553",
    [Roles.WITCH]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278464701203‍",
    [Roles.OLD_MAN]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278381367878",
    [Roles.CUPID]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1889278324701217",
    [Roles.LYCAN]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1891874781108238",
    [Roles.ANGEL]: "https://www.facebook.com/masoibot/photos/pcb.1889279921367724/1903763679919348‍"
};
export const ROLE_MAX: { [role in Roles]: number } = {
    // PHE SÓI
    [Roles.WEREWOLF]: 10,
    [Roles.CURSED]: 1,
    [Roles.WOLF_PLUS]: 1,
    [Roles.WILD_CHILD]: 1,
    // PHE DÂN
    [Roles.SEER]: 1,
    [Roles.SAVER]: 1,
    [Roles.HUNTER]: 1,
    [Roles.VILLAGER]: 10,
    [Roles.WITCH]: 1,
    [Roles.OLD_MAN]: 1,
    [Roles.CUPID]: 1,
    [Roles.LYCAN]: 10,
    [Roles.ANGEL]: 1,
    // ROLE CHUA HOAT DONG
    [Roles.ALPHA_WOLF]: 1,
    [Roles.APPRENTICE_SEER]: 1,
    [Roles.AURA_SEER]: 1,
    [Roles.CULT_LEADER]: 1,
    [Roles.DIRE_WOLF]: 1,
    [Roles.DISEASED]: 1,
    [Roles.DOPPEL_GANGER]: 1,
    [Roles.DRUNK]: 1,
    [Roles.FANG_FACE]: 1,
    [Roles.FRUIT_WOLF]: 1,
    [Roles.GHOST]: 1,
    [Roles.HOODLUM]: 1,
    [Roles.ILLUMINATI]: 1,
    [Roles.LONE_WOLF]: 1,
    [Roles.MASON]: 1,
    [Roles.MAYOR]: 1,
    [Roles.MINION]: 1,
    [Roles.PACIFIST]: 1,
    [Roles.PI]: 1,
    [Roles.PRIEST]: 1,
    [Roles.PRINCE]: 1,
    [Roles.SORCERESS]: 1,
    [Roles.SPELL_CASTER]: 1,
    [Roles.TANNER]: 1,
    [Roles.TOUGH_GUY]: 1,
    [Roles.TROUBLE_MAKER]: 1,
    [Roles.VAMPIRE]: 1,
    [Roles.IDIOT]: 1,
    [Roles.VIRGINIA_WOOLF]: 1,
    [Roles.WOLF_CUB]: 1,
    [Roles.WOLVERINE]: 1,
};

export const AVAILABLE_ROLES = Object.keys(Roles).slice(0, Object.keys(Roles).length / 2).map(str => parseInt(str) as Roles)

export const ROLE_POINT: { [role in Roles]: number } = {
    [Roles.WILD_CHILD]: -2,
    // PHE SÓI
    [Roles.WEREWOLF]: -6,
    [Roles.CURSED]: -3,
    [Roles.WOLF_PLUS]: -9,
    // PHE DÂN
    [Roles.SEER]: +7,
    [Roles.SAVER]: +3,
    [Roles.HUNTER]: +3,
    [Roles.VILLAGER]: +1,
    [Roles.WITCH]: +4,
    [Roles.OLD_MAN]: +2,
    [Roles.CUPID]: -3,
    [Roles.LYCAN]: -1,
    [Roles.ANGEL]: 0,
    [Roles.ALPHA_WOLF]: -9,
    [Roles.APPRENTICE_SEER]: +4,
    [Roles.AURA_SEER]: +3,
    [Roles.CULT_LEADER]: 1,
    [Roles.DIRE_WOLF]: -4,
    [Roles.DISEASED]: 3,
    [Roles.DOPPEL_GANGER]: -2,
    [Roles.DRUNK]: 4,
    [Roles.FANG_FACE]: -5,
    [Roles.FRUIT_WOLF]: -3,
    [Roles.GHOST]: 2,
    [Roles.HOODLUM]: 0,
    [Roles.ILLUMINATI]: -3,
    [Roles.LONE_WOLF]: -5,
    [Roles.MASON]: 2,
    [Roles.MAYOR]: 2,
    [Roles.MINION]: -6,
    [Roles.PACIFIST]: -1,
    [Roles.PI]: 3,
    [Roles.PRIEST]: 3,
    [Roles.PRINCE]: 3,
    [Roles.SORCERESS]: -3,
    [Roles.SPELL_CASTER]: 1,
    [Roles.TANNER]: -2,
    [Roles.TOUGH_GUY]: 3,
    [Roles.TROUBLE_MAKER]: -3,
    [Roles.VAMPIRE]: -7,
    [Roles.IDIOT]: 2,
    [Roles.VIRGINIA_WOOLF]: -2,
    [Roles.WOLF_CUB]: -8,
    [Roles.WOLVERINE]: -4,
}