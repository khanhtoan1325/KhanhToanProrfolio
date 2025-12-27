"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Business Intelligence (BI) và Data Warehouse cho người mới",
    description:
      "Hiểu cách dữ liệu được thu thập, lưu trữ và trực quan hóa để hỗ trợ chiến lược kinh doanh.",
    category: "Hệ thống thông tin",
    date: "20 Tháng 12, 2025",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1000&auto=format&fit=crop",
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
            <div className={styles.avatar}>BI</div>
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
              “Business Intelligence giúp doanh nghiệp nhìn thấy điều đang xảy
              ra, hiểu vì sao nó xảy ra và quyết định nên làm gì tiếp theo.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Business Intelligence
              (BI) là gì?
            </h2>
            <p>
              Business Intelligence (BI) là tập hợp các công cụ, quy trình và
              phương pháp giúp thu thập, phân tích và trực quan hóa dữ liệu nhằm
              hỗ trợ nhà quản lý ra quyết định dựa trên dữ liệu thay vì cảm
              tính.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Theo dõi hiệu suất kinh doanh</li>
                <li>Phát hiện xu hướng và vấn đề</li>
                <li>Hỗ trợ quyết định chiến lược</li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Data Warehouse trong BI
            </h2>
            <p>
              Data Warehouse là nền tảng dữ liệu trung tâm cho BI, nơi dữ liệu
              được tích hợp từ nhiều hệ thống nghiệp vụ và tổ chức lại để phục
              vụ phân tích.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Tích hợp dữ liệu</span>
                <p>ERP, CRM, POS, Marketing</p>
              </div>
              <div className={styles.toolItem}>
                <span>Chuẩn hóa</span>
                <p>Làm sạch và thống nhất dữ liệu</p>
              </div>
              <div className={styles.toolItem}>
                <span>Phân tích</span>
                <p>Tối ưu cho truy vấn BI</p>
              </div>
            </div>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Quy trình BI tiêu chuẩn
            </h2>
            <p>
              Một hệ thống BI điển hình tuân theo quy trình từ thu thập dữ liệu
              đến trình bày thông tin cho người dùng cuối.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 1</span>
                <h4>Data Sources</h4>
                <p>Hệ thống giao dịch, file, API</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 2</span>
                <h4>ETL / ELT</h4>
                <p>Làm sạch và tích hợp dữ liệu</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 3</span>
                <h4>BI Tools</h4>
                <p>Dashboard, báo cáo, phân tích</p>
              </div>
            </div>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Công cụ BI phổ biến
            </h2>
            <p>
              Các công cụ BI giúp người dùng không chuyên kỹ thuật vẫn có thể
              phân tích và khám phá dữ liệu một cách trực quan.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Power BI</h5>
                <p>Phổ biến trong doanh nghiệp</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Tableau</h5>
                <p>Trực quan hóa mạnh mẽ</p>
              </div>
            </div>

            {/* 05 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> BI khác gì với Data
              Analytics?
            </h2>
            <p>
              BI tập trung vào việc trả lời câu hỏi “điều gì đã xảy ra và đang
              xảy ra”, trong khi Data Analytics mở rộng sang dự đoán và tối ưu
              hóa.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>BI: Báo cáo, dashboard, KPI</li>
                <li>Analytics: Dự báo, mô hình, AI</li>
                <li>BI là nền tảng cho Analytics</li>
              </ul>
            </div>

            {/* 06 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> BI cho người mới bắt đầu
            </h2>
            <p>
              Với người mới, hãy bắt đầu từ tư duy kinh doanh, hiểu dữ liệu và
              làm chủ một công cụ BI trước khi học sâu hơn về Data Engineering
              hay Data Science.
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                BI không thay thế con người, nhưng giúp con người ra quyết định
                tốt hơn nhờ dữ liệu.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
