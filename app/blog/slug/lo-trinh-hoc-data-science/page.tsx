"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Lộ trình học Data Science cho người mới bắt đầu",
    category: "Data Science",
    date: "26 Tháng 12, 2025",
    readTime: "15 phút đọc",
    image: "/hocdataScience.png",
  };

  return (
    <div className={styles.container}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <div className={styles.lightOrb} />
      <div className={styles.lightOrb2} />

      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.breadcrumb}
          >
            <Link href="/blog">Tạp chí</Link> <span>/</span>{" "}
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
            <div className={styles.avatar}>DS</div>
            <div>
              <strong>Ban biên tập Next.js</strong>
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

      <main className={styles.contentLayout}>
        <article className={styles.mainArticle}>
          <section className={styles.leadCard}>
            <p>
              "Dữ liệu là nguồn tài nguyên thô, nhưng chỉ những ai có lộ trình
              đúng đắn mới có thể tinh chế nó thành vàng đen của kỷ nguyên số."
            </p>
          </section>

          <div className={styles.richText}>
            {/* GIAI ĐOẠN 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Nền tảng Toán & Thống kê
            </h2>
            <p>
              Học Data Science mà không có thống kê giống như xây nhà không
              móng. Bạn cần hiểu cách dữ liệu vận hành trước khi dạy máy tính
              hiểu chúng.
            </p>
            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Thống kê mô tả:</strong> Mean, Median, Mode, Variance,
                  Standard Deviation.
                </li>
                <li>
                  <strong>Xác suất:</strong> Bayes Theorem, Central Limit
                  Theorem - chìa khóa của kiểm định giả thuyết.
                </li>
                <li>
                  <strong>Đại số tuyến tính:</strong> Matrix, Vector (quan trọng
                  cho Deep Learning).
                </li>
              </ul>
            </div>

            {/* GIAI ĐOẠN 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Lập trình Python thực
              chiến
            </h2>
            <p>
              Đừng học Python như một lập trình viên phần mềm, hãy học nó như
              một công cụ xử lý dữ liệu.
            </p>
            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Pandas</span>
                <p>Thao tác dữ liệu bảng</p>
              </div>
              <div className={styles.toolItem}>
                <span>NumPy</span>
                <p>Tính toán ma trận số học</p>
              </div>
              <div className={styles.toolItem}>
                <span>SQL</span>
                <p>Truy vấn dữ liệu từ Database</p>
              </div>
            </div>

            {/* GIAI ĐOẠN 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Phân tích & Trực quan
              hóa (EDA)
            </h2>
            <p>
              Đây là giai đoạn bạn đặt câu hỏi cho dữ liệu. Sử dụng biểu đồ để
              tìm ra xu hướng (trends) và các điểm bất thường (outliers).
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step A</span>
                <h4>Matplotlib & Seaborn</h4>
                <p>Vẽ biểu đồ phân phối, tương quan giữa các biến số.</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step B</span>
                <h4>Feature Engineering</h4>
                <p>Lọc và biến đổi dữ liệu để tối ưu cho thuật toán.</p>
              </div>
            </div>

            {/* GIAI ĐOẠN 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Machine Learning
            </h2>
            <p>
              Dạy máy tính học từ quá khứ. Bắt đầu với các thuật toán cơ bản
              trước khi nhảy vào mạng thần kinh (Neural Networks).
            </p>
            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Supervised Learning</h5>
                <p>Linear Regression, Decision Trees, Random Forest.</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Unsupervised Learning</h5>
                <p>K-Means Clustering, PCA (Giảm chiều dữ liệu).</p>
              </div>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>Hành trình vạn dặm bắt đầu từ một dòng code sạch.</p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
