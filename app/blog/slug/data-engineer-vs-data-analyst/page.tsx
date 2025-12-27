"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "../../../CSS/BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Data Engineer là gì? Khác gì với Data Analyst?",
    description:
      "So sánh vai trò, kỹ năng và công việc giữa Data Engineer và Data Analyst trong hệ sinh thái dữ liệu.",
    category: "Data",
    date: "22 Tháng 12, 2025",
    readTime: "7 phút đọc",
    image: "https://base.vn/wp-content/uploads/2025/03/Data-la-gi.webp",
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

          <p className={styles.subtitle}>{post.description}</p>

          <div className={styles.authorMeta}>
            <div className={styles.avatar}>DE/DA</div>
            <div>
              <strong>Ban biên tập Data</strong>
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
              “Nếu dữ liệu là dầu mỏ, thì Data Engineer xây đường ống còn Data
              Analyst là người tinh chế và đọc giá trị từ dầu đó.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Data Engineer là gì?
            </h2>
            <p>
              Data Engineer là người thiết kế, xây dựng và vận hành các hệ thống
              thu thập, lưu trữ và xử lý dữ liệu. Họ đảm bảo dữ liệu luôn sẵn
              sàng, đáng tin cậy và có thể mở rộng cho toàn bộ tổ chức.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Xây dựng Data Pipeline (ETL/ELT)</li>
                <li>Quản lý Data Warehouse / Data Lake</li>
                <li>Đảm bảo hiệu năng & độ tin cậy dữ liệu</li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Data Analyst là gì?
            </h2>
            <p>
              Data Analyst là người sử dụng dữ liệu để phân tích, trực quan hóa
              và đưa ra insight phục vụ kinh doanh. Họ làm việc trực tiếp với
              stakeholder để trả lời các câu hỏi nghiệp vụ.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Phân tích</span>
                <p>Khám phá & hiểu dữ liệu</p>
              </div>
              <div className={styles.toolItem}>
                <span>Visualization</span>
                <p>Dashboard, báo cáo</p>
              </div>
              <div className={styles.toolItem}>
                <span>Business</span>
                <p>Truyền đạt insight</p>
              </div>
            </div>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> So sánh công việc hằng
              ngày
            </h2>
            <p>
              Hai vai trò này làm việc chặt chẽ với nhau nhưng tập trung vào các
              khía cạnh khác nhau của dữ liệu.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Data Engineer</span>
                <h4>Build & Maintain</h4>
                <p>Pipeline, hệ thống dữ liệu</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Data Analyst</span>
                <h4>Analyze & Report</h4>
                <p>Insight, dashboard, KPI</p>
              </div>
            </div>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Kỹ năng cần có
            </h2>
            <p>
              Mỗi vai trò yêu cầu một bộ kỹ năng khác nhau, dù vẫn có phần giao
              thoa.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Data Engineer</h5>
                <p>SQL, Python, Cloud, Spark, Airflow</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Data Analyst</h5>
                <p>SQL, Excel, BI Tools, Statistics</p>
              </div>
            </div>

            {/* 05 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Lộ trình nghề nghiệp
            </h2>
            <p>
              Cả hai vai trò đều có cơ hội phát triển rộng mở, tùy thuộc vào
              định hướng kỹ thuật hay kinh doanh của mỗi người.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Data Analyst → Senior Analyst → Analytics Manager</li>
                <li>Data Engineer → Senior DE → Data Architect</li>
                <li>Có thể chuyển hướng sang Data Scientist</li>
              </ul>
            </div>

            {/* 06 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> Nên chọn hướng nào?
            </h2>
            <p>
              Nếu bạn thích hạ tầng, hệ thống và kỹ thuật sâu – hãy chọn Data
              Engineer. Nếu bạn thích phân tích, trực quan và làm việc với kinh
              doanh – Data Analyst là lựa chọn phù hợp.
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Không có vai trò dữ liệu nào tốt hơn – chỉ có vai trò phù hợp
                hơn với bạn.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
