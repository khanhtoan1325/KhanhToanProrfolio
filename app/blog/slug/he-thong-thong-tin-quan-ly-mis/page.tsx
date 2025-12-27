"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title:
      "Hệ thống thông tin quản lý (MIS) là gì? Ứng dụng trong doanh nghiệp",
    description:
      "Tổng quan về MIS, vai trò trong việc hỗ trợ ra quyết định và tối ưu vận hành doanh nghiệp hiện đại.",
    category: "Hệ thống thông tin",
    date: "15 Tháng 12, 2025",
    readTime: "7 phút đọc",
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
            <div className={styles.avatar}>MIS</div>
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
              “Hệ thống thông tin quản lý không chỉ lưu trữ dữ liệu, mà biến dữ
              liệu thành công cụ hỗ trợ ra quyết định cho nhà quản lý.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> MIS là gì?
            </h2>
            <p>
              Hệ thống thông tin quản lý (Management Information System – MIS)
              là hệ thống thu thập, xử lý, lưu trữ và cung cấp thông tin nhằm hỗ
              trợ các hoạt động quản lý, lập kế hoạch, kiểm soát và ra quyết
              định trong doanh nghiệp.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Thu thập dữ liệu từ các hệ thống nghiệp vụ</li>
                <li>Xử lý và tổng hợp dữ liệu</li>
                <li>Cung cấp báo cáo cho nhà quản lý</li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Vai trò của MIS trong
              doanh nghiệp
            </h2>
            <p>
              MIS đóng vai trò trung tâm trong việc kết nối dữ liệu vận hành và
              nhu cầu thông tin của nhà quản lý, giúp doanh nghiệp hoạt động
              hiệu quả và nhất quán.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Operational Control</span>
                <p>Giám sát hoạt động hằng ngày</p>
              </div>
              <div className={styles.toolItem}>
                <span>Tactical Planning</span>
                <p>Hỗ trợ quản lý cấp trung</p>
              </div>
              <div className={styles.toolItem}>
                <span>Strategic Decision</span>
                <p>Ra quyết định dài hạn</p>
              </div>
            </div>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Các thành phần chính của
              MIS
            </h2>
            <p>
              Một hệ thống MIS hoàn chỉnh bao gồm nhiều thành phần phối hợp chặt
              chẽ với nhau để đảm bảo thông tin chính xác và kịp thời.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Data</span>
                <h4>Dữ liệu</h4>
                <p>Dữ liệu từ ERP, CRM, kế toán</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Process</span>
                <h4>Xử lý</h4>
                <p>Tổng hợp, phân tích, báo cáo</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>People</span>
                <h4>Con người</h4>
                <p>Nhà quản lý và người sử dụng</p>
              </div>
            </div>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> MIS và các hệ thống liên
              quan
            </h2>
            <p>
              MIS không tồn tại độc lập mà tương tác chặt chẽ với các hệ thống
              thông tin khác trong doanh nghiệp.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>TPS</h5>
                <p>Xử lý giao dịch (OLTP)</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>DSS & BI</h5>
                <p>Phân tích và hỗ trợ quyết định</p>
              </div>
            </div>

            {/* 05 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Ứng dụng MIS trong thực
              tế
            </h2>
            <p>
              MIS được sử dụng rộng rãi trong nhiều lĩnh vực như tài chính, nhân
              sự, sản xuất và marketing để theo dõi hiệu suất và tối ưu vận
              hành.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Báo cáo doanh thu, chi phí</li>
                <li>Quản lý tồn kho</li>
                <li>Đánh giá hiệu suất nhân sự</li>
              </ul>
            </div>

            {/* 06 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> MIS trong kỷ nguyên dữ
              liệu
            </h2>
            <p>
              Ngày nay, MIS đang được tích hợp với Data Warehouse, BI và AI để
              cung cấp thông tin thông minh hơn, giúp doanh nghiệp phản ứng
              nhanh trước thay đổi của thị trường.
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                MIS tốt giúp nhà quản lý nhìn rõ hiện tại và dự đoán tương lai
                của doanh nghiệp.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
