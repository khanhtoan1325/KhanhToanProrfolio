"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Data Warehouse vs Data Lake trong hệ thống thông tin",
    description:
      "So sánh Data Warehouse và Data Lake, khi nào nên dùng và cách kết hợp trong kiến trúc dữ liệu hiện đại.",
    category: "Data Engineering",
    date: "26 Tháng 12, 2025",
    readTime: "7 phút đọc",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
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
            <div className={styles.avatar}>DW</div>
            <div>
              <strong>Ban biên tập Data Engineering</strong>
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
              “Không phải chọn Data Warehouse hay Data Lake, mà là chọn đúng vai
              trò của mỗi loại trong kiến trúc dữ liệu doanh nghiệp.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Tổng quan kiến trúc lưu
              trữ dữ liệu
            </h2>
            <p>
              Trong hệ thống thông tin hiện đại, dữ liệu đến từ nhiều nguồn với
              định dạng và tốc độ khác nhau. Việc lựa chọn Data Warehouse hay
              Data Lake ảnh hưởng trực tiếp đến khả năng phân tích, mở rộng và
              chi phí vận hành.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Dữ liệu giao dịch (OLTP)</li>
                <li>Dữ liệu bán cấu trúc (JSON, log)</li>
                <li>Dữ liệu phi cấu trúc (image, audio)</li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Data Warehouse là gì?
            </h2>
            <p>
              Data Warehouse (DW) là hệ thống lưu trữ dữ liệu có cấu trúc, được
              thiết kế cho phân tích và báo cáo. Dữ liệu trong DW thường được
              làm sạch, chuẩn hóa và tổ chức theo mô hình sao (Star Schema) hoặc
              tuyết (Snowflake Schema).
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Schema-on-Write</span>
                <p>Dữ liệu được chuẩn hóa trước khi lưu</p>
              </div>
              <div className={styles.toolItem}>
                <span>SQL Analytics</span>
                <p>Truy vấn nhanh, ổn định</p>
              </div>
              <div className={styles.toolItem}>
                <span>BI Ready</span>
                <p>Phù hợp báo cáo quản trị</p>
              </div>
            </div>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Data Lake là gì?
            </h2>
            <p>
              Data Lake là kho lưu trữ dữ liệu thô với mọi định dạng. Dữ liệu
              được lưu trữ trước, sau đó mới xử lý khi cần (schema-on-read),
              giúp linh hoạt cho Data Science và Machine Learning.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Raw Zone</span>
                <h4>Dữ liệu gốc</h4>
                <p>Chưa xử lý, giữ nguyên trạng</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Processed</span>
                <h4>Dữ liệu đã xử lý</h4>
                <p>Làm sạch, enrich</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Analytics</span>
                <h4>Dữ liệu phân tích</h4>
                <p>ML, AI, Advanced Analytics</p>
              </div>
            </div>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> So sánh Data Warehouse &
              Data Lake
            </h2>
            <p>
              Hai hệ thống này không thay thế nhau mà bổ trợ cho nhau trong kiến
              trúc dữ liệu hiện đại.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Data Warehouse</h5>
                <p>Chuẩn hóa – ổn định – BI</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Data Lake</h5>
                <p>Linh hoạt – Big Data – AI/ML</p>
              </div>
            </div>

            {/* 05 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Khi nào dùng và cách kết
              hợp?
            </h2>
            <p>
              Doanh nghiệp hiện đại thường sử dụng kiến trúc kết hợp: Data Lake
              để lưu trữ dữ liệu thô, Data Warehouse để phục vụ báo cáo và phân
              tích nghiệp vụ.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Data Lake làm tầng lưu trữ trung tâm</li>
                <li>ELT đẩy dữ liệu đã xử lý vào DW</li>
                <li>BI & Dashboard đọc từ DW</li>
              </ul>
            </div>

            {/* 06 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> Xu hướng kiến trúc hiện
              đại
            </h2>
            <p>
              Các kiến trúc như Lakehouse (Delta Lake, Iceberg) đang kết hợp ưu
              điểm của cả Data Lake và Data Warehouse trong một nền tảng thống
              nhất.
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Kiến trúc dữ liệu tốt không chỉ lưu trữ dữ liệu, mà còn giúp dữ
                liệu tạo ra giá trị.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
