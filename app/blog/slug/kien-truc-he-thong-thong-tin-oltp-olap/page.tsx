"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Kiến trúc hệ thống thông tin doanh nghiệp: Từ OLTP đến OLAP",
    description:
      "Phân tích kiến trúc hệ thống thông tin hiện đại, sự khác biệt giữa OLTP, OLAP và Data Warehouse.",
    category: "Hệ thống thông tin",
    date: "22 Tháng 12, 2025",
    readTime: "9 phút đọc",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
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
            <div className={styles.avatar}>IS</div>
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
              “Một hệ thống thông tin doanh nghiệp hiệu quả không bắt đầu từ báo
              cáo, mà bắt đầu từ cách dữ liệu được sinh ra, lưu trữ và xử lý.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* PHẦN 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Tổng quan kiến trúc hệ
              thống thông tin
            </h2>
            <p>
              Hệ thống thông tin doanh nghiệp hiện đại thường được chia thành
              nhiều tầng, mỗi tầng đảm nhiệm một vai trò riêng từ vận hành giao
              dịch hằng ngày đến phân tích và hỗ trợ ra quyết định chiến lược.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Tầng giao dịch:</strong> nơi dữ liệu được tạo ra (bán
                  hàng, thanh toán, kho).
                </li>
                <li>
                  <strong>Tầng dữ liệu:</strong> lưu trữ, tích hợp và chuẩn hóa
                  dữ liệu.
                </li>
                <li>
                  <strong>Tầng phân tích:</strong> báo cáo, dashboard, BI.
                </li>
              </ul>
            </div>

            {/* PHẦN 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Hệ thống OLTP – Trái tim
              vận hành
            </h2>
            <p>
              OLTP (Online Transaction Processing) xử lý các giao dịch hàng ngày
              với yêu cầu tốc độ cao, tính nhất quán và độ tin cậy tuyệt đối.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>ERP</span>
                <p>Quản lý tài chính, nhân sự</p>
              </div>
              <div className={styles.toolItem}>
                <span>CRM</span>
                <p>Quản lý khách hàng</p>
              </div>
              <div className={styles.toolItem}>
                <span>POS</span>
                <p>Giao dịch bán lẻ</p>
              </div>
            </div>

            {/* PHẦN 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Hệ thống OLAP & Data
              Warehouse
            </h2>
            <p>
              OLAP (Online Analytical Processing) được thiết kế cho phân tích dữ
              liệu lịch sử, hỗ trợ truy vấn phức tạp và tổng hợp dữ liệu từ
              nhiều nguồn khác nhau.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 1</span>
                <h4>ETL / ELT</h4>
                <p>Tích hợp dữ liệu từ các hệ thống OLTP.</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 2</span>
                <h4>Data Warehouse</h4>
                <p>Lưu trữ dữ liệu theo mô hình phân tích.</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 3</span>
                <h4>OLAP Cubes</h4>
                <p>Phân tích đa chiều, drill-down, roll-up.</p>
              </div>
            </div>

            {/* PHẦN 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Từ dữ liệu đến quyết
              định
            </h2>
            <p>
              Khi kiến trúc OLTP và OLAP được thiết kế đúng cách, doanh nghiệp
              có thể chuyển dữ liệu vận hành thành insight chiến lược, hỗ trợ ra
              quyết định nhanh và chính xác.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Business Intelligence</h5>
                <p>Dashboard, báo cáo quản trị.</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Advanced Analytics</h5>
                <p>Dự báo, Data Science, AI.</p>
              </div>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Kiến trúc dữ liệu tốt giúp doanh nghiệp nhìn thấy tương lai từ
                dữ liệu quá khứ.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
