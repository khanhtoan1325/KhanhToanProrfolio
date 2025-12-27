"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "../../../CSS/BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const post = {
    title: "Ứng dụng Big Data trong hệ thống thông tin doanh nghiệp",
    description:
      "Cách các doanh nghiệp sử dụng Big Data để phân tích hành vi khách hàng và tối ưu chiến lược.",
    category: "Big Data",
    date: "25 Tháng 12, 2025",
    readTime: "9 phút đọc",
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
            <div className={styles.avatar}>BD</div>
            <div>
              <strong>Ban biên tập Big Data</strong>
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
              “Big Data không chỉ là dữ liệu lớn. Giá trị thật nằm ở khả năng
              biến dữ liệu thành quyết định nhanh hơn đối thủ.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Big Data là gì? Vì sao
              doanh nghiệp cần?
            </h2>
            <p>
              Big Data là tập dữ liệu có quy mô lớn, đa dạng, tăng trưởng nhanh
              và đòi hỏi công nghệ/hệ thống chuyên biệt để lưu trữ – xử lý –
              phân tích. Trong hệ thống thông tin doanh nghiệp, Big Data giúp mở
              rộng khả năng nhìn nhận khách hàng, vận hành và thị trường theo
              thời gian gần thực.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Volume:</strong> dữ liệu rất lớn (log, clickstream,
                  giao dịch).
                </li>
                <li>
                  <strong>Velocity:</strong> dữ liệu đến liên tục (real-time /
                  near real-time).
                </li>
                <li>
                  <strong>Variety:</strong> nhiều định dạng (bảng, JSON, văn
                  bản, hình ảnh).
                </li>
                <li>
                  <strong>Veracity:</strong> độ tin cậy/độ nhiễu của dữ liệu.
                </li>
                <li>
                  <strong>Value:</strong> biến dữ liệu thành giá trị kinh doanh.
                </li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Big Data nằm ở đâu trong
              hệ thống thông tin?
            </h2>
            <p>
              Big Data không thay thế ERP/CRM hay hệ thống giao dịch (OLTP). Nó
              bổ sung một tầng dữ liệu lớn để thu thập và xử lý dữ liệu hành vi,
              dữ liệu máy móc, dữ liệu đa nguồn… rồi cung cấp cho
              BI/Analytics/AI.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>OLTP Systems</span>
                <p>ERP, CRM, POS – dữ liệu giao dịch</p>
              </div>
              <div className={styles.toolItem}>
                <span>Big Data Platform</span>
                <p>Data Lake + Processing + Streaming</p>
              </div>
              <div className={styles.toolItem}>
                <span>BI / AI</span>
                <p>Dashboard, phân tích, mô hình dự đoán</p>
              </div>
            </div>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Kiến trúc Big Data phổ
              biến trong doanh nghiệp
            </h2>
            <p>
              Một kiến trúc Big Data hiện đại thường gồm các lớp: ingestion (thu
              thập) → storage (lưu trữ) → processing (xử lý) → serving (cung cấp
              cho ứng dụng/BI/AI) → governance (quản trị).
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Ingestion</span>
                <h4>Thu thập dữ liệu</h4>
                <p>Batch (ETL/ELT) + Streaming (Kafka)</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Storage</span>
                <h4>Lưu trữ</h4>
                <p>Data Lake (raw/clean/curated), DW cho BI</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Processing</span>
                <h4>Xử lý</h4>
                <p>Spark/Flink, dbt, feature engineering</p>
              </div>
            </div>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Ứng dụng Big Data: phân
              tích hành vi khách hàng
            </h2>
            <p>
              Big Data đặc biệt mạnh trong việc phân tích hành vi (behavioral
              analytics): clickstream, hành trình người dùng (user journey), tần
              suất mua hàng, sản phẩm xem nhiều, điểm rơi rời bỏ…
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Customer 360</h5>
                <p>Hợp nhất dữ liệu đa kênh thành một hồ sơ khách hàng</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Segmentation</h5>
                <p>Phân khúc khách hàng theo hành vi & giá trị</p>
              </div>
            </div>

            {/* 05 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Ứng dụng Big Data: tối
              ưu vận hành & chiến lược
            </h2>
            <p>
              Ngoài marketing, Big Data còn giúp tối ưu vận hành (operations) và
              chiến lược: dự báo nhu cầu, tối ưu tồn kho, tối ưu tuyến giao
              hàng, phát hiện gian lận và giám sát hệ thống theo thời gian thực.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Demand Forecasting:</strong> dự báo nhu cầu theo mùa,
                  khu vực.
                </li>
                <li>
                  <strong>Fraud Detection:</strong> phát hiện giao dịch bất
                  thường gần real-time.
                </li>
                <li>
                  <strong>Supply Chain:</strong> tối ưu tồn kho, giảm “out of
                  stock”.
                </li>
                <li>
                  <strong>System Observability:</strong> phân tích log để phát
                  hiện lỗi, bottleneck.
                </li>
              </ul>
            </div>

            {/* 06 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> Công nghệ thường dùng
              (gợi ý stack)
            </h2>
            <p>
              Doanh nghiệp thường chọn stack theo quy mô và ngân sách. Dưới đây
              là “bộ công cụ” phổ biến (bạn có thể dùng một phần).
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Streaming</span>
                <p>Kafka / Pulsar</p>
              </div>
              <div className={styles.toolItem}>
                <span>Processing</span>
                <p>Spark / Flink</p>
              </div>
              <div className={styles.toolItem}>
                <span>Orchestration</span>
                <p>Airflow / Prefect</p>
              </div>
            </div>

            {/* 07 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>07</span> Data Governance: rủi ro
              & cách kiểm soát
            </h2>
            <p>
              Big Data càng lớn thì rủi ro càng cao: dữ liệu bẩn, trùng lặp, sai
              định nghĩa KPI, rò rỉ dữ liệu. Vì vậy governance là phần bắt buộc.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Data Quality</h5>
                <p>Schema validation, freshness, anomaly checks</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Security</h5>
                <p>RBAC, masking PII, audit logs</p>
              </div>
            </div>

            {/* 08 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>08</span> Checklist triển khai Big
              Data cho doanh nghiệp
            </h2>
            <p>
              Nếu bạn đang “bắt đầu từ số 0”, hãy đi theo checklist để tránh làm
              xong hệ thống mà không dùng được.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  Xác định <strong>use-case</strong> (KPI nào cần cải thiện?)
                </li>
                <li>
                  Chuẩn hóa <strong>định nghĩa dữ liệu</strong> (metric, schema)
                </li>
                <li>
                  Thiết kế <strong>pipeline</strong> (batch/streaming)
                </li>
                <li>
                  Thiết lập <strong>monitoring</strong> (freshness, alert)
                </li>
                <li>
                  Thiết lập <strong>governance</strong> (RBAC, PII, audit)
                </li>
              </ul>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Big Data chỉ thực sự “lớn” khi nó tạo ra tác động lớn lên quyết
                định và hiệu quả kinh doanh.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
