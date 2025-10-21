# GodEyes Landing Page

Trang giới thiệu chính thức cho sản phẩm GodEyes. Tài liệu này dùng để định hướng phát triển, hướng dẫn cấu hình môi trường và cung cấp quy trình làm việc chung cho nhóm.

## 🌟 Mục tiêu
- Xây dựng trang landing page hiện đại, truyền đạt rõ giá trị cốt lõi của GodEyes.
- Tối ưu hiệu năng, SEO và khả năng truy cập trên nhiều thiết bị.
- Dễ dàng mở rộng, kiểm thử và triển khai.

## 🧱 Kiến trúc & Công nghệ
Cập nhật phần này khi đã quyết định ngăn xếp công nghệ cuối cùng.
- **Framework/UI**: _Ví dụ: Next.js + Tailwind CSS_
- **Build tool**: _Ví dụ: Vite, Webpack_
- **Quản lý gói**: _Ví dụ: pnpm, npm hoặc yarn_
- **CI/CD**: _Ví dụ: GitHub Actions, Vercel_

## 🚀 Khởi chạy nhanh
1. Cài đặt môi trường Node.js phù hợp (khuyến nghị LTS).
2. Cài đặt các phụ thuộc dự án:
   ```bash
   npm install
   ```
   hoặc
   ```bash
   pnpm install
   ```
3. Khởi chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
4. Mở trình duyệt tại `http://localhost:3000`.

> Điều chỉnh các lệnh trên theo trình quản lý gói và framework thực tế.

## 📁 Cấu trúc thư mục gợi ý
```
landing-page/
├─ public/          # Asset tĩnh (ảnh, favicon, v.v.)
├─ src/
│  ├─ components/   # Thành phần UI tái sử dụng
│  ├─ sections/     # Các block lớn của landing page
│  ├─ styles/       # Style toàn cục hoặc theme
│  └─ utils/        # Hàm tiện ích dùng chung
├─ tests/           # Kiểm thử (nếu có)
├─ package.json
└─ README.md
```

Điều chỉnh lại cây thư mục theo cấu trúc thực tế của dự án.

## 🧪 Kiểm thử & Chất lượng
- Thiết lập lint (`eslint`, `stylelint`) và format (`prettier`) cho mã nguồn.
- Bổ sung kiểm thử đơn vị hoặc e2e nếu phạm vi dự án yêu cầu.
- Sử dụng husky hoặc lint-staged để kiểm tra trước khi commit (tùy nhu cầu).

## 📦 Triển khai
- Chuẩn bị script build: `npm run build` hoặc tương đương.
- Tùy chỉnh cấu hình cho môi trường đích (Vercel, Netlify, AWS, v.v.).
- Thiết lập biến môi trường (nếu có) qua `.env`.

## 🧭 Quy ước làm việc
- Dùng nhánh tính năng theo chuẩn `feature/<ten>`; merge qua Pull Request.
- Ghi rõ mô tả thay đổi và đính kèm ảnh/chữ ký build nếu cần.
- Review chéo tối thiểu 1 thành viên trước khi hợp nhất.

## 📌 Lộ trình cập nhật
- [ ] Bổ sung mô tả tính năng chính.
- [ ] Cập nhật stack thực tế.
- [ ] Thêm hình ảnh hoặc mockup.
- [ ] Hoàn thiện hướng dẫn deploy.

---

Nếu có câu hỏi hoặc đề xuất, vui lòng tạo issue hoặc liên hệ trực tiếp nhóm phát triển GodEyes.
