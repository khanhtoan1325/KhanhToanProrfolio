"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Data Engineering là gì? Vai trò trong hệ thống thông tin hiện đại",
    description:
      "Tìm hiểu Data Engineering, cách xây dựng pipeline dữ liệu và vai trò cốt lõi trong các hệ thống thông tin doanh nghiệp.",
    category: "Data Engineering",
    date: "20 Tháng 12, 2025",
    readTime: "8 phút đọc",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
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
            <div className={styles.avatar}>DE</div>
            <div>
              <strong>Ban biên tập Hệ thống thông tin</strong>
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
              “Trong kỷ nguyên dữ liệu, Data Engineering chính là nền móng vô
              hình giúp doanh nghiệp biến dữ liệu thô thành thông tin có giá trị
              cho việc ra quyết định.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* PHẦN 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Data Engineering là gì?
            </h2>
            <p>
              Data Engineering là lĩnh vực tập trung vào việc thiết kế, xây dựng
              và vận hành các hệ thống thu thập, lưu trữ và xử lý dữ liệu ở quy
              mô lớn. Đây là cầu nối giữa dữ liệu thô và các hệ thống phân tích,
              báo cáo, Machine Learning.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Thu thập dữ liệu:</strong> từ hệ thống giao dịch, ứng
                  dụng, IoT, API.
                </li>
                <li>
                  <strong>Xử lý & làm sạch:</strong> đảm bảo dữ liệu chính xác,
                  nhất quán.
                </li>
                <li>
                  <strong>Cung cấp dữ liệu:</strong> cho BI, Data Science,
                  AI/ML.
                </li>
              </ul>
            </div>

            {/* PHẦN 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Vai trò trong hệ thống
              thông tin doanh nghiệp
            </h2>
            <p>
              Trong hệ thống thông tin hiện đại, Data Engineer đảm bảo dữ liệu
              luôn sẵn sàng, đáng tin cậy và có thể mở rộng để phục vụ các quyết
              định chiến lược của doanh nghiệp.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>OLTP Systems</span>
                <p>ERP, CRM, hệ thống giao dịch</p>
              </div>
              <div className={styles.toolItem}>
                <span>Data Warehouse</span>
                <p>Lưu trữ & phân tích dữ liệu lịch sử</p>
              </div>
              <div className={styles.toolItem}>
                <span>BI & Analytics</span>
                <p>Dashboard, báo cáo, insight</p>
              </div>
            </div>

            {/* PHẦN 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Data Pipeline & ETL/ELT
            </h2>
            <p>
              Trái tim của Data Engineering là các pipeline dữ liệu, nơi dữ liệu
              được trích xuất (Extract), biến đổi (Transform) và nạp (Load) vào
              hệ thống đích.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 1</span>
                <h4>Extract</h4>
                <p>Lấy dữ liệu từ nhiều nguồn khác nhau.</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 2</span>
                <h4>Transform</h4>
                <p>Làm sạch, chuẩn hóa và enrich dữ liệu.</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 3</span>
                <h4>Load</h4>
                <p>Đưa dữ liệu vào Data Warehouse hoặc Data Lake.</p>
              </div>
            </div>

            {/* PHẦN 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Công cụ & tương lai của
              Data Engineering
            </h2>
            <p>
              Data Engineering đang phát triển mạnh với Cloud, Big Data và
              Real-time Processing, trở thành trụ cột không thể thiếu của hệ
              thống thông tin doanh nghiệp.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Cloud Platforms</h5>
                <p>AWS, GCP, Azure cho hệ thống dữ liệu lớn.</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Big Data Tools</h5>
                <p>Spark, Kafka, Airflow.</p>
              </div>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Không có Data Engineering tốt, mọi phân tích dữ liệu chỉ là lý
                thuyết.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
