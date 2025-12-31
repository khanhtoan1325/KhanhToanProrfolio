"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Toàn tập về Business Intelligence (BI) & Data Warehouse hiện đại",
    description:
      "Từ kiến trúc kho dữ liệu Star Schema đến quy trình ELT hiện đại và ứng dụng AI trong phân tích dữ liệu doanh nghiệp.",
    category: "Hệ thống thông tin",
    date: "20 Tháng 12, 2025",
    readTime: "25 phút đọc",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1000&auto=format&fit=crop",
  };

  return (
    <div className={styles.container}>
      {/* Thanh tiến trình đọc bài */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <div className={styles.lightOrb} />
      <div className={styles.lightOrb2} />

      {/* --- HERO SECTION --- */}
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

      {/* --- MAIN CONTENT --- */}
      <main className={styles.contentLayout}>
        <article className={styles.mainArticle}>
          <section className={styles.leadCard}>
            <p>
              “Dữ liệu mà không có phân tích thì chỉ là những con số vô hồn.
              Nhưng phân tích mà không có nền tảng dữ liệu sạch thì là một sự
              lãng phí tài nguyên doanh nghiệp.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* PHẦN 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Hệ sinh thái BI & Data
              Warehouse
            </h2>
            <p>
              Hệ thống BI không chỉ đơn giản là một cái Dashboard đẹp. Nó là một
              cỗ máy vận hành gồm 4 giai đoạn chính:
              <strong> Thu thập (Ingestion)</strong>,{" "}
              <strong>Lưu trữ (Storage)</strong>,
              <strong> Xử lý (Transformation)</strong> và{" "}
              <strong>Trực quan hóa (Visualization)</strong>.
            </p>
            {/* PHẦN 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Data Modeling: Star vs
              Snowflake Schema
            </h2>
            <p>
              Việc thiết kế bảng dữ liệu (Data Modeling) là bước quan trọng nhất
              trong xây dựng Data Warehouse. Bạn cần phân biệt rõ hai loại bảng:
            </p>
            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Fact Table:</strong> Chứa các chỉ số định lượng (Doanh
                  thu, số lượng, lợi nhuận) và các khóa ngoại.
                </li>
                <li>
                  <strong>Dimension Table:</strong> Chứa các thuộc tính mô tả
                  (Tên sản phẩm, thông tin khách hàng, thời gian).
                </li>
              </ul>
            </div>
            <h3 className={styles.subHeading}>Lựa chọn kiến trúc phù hợp</h3>
            <p>
              Trong khi <strong>Star Schema</strong> ưu tiên tốc độ truy vấn
              bằng cách phi chuẩn hóa dữ liệu, thì
              <strong> Snowflake Schema</strong> lại giúp tiết kiệm không gian
              lưu trữ bằng cách chuẩn hóa các bảng chiều. Ngày nay, nhờ chi phí
              lưu trữ đám mây rẻ, Star Schema thường được ưu tiên hơn.
            </p>
            [Image of Star Schema vs Snowflake Schema comparison]
            {/* PHẦN 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Sự dịch chuyển từ ETL
              sang ELT
            </h2>
            <p>
              Trước đây, do tài nguyên máy chủ hạn chế, chúng ta phải "biến đổi"
              (Transform) dữ liệu trước khi đưa vào kho. Hiện nay, với sức mạnh
              của Cloud Warehouse (BigQuery, Snowflake), quy trình{" "}
              <strong>ELT</strong> trở thành tiêu chuẩn:
            </p>
            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 1</span>
                <h4>Extract & Load</h4>
                <p>
                  Đưa dữ liệu thô từ CRM, ERP trực tiếp vào Data Lake/Warehouse
                  mà không cần chỉnh sửa.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 2</span>
                <h4>Transform (dbt)</h4>
                <p>
                  Sử dụng ngôn ngữ SQL để xây dựng các tầng dữ liệu (Staging -
                  Mart) ngay bên trong kho dữ liệu.
                </p>
              </div>
            </div>
            {/* PHẦN 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Quản trị dữ liệu (Data
              Governance)
            </h2>
            <p>
              Một hệ thống BI sẽ thất bại nếu người dùng không tin tưởng vào con
              số. Quản trị dữ liệu giải quyết 3 bài toán:
            </p>
            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Data Quality</span>
                <p>Đảm bảo không có dữ liệu rác, trùng lặp hoặc thiếu sót.</p>
              </div>
              <div className={styles.toolItem}>
                <span>Single Source of Truth</span>
                <p>Đảm bảo mọi phòng ban dùng chung một định nghĩa về KPI.</p>
              </div>
              <div className={styles.toolItem}>
                <span>Data Security</span>
                <p>
                  Phân quyền xem dữ liệu theo vai trò (Role-based access
                  control).
                </p>
              </div>
            </div>
            {/* PHẦN 5 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Các xu hướng BI năm 2025
            </h2>
            <p>
              BI đang tiến hóa từ việc "nhìn lại quá khứ" sang "dự báo tương
              lai" với sự hỗ trợ của AI:
            </p>
            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Self-Service BI</h5>
                <p>
                  Cho phép người dùng cuối tự tạo báo cáo mà không cần bộ phận
                  IT hỗ trợ.
                </p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Embedded Analytics</h5>
                <p>
                  Tích hợp trực tiếp các biểu đồ phân tích vào ứng dụng làm việc
                  hàng ngày.
                </p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Generative AI</h5>
                <p>
                  Sử dụng chatbot (LLMs) để truy vấn dữ liệu bằng ngôn ngữ tự
                  nhiên (Natural Language Query).
                </p>
              </div>
            </div>
            {/* PHẦN 6 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> So sánh BI và Data
              Science
            </h2>
            <p>
              Dù cùng làm việc với dữ liệu, nhưng mục tiêu của hai lĩnh vực này
              rất khác nhau:
            </p>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Tiêu chí</th>
                  <th>Business Intelligence (BI)</th>
                  <th>Data Science (DS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trọng tâm</td>
                  <td>Báo cáo quá khứ & hiện tại</td>
                  <td>Dự báo xu hướng tương lai</td>
                </tr>
                <tr>
                  <td>Công cụ</td>
                  <td>SQL, Power BI, Tableau</td>
                  <td>Python, R, Machine Learning</td>
                </tr>
                <tr>
                  <td>Đối tượng phục vụ</td>
                  <td>Nhà quản lý, điều hành</td>
                  <td>Bộ phận nghiên cứu, phát triển sản phẩm</td>
                </tr>
              </tbody>
            </table>
            {/* PHẦN 7 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>07</span> Kết luận & Lời khuyên
            </h2>
            <p>
              Xây dựng một hệ thống BI là một hành trình, không phải đích đến.
              Hãy bắt đầu nhỏ (với các dữ liệu quan trọng nhất) và mở rộng dần
              dần. Đừng cố gắng xây dựng một kho dữ liệu khổng lồ ngay từ đầu mà
              không hiểu rõ nhu cầu của người dùng.
            </p>
            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Công nghệ chỉ chiếm 20% thành công của một dự án BI. 80% còn lại
                nằm ở quy trình và văn hóa sử dụng dữ liệu của doanh nghiệp.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
