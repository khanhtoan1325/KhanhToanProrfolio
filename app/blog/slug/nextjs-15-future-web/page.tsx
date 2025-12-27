"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Hiệu ứng Parallax nhẹ cho phần Header khi cuộn
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const post = {
    title: "Next.js 15 và tương lai của phát triển Web",
    description:
      "Khám phá các tính năng mới như React Server Components và cách tối ưu hóa trải nghiệm người dùng trên trình duyệt.",
    category: "Web Development",
    date: "02 Tháng 01, 2026",
    readTime: "9 phút đọc",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2000&auto=format&fit=crop",
  };

  return (
    <div className={styles.container}>
      {/* Thanh tiến trình chạy ở sát mép trên màn hình */}
      <motion.div className={styles.progress} style={{ scaleX }} />

      {/* Floating Back Button */}
      <nav className={styles.nav}>
        <Link href="/blog" className={styles.backBtn}>
          <div className={styles.backIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>Quay lại</span>
        </Link>
      </nav>

      <header className={styles.heroSection}>
        <motion.div
          style={{ y: headerY, opacity }}
          className={styles.heroContent}
        >
          <span className={styles.badge}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <div className={styles.authorGroup}>
              <div className={styles.avatar}>N</div>
              <div>
                <strong>{post.author}</strong>
                <p>
                  {post.date} • {post.readTime}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.imageFrame}>
          <img src={post.image} alt={post.title} className={styles.heroImage} />
          <div className={styles.imageOverlay} />
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          {/* Sidebar - Mục lục */}
          <aside className={styles.sidebar}>
            <div className={styles.stickySidebar}>
              <h4 className={styles.sidebarTitle}>Nội dung bài viết</h4>
              <ul className={styles.tocList}>
                <li>
                  <a href="#rsc">01. Server Components</a>
                </li>
                <li>
                  <a href="#streaming">02. Streaming UI</a>
                </li>
                <li>
                  <a href="#ux">03. Trải nghiệm UX</a>
                </li>
                <li>
                  <a href="#future">04. Tầm nhìn tương lai</a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Article Body */}
          <article className={styles.article}>
            <p className={styles.lead}>
              <span className={styles.dropCap}>N</span>ext.js 15 không chỉ là
              một bản nâng cấp framework. Nó đại diện cho một bước nhảy vọt
              trong kiến trúc Web hiện đại, chuyển dịch từ Client-heavy sang
              Server-first để tối ưu hóa hiệu suất tuyệt đối.
            </p>

            <h2 id="rsc" className={styles.sectionTitle}>
              1. React Server Components (RSC)
            </h2>
            <p>
              Đây là "trái tim" của Next.js 15. Việc render ở Server giúp loại
              bỏ phần lớn dung lượng JavaScript không cần thiết, giúp trang web
              tải nhanh như chớp ngay cả trên thiết bị yếu.
            </p>

            <div className={styles.infoCard}>
              <div className={styles.cardGlow} />
              <h4>💡 Ưu điểm vượt trội</h4>
              <ul>
                <li>Bundle size nhỏ hơn 60% so với bản cũ.</li>
                <li>Dữ liệu được lấy ngay tại Server, giảm độ trễ mạng.</li>
                <li>
                  Bảo mật API keys tuyệt đối vì không bao giờ lộ ra Client.
                </li>
              </ul>
            </div>

            <h2 id="streaming" className={styles.sectionTitle}>
              2. Streaming & Partial Rendering
            </h2>
            <p>
              Thay vì chờ đợi toàn bộ trang tải xong, Next.js 15 cho phép
              "truyền dẫn" UI. Người dùng có thể tương tác với phần Header trong
              khi phần danh sách sản phẩm vẫn đang được xử lý ngầm.
            </p>

            <blockquote className={styles.modernQuote}>
              "Tốc độ không chỉ là một tính năng, nó là điều kiện tiên quyết của
              sự thành công trên nền tảng Web."
            </blockquote>

            <h2 id="ux" className={styles.sectionTitle}>
              3. Caching & Trải nghiệm người dùng
            </h2>
            <p>
              Cơ chế caching mới thông minh hơn, tự động nhận biết khi nào cần
              cập nhật dữ liệu mà không làm phiền đến trải nghiệm cuộn của người
              dùng.
            </p>

            <div className={styles.conclusionBox}>
              <h3>Lời kết</h3>
              <p>
                Next.js 15 đã thiết lập một tiêu chuẩn mới. Nếu bạn đang xây
                dựng một sản phẩm bền vững, đây là thời điểm vàng để nâng cấp.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
