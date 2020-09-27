export enum Roles {
    WOLF_PLUS,
    CURSED,
    WEREWOLF,
    SEER,
    SAVER,
    HUNTER,
    VILLAGER,
    WITCH,
    OLD_MAN,
    CUPID,
    LYCAN,
    ANGEL,
    WILD_CHILD
}

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
    [Roles.ANGEL]: "THIÊN SỨ"
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
        "Nếu bạn chết trong đêm hoặc ngày đầu tiên, bạn sẽ giành chiến thắng một mình. Nếu không, bạn là một người dân bình thường"

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
    [Roles.ANGEL]: 1
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
    [Roles.ANGEL]: 0
}
