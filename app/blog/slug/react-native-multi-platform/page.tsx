"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Phát triển ứng dụng Mobile đa nền tảng với React Native",
    category: "Mobile App",
    date: "12 Tháng 12, 2025",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  };

  return (
    <div className={styles.container}>
      {/* Progress */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      {/* Decorative lights */}
      <div className={styles.lightOrb} />
      <div className={styles.lightOrb2} />

      {/* HERO */}
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.breadcrumb}
          >
            <Link href="/blog">Tạp chí</Link> <span>/</span>
            <p>{post.category}</p>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            {post.title}
          </motion.h1>

          <div className={styles.authorMeta}>
            <div className={styles.avatar}>RN</div>
            <div>
              <strong>Ban biên tập Mobile</strong>
              <p>
                {post.date} • {post.readTime}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <motion.div style={{ y }} className={styles.parallaxImage}>
            <img src={post.image} alt={post.title} />
          </motion.div>
          <div className={styles.imageOverlay} />
        </div>
      </header>

      {/* CONTENT */}
      <main className={styles.contentLayout}>
        <article className={styles.mainArticle}>
          {/* LEAD */}
          <section className={styles.leadCard}>
            <p>
              “React Native giúp các Startup rút ngắn thời gian ra mắt sản phẩm
              bằng cách sử dụng chung một codebase cho cả iOS và Android.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* PHẦN 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> React Native là gì?
            </h2>
            <p>
              React Native là framework do Meta phát triển, cho phép xây dựng
              ứng dụng Mobile bằng JavaScript/TypeScript và React, nhưng vẫn
              render ra UI native thực sự.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Code một lần:</strong> Chạy trên iOS & Android.
                </li>
                <li>
                  <strong>UI Native:</strong> Không phải WebView.
                </li>
                <li>
                  <strong>Hot Reload:</strong> Tăng tốc phát triển.
                </li>
              </ul>
            </div>

            {/* PHẦN 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Vì sao Startup chọn
              React Native?
            </h2>
            <p>
              Đối với Startup và MVP, tốc độ và chi phí là yếu tố sống còn.
              React Native cho phép đội ngũ nhỏ xây dựng sản phẩm đa nền tảng mà
              không cần 2 team native riêng biệt.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>JavaScript</span>
                <p>Ngôn ngữ phổ biến, dễ tuyển</p>
              </div>
              <div className={styles.toolItem}>
                <span>Expo</span>
                <p>Giảm cấu hình native phức tạp</p>
              </div>
              <div className={styles.toolItem}>
                <span>Community</span>
                <p>Hệ sinh thái thư viện lớn</p>
              </div>
            </div>

            {/* PHẦN 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Kiến trúc ứng dụng React
              Native
            </h2>
            <p>
              Khi ứng dụng lớn dần, việc tổ chức kiến trúc hợp lý giúp code dễ
              bảo trì và mở rộng.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer 1</span>
                <h4>UI & Components</h4>
                <p>Reusable components, design system.</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer 2</span>
                <h4>State Management</h4>
                <p>Redux Toolkit, Zustand, React Query.</p>
              </div>
            </div>

            {/* PHẦN 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Tương lai của React
              Native
            </h2>
            <p>
              Với New Architecture (Fabric & Turbo Modules), React Native ngày
              càng tiệm cận hiệu năng native và phù hợp cho các dự án lớn.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Fabric</h5>
                <p>Render UI nhanh hơn, mượt hơn.</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Turbo Modules</h5>
                <p>Giao tiếp JS ↔ Native hiệu quả.</p>
              </div>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Một codebase tốt không chỉ giúp chạy đa nền tảng, mà còn giúp
                đội ngũ phát triển đi xa hơn.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
