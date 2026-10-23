# CineScope – Movie Discovery App

Website tĩnh sử dụng HTML, CSS Grid, CSS Variables và JavaScript thuần.

## Cách chạy
Mở `index.html` bằng trình duyệt hoặc dùng VS Code Live Server. Không cần XAMPP.

## Tính năng
- Giao diện responsive desktop/tablet/mobile.
- Card phim sinh tự động từ mảng `movies` trong `js/app.js`.
- Checkbox thể loại tự sinh bằng `Set` và `flatMap`.
- Lọc nhiều thể loại (logic OR), kết hợp với tìm kiếm tên (logic AND).
- Tìm kiếm dùng debounce 400ms.
- Modal chi tiết phim, đóng bằng nút X, nhấn ra ngoài hoặc Escape.
- Chế độ tối lưu trong `localStorage`.

## Hình ảnh
Poster SVG tự tạo chỉ là ảnh minh họa, không phải poster chính thức. Có thể thay bằng poster được cấp phép và sửa thuộc tính `poster` trong mảng.

## Link bài tập 37, 38, 39
Thay các thẻ `<span>Bài 37</span>` ... trong footer `index.html` bằng `<a href="URL_THAT">Bài 37</a>` tương ứng.

## Deploy GitHub Pages
1. Tạo repository công khai, upload toàn bộ nội dung thư mục này vào root của repo (giữ nguyên css/, js/, images/).
2. Vào Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save.
3. Sau khi triển khai, lấy URL thực tế hiển thị trong mục Pages.

Lưu ý: Không thể tạo URL triển khai thực tế khi chưa có quyền truy cập tài khoản GitHub/Netlify/Vercel của người nộp.
