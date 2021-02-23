\$ Tài liệu này giải thích cơ bản về file State.ts
#Tổng quan State Ma sói

-   Game sẽ có nhiều phòng chơi (Rooms), mỗi room sẽ có 1 state lưu trữ dữ liệu của game (file State.ts), tài liệu này giải
    thích một cách cơ bản về ý tưởng sử dựng state để quản lý cũng như điều khiển trò chơi.
-   Mỗi mục nhỏ trình bày dưới đây sẽ trình bày về một thuộc tính trong đối tượng State của 1 Room
    và các lưu ý khi sử dụng.

## users \_ MapSchema<User> (Map<userID, User>) (Profile người dùng)

-   Bất cứ người dùng nào khi đăng nhập vào game đều có sẵn 1 profile (lấy từ facebook, google, telegram,...)
-   Khi người dùng thực hiện vào 1 phòng chơi (joinRoom), Client sẽ lấy các thông tin có sẵn để tiến hành đăng nhập
    vào phòng chơi.
-   Nếu đăng nhập vào phòng chơi thành công, profile của người chơi sẽ được
    lưu tại đây nhưng chưa chắc đã trở thành 1 người chơi.

## spectatorIDs \_ Set<user_id:String> (Danh sách các khán giả)

-   Khán giả là những người vào phòng khi trò chơi đã bắt đầu hoặc những người chơi đã chết

## playerIDs \_ Set<user_id:String> (Danh sách người chơi)

-   Thể hiện những người tham gia vào trò chơi (còn sống hoặc đã chết)

## deadMenIDs \_ Set<user_id:String> (Danh sách người chơi đã chết/ sẽ chết)

-   Mục đích: giảm bớt dữ liệu của các nhân vật, tạo sự thống nhất trong game khi chuyển tiếp giữa các giai đoạn.
-   Giải thích vấn đề "sẽ chết": 1 người chơi có mặt trong danh sách này chưa chắc đã chết.
    \*\* VD: Bị sói cắn -> vào danh sách -> nếu được phù thuỷ cứu -> xoá khỏi danh sách.
-   Có 2 giai đoạn quyết định những người chơi trong danh sách này chết: 1) Trước khi quản trò nói : "Trời sáng rồi, cả làng thức dậy" & 2) Trước khi quản trò nói :"Người chơi X đã bị treo cổ theo số đông"

## listStages (Danh sách các giai đoạn trong game)

-   Mỗi stage tương ứng với 1 giai đoạn trong game ( Quản trò gọi sói dậy cắn người, quản trò cho mọi người vote sống chết,..)

## actions và events (Event extends Action)

-   Action là các hành động của các nhân vật (người chơi) trong game. VD: Sói A "cắn" người chơi B, A "vote" treo cổ B.
-   Event bao gồm tất cả các sự kiện diễn ra (hệ quả của 1 hoặc nhiều action) trong trò chơi. VD: Người chơi B bị "cắn" bởi nhiếu sói (hệ quả của 1 hoặc nhiều sói vote cắn người chơi B)
-   actions sẽ bị reset sau mỗi giai đoạn (stage) trong game. Những người chơi tham gia vào stage X sẽ được xem actions của stage X.
-   events sẽ được lưu trữ và cập nhật trong suốt 1 game (lịch sử game).

## messages (Danh sách tin nhắn)

-   Danh sách được lưu và cập nhật từ khi phòng chơi được khởi tạo cho đến khi phòng chơi bị xoá khởi server.

## roleAssignment (Map nhân vật với người chơi)

-   Mỗi người chơi sau khi được chia bài sẽ được map với 1 nhân vật.
-   Chức năng của người chơi có thể thay đổi (dân thường hoá thành sói, copycat trỏ thành hunter,...) tuy nhiên map này sẽ không thay đổi (do phần xử lý code vi diệu :())
