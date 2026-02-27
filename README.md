# Agent Skills Collection

Chào mừng bạn đến với kho lưu trữ các kỹ năng (Skills) dành cho AI Agent. Dự án này tập trung vào việc cung cấp các bộ kỹ năng chuyên sâu, giúp nâng cao khả năng phân tích, thiết kế và xử lý mã nguồn của các Agent.

![Last Updated](https://img.shields.io/github/last-commit/ducconit/agentskills?label=Cập%20nhật%20lần%20cuối&style=flat-square)

## 🚀 Các kỹ năng hiện có

- **[Deep Codebase Analysis](skills/deep-codebase-analysis/SKILL.md)**: Phân tích sâu mã nguồn, hiểu kiến trúc và luồng dữ liệu.
- **[Design Pattern Application](skills/design-pattern-application/SKILL.md)**: Áp dụng các mẫu thiết kế tối ưu cho bài toán phần mềm.
- **[Image Generation](skills/image-gen/SKILL.md)**: Tạo và chỉnh sửa hình ảnh chuyên nghiệp.
- **[Skill Creator](skills/skill-creator/SKILL.md)**: Công cụ hỗ trợ tạo và đóng gói các kỹ năng mới.
- **[Skill Manager](skills/skill-manager/SKILL.md)**: Đồng bộ kỹ năng vào các IDE và Agent (Cursor, Trae, v.v.).
- **[Conventional Commits Compliance](skills/conventional-commits-compliance/SKILL.md)**: Tuân thủ chuẩn Conventional Commits cho lịch sử dự án chuyên nghiệp.
- **[GitHub Actions Automation](skills/github-actions-automation/SKILL.md)**: Thiết kế và triển khai luồng tự động hóa CI/CD mạnh mẽ.
- **[Agent Guide](AGENTS.md)**: Hướng dẫn dành cho AI Agent cách sử dụng và đóng góp vào kho lưu trữ này.

## ⚙️ Hướng dẫn sử dụng CLI

Sử dụng `npx` để quản lý các kỹ năng một cách dễ dàng:

### 1. Cài đặt (init)
```bash
# Cài đặt tất cả kỹ năng (mặc định vào .agent/skills)
npx -y @ducconit/agentskills init

# Cài đặt vào thư mục cụ thể
npx -y @ducconit/agentskills init .trae/skills

# Chỉ cài đặt một số kỹ năng
npx -y @ducconit/agentskills init --skills weather,image-gen

# Ghi đè (-f) hoặc xóa sạch trước khi cài (--clean)
npx -y @ducconit/agentskills init -f
npx -y @ducconit/agentskills init --clean
```

### 2. Cập nhật (update)
```bash
# Kiểm tra các kỹ năng bị cũ (outdated)
npx -y @ducconit/agentskills update --outdate

# Cập nhật tất cả các kỹ năng đã cài đặt lên bản mới nhất
npx -y @ducconit/agentskills update
```

### 3. Danh sách (list)
```bash
# Xem tất cả kỹ năng có sẵn trên cloud
npx -y @ducconit/agentskills list

# Xem các kỹ năng đã cài đặt tại local
npx -y @ducconit/agentskills list --local

# Xem các kỹ năng chưa được cài đặt
npx -y @ducconit/agentskills list --diff
```

### 4. Gỡ bỏ (clear)
```bash
# Xóa tất cả các kỹ năng đã cài đặt trong thư mục
npx -y @ducconit/agentskills clear
```

Dưới đây là những người đã đóng góp công sức để xây dựng dự án này:

<!-- readme: contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/ducconit">
                    <img src="https://avatars.githubusercontent.com/u/72369814?v=4" width="100;" alt="ducconit"/>
                    <br />
                    <sub><b>Duke</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: contributors -end -->

*(Danh sách này được cập nhật tự động bởi GitHub Action)*

## ☕ Ủng hộ dự án (Donate)

Nếu bạn thấy dự án này hữu ích, bạn có thể mời tôi một ly cà phê qua mã QR dưới đây:

<img src="https://github.com/ducconit/ducconit/blob/master/assets/qr/mono.jpg?raw=true" width="150" alt="Donate QR Code" />

## 📅 Cập nhật lần cuối
Dự án được cập nhật lần cuối vào: **2026-02-26 (UTC+7)**
