# Agent Skills Collection

Chào mừng bạn đến với kho lưu trữ các kỹ năng (Skills) dành cho AI Agent. Dự án này tập trung vào việc cung cấp các bộ kỹ năng chuyên sâu, giúp nâng cao khả năng phân tích, thiết kế và xử lý mã nguồn của các Agent.

![Last Updated](https://img.shields.io/github/last-commit/ducconit/agentskills?label=Cập%20nhật%20lần%20cuối&style=flat-square)

## 🚀 Các kỹ năng hiện có

- **[Deep Codebase Analysis](deep-codebase-analysis/SKILL.md)**: Phân tích sâu mã nguồn, hiểu kiến trúc và luồng dữ liệu.
- **[Design Pattern Application](design-pattern-application/SKILL.md)**: Áp dụng các mẫu thiết kế tối ưu cho bài toán phần mềm.
- **[Image Generation](image-gen/SKILL.md)**: Tạo và chỉnh sửa hình ảnh chuyên nghiệp.
- **[Skill Creator](skill-creator/SKILL.md)**: Công cụ hỗ trợ tạo và đóng gói các kỹ năng mới.
- **[Skill Manager](skill-manager/SKILL.md)**: Đồng bộ kỹ năng vào các IDE và Agent (Cursor, Trae, v.v.).
- **[Conventional Commits Compliance](conventional-commits-compliance/SKILL.md)**: Tuân thủ chuẩn Conventional Commits cho lịch sử dự án chuyên nghiệp.
- **[GitHub Actions Automation](github-actions-automation/SKILL.md)**: Thiết kế và triển khai luồng tự động hóa CI/CD mạnh mẽ.
- **[Agent Guide](AGENTS.md)**: Hướng dẫn dành cho AI Agent cách sử dụng và đóng góp vào kho lưu trữ này.

## ⚙️ Cài đặt nhanh (Quick Install)

Bạn có thể chạy trực tiếp script cài đặt qua URL hoặc tải về máy:

### 1. Chạy trực tiếp qua Bash (Online)
```bash
# Cài đặt kỹ năng (mặc định không tải script agentskills.sh)
curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh | bash -s -- .trae/skills

# Cài đặt kèm script để sử dụng Offline sau này
curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh | bash -s -- .trae/skills --include-script
```
*(Thay `.trae/skills` bằng thư mục mục tiêu của bạn)*

### 2. Sử dụng Offline (Nếu đã tải script)
Nếu bạn đã tải script hoặc clone repo, hãy sử dụng:
```bash
# Cho Trae
./agentskills.sh .trae/skills

# Cho Cursor
./agentskills.sh .cursor/skills

# Cho Windsurf
./agentskills.sh .windsurf/skills

# Liệt kê danh sách kỹ năng trên GitHub
./agentskills.sh --list

# Cài đặt có chọn lọc (Selective Install)
./agentskills.sh .cursor/skills --skills image-gen,deep-codebase-analysis
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
