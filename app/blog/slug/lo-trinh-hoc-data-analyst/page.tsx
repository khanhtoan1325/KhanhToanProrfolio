"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Lộ trình học Data Analyst từ con số 0",
    description:
      "Hướng dẫn chi tiết các kỹ năng cần thiết để trở thành Data Analyst: Excel, SQL, Python và Data Visualization.",
    category: "Data",
    date: "18 Tháng 12, 2025",
    readTime: "8 phút đọc",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
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
            <div className={styles.avatar}>DA</div>
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
              “Data Analyst không phải là người viết nhiều code nhất, mà là
              người hiểu dữ liệu và chuyển nó thành insight có giá trị cho doanh
              nghiệp.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Data Analyst là ai?
            </h2>
            <p>
              Data Analyst là người thu thập, làm sạch, phân tích và trực quan
              hóa dữ liệu nhằm trả lời các câu hỏi kinh doanh và hỗ trợ ra quyết
              định. Đây là vị trí phù hợp cho người mới bắt đầu bước vào lĩnh
              vực dữ liệu.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Phân tích dữ liệu kinh doanh</li>
                <li>Xây dựng báo cáo & dashboard</li>
                <li>Trình bày insight cho stakeholder</li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Giai đoạn 1: Excel & tư
              duy dữ liệu
            </h2>
            <p>
              Excel là công cụ nền tảng giúp bạn hiểu cách dữ liệu được tổ chức,
              làm sạch và phân tích trước khi chuyển sang các công cụ phức tạp
              hơn.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Excel</span>
                <p>Pivot Table, VLOOKUP, Power Query</p>
              </div>
              <div className={styles.toolItem}>
                <span>Statistics</span>
                <p>Mean, Median, Correlation</p>
              </div>
              <div className={styles.toolItem}>
                <span>Business Thinking</span>
                <p>Đặt câu hỏi đúng cho dữ liệu</p>
              </div>
            </div>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Giai đoạn 2: SQL & cơ sở
              dữ liệu
            </h2>
            <p>
              SQL là kỹ năng bắt buộc giúp Data Analyst làm việc trực tiếp với
              dữ liệu trong hệ thống doanh nghiệp.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Basic</span>
                <h4>SELECT, WHERE</h4>
                <p>Lọc và truy vấn dữ liệu</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Intermediate</span>
                <h4>JOIN, GROUP BY</h4>
                <p>Tổng hợp dữ liệu nhiều bảng</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Advanced</span>
                <h4>CTE, Window Function</h4>
                <p>Phân tích nâng cao</p>
              </div>
            </div>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Giai đoạn 3: Python cho
              phân tích dữ liệu
            </h2>
            <p>
              Python giúp bạn tự động hóa phân tích và xử lý tập dữ liệu lớn hơn
              Excel.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Pandas & NumPy</h5>
                <p>Xử lý dữ liệu bảng</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>EDA</h5>
                <p>Khám phá & làm sạch dữ liệu</p>
              </div>
            </div>

            {/* 05 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Giai đoạn 4: Data
              Visualization
            </h2>
            <p>
              Trực quan hóa giúp bạn truyền tải insight rõ ràng và thuyết phục
              cho người không chuyên về dữ liệu.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>Power BI / Tableau</li>
                <li>Matplotlib / Seaborn</li>
                <li>Dashboard cho doanh nghiệp</li>
              </ul>
            </div>

            {/* 06 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> Chuẩn bị đi làm Data
              Analyst
            </h2>
            <p>
              Để sẵn sàng đi làm, bạn cần kết hợp kỹ năng kỹ thuật và kỹ năng
              mềm.
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Một Data Analyst giỏi không chỉ biết phân tích dữ liệu, mà còn
                biết kể câu chuyện từ dữ liệu.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
