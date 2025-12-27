"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Thiết kế Data Pipeline với ETL/ELT cho doanh nghiệp",
    description:
      "Hướng dẫn xây dựng Data Pipeline từ nhiều nguồn dữ liệu với ETL/ELT, phục vụ phân tích và báo cáo.",
    category: "Data Engineering",
    date: "24 Tháng 12, 2025",
    readTime: "10 phút đọc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNT5fKB_XQ05mFcWSgt8yAoN8qTiYjukhJQ&s",
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
            <div className={styles.avatar}>ETL</div>
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
              “Data Pipeline là hệ tuần hoàn của doanh nghiệp số – nếu nó tắc
              nghẽn, mọi phân tích, báo cáo và AI đều trở nên vô nghĩa.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Data Pipeline là gì?
            </h2>
            <p>
              Data Pipeline là chuỗi các bước tự động giúp thu thập, xử lý và
              phân phối dữ liệu từ nhiều nguồn khác nhau đến nơi sử dụng cuối
              cùng như Data Warehouse, Data Lake, BI hoặc hệ thống Machine
              Learning.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Nguồn:</strong> OLTP, API, log, IoT, SaaS.
                </li>
                <li>
                  <strong>Xử lý:</strong> clean, validate, enrich.
                </li>
                <li>
                  <strong>Đích:</strong> Data Warehouse, Data Lake, Feature
                  Store.
                </li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> ETL vs ELT
            </h2>
            <p>
              ETL và ELT khác nhau chủ yếu ở vị trí thực hiện bước Transform và
              phù hợp với từng thế hệ kiến trúc dữ liệu.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>ETL</span>
                <p>Transform trước Load – on-premise, DW truyền thống</p>
              </div>
              <div className={styles.toolItem}>
                <span>ELT</span>
                <p>Load trước Transform – Cloud, Big Data</p>
              </div>
              <div className={styles.toolItem}>
                <span>Modern Stack</span>
                <p>ELT + dbt + Cloud Warehouse</p>
              </div>
            </div>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Batch vs Streaming
            </h2>
            <p>
              Doanh nghiệp hiện đại thường kết hợp cả batch processing và
              streaming để cân bằng chi phí và độ trễ.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Batch</span>
                <h4>Định kỳ</h4>
                <p>Báo cáo ngày, tuần, tháng</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Streaming</span>
                <h4>Real-time</h4>
                <p>Fraud detection, tracking user</p>
              </div>
            </div>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Data Quality &
              Monitoring
            </h2>
            <p>
              Pipeline tốt không chỉ chạy được mà phải đáng tin cậy. Data
              Quality là yếu tố sống còn trong hệ thống dữ liệu doanh nghiệp.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Data Quality</h5>
                <p>Null check, schema validation, freshness</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Monitoring</h5>
                <p>Alert, retry, logging, lineage</p>
              </div>
            </div>

            {/* 05 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Bảo mật & Governance
            </h2>
            <p>
              Khi dữ liệu tăng trưởng, bảo mật và quản trị dữ liệu trở thành yêu
              cầu bắt buộc, đặc biệt với doanh nghiệp lớn.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Phân quyền truy cập dữ liệu (RBAC)</li>
                <li>Mã hóa dữ liệu (at-rest & in-transit)</li>
                <li>Audit log & compliance</li>
              </ul>
            </div>

            {/* 06 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> Case thực tế doanh
              nghiệp
            </h2>
            <p>
              Ví dụ: dữ liệu bán hàng từ ERP → Kafka → Data Lake → Data
              Warehouse → Dashboard BI cho ban lãnh đạo theo thời gian gần
              real-time.
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Data Pipeline tốt giúp doanh nghiệp tin vào dữ liệu của chính
                mình.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
