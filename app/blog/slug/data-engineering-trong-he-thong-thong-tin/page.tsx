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
      "Tìm hiểu Data Engineering, cách xây dựng pipeline dữ liệu, tiêu chuẩn chất lượng dữ liệu và truy vấn mẫu cho hệ thống doanh nghiệp.",
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
              hình giúp doanh nghiệp biến dữ liệu thô thành thông tin đáng tin
              cậy cho quyết định chiến lược — nhanh, đúng, và có thể mở rộng.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* PHẦN 0 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>00</span> Vì sao Data Engineering
              trở thành “xương sống” của doanh nghiệp?
            </h2>
            <p>
              Một doanh nghiệp hiện đại thường có hàng chục nguồn dữ liệu: hệ
              thống giao dịch (ERP/CRM/POS), website/app, marketing platforms,
              payment, logistics, IoT… Vấn đề không phải là “thiếu dữ liệu”, mà
              là <strong>dữ liệu phân mảnh, không đồng nhất và khó tin</strong>.
            </p>
            <p>
              Data Engineering xuất hiện để giải bài toán đó: xây dựng đường đi
              của dữ liệu từ nguồn → xử lý → lưu trữ → cung cấp cho
              BI/Analytics/ML. Nếu Data Engineer làm tốt, doanh nghiệp có
              “single source of truth”, dashboard không sai số, mô hình ML không
              bị rác dữ liệu.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Business cần:</strong> báo cáo nhanh, đúng, ra quyết
                  định kịp thời.
                </li>
                <li>
                  <strong>Data Science cần:</strong> dữ liệu sạch, có lineage,
                  có định nghĩa rõ ràng.
                </li>
                <li>
                  <strong>Engineering cần:</strong> pipeline ổn định, monitoring
                  tốt, chi phí cloud tối ưu.
                </li>
              </ul>
            </div>

            {/* PHẦN 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Data Engineering là gì?
            </h2>
            <p>
              Data Engineering là lĩnh vực tập trung vào việc{" "}
              <strong>thiết kế, xây dựng và vận hành</strong> các hệ thống thu
              thập, lưu trữ và xử lý dữ liệu ở quy mô lớn. Đây là cầu nối giữa
              dữ liệu thô và các hệ thống phân tích/báo cáo/Machine Learning.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Thu thập dữ liệu:</strong> từ hệ thống giao dịch, ứng
                  dụng, IoT, API, logs.
                </li>
                <li>
                  <strong>Xử lý & làm sạch:</strong> đảm bảo dữ liệu chính xác,
                  nhất quán, có chuẩn định nghĩa.
                </li>
                <li>
                  <strong>Mô hình hóa & cung cấp:</strong> data mart/semantic
                  layer cho BI, DS, AI/ML.
                </li>
                <li>
                  <strong>Vận hành:</strong> orchestration, monitoring,
                  alerting, tối ưu chi phí và hiệu năng.
                </li>
              </ul>
            </div>

            <h3>Data Engineer khác gì Data Analyst / Data Scientist?</h3>
            <p>
              Nếu Analyst/Scientist là người “đào insight” và “xây mô hình”, thì
              Data Engineer là người đảm bảo{" "}
              <strong>đường ống dữ liệu chạy bền</strong>, có chuẩn hóa và có
              thể scale. Không có nền móng này, dashboard dễ sai, model ML dễ
              “học nhầm”.
            </p>

            {/* PHẦN 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Vai trò trong hệ thống
              thông tin doanh nghiệp
            </h2>
            <p>
              Trong hệ thống thông tin hiện đại, Data Engineer đảm bảo dữ liệu{" "}
              <strong>luôn sẵn sàng – đáng tin – và truy xuất được</strong>. Nói
              đơn giản: bạn không thể ra quyết định bằng dashboard nếu dashboard
              lấy dữ liệu sai/thiếu/chậm.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>OLTP Systems</span>
                <p>ERP, CRM, POS, hệ thống giao dịch</p>
              </div>
              <div className={styles.toolItem}>
                <span>Data Lake/Warehouse</span>
                <p>Lưu trữ dữ liệu lịch sử, truy vấn phân tích</p>
              </div>
              <div className={styles.toolItem}>
                <span>BI & Analytics</span>
                <p>Dashboard, KPI, insight theo thời gian thực/định kỳ</p>
              </div>
            </div>

            <h3>“Data reliability” là KPI ngầm của Data Engineer</h3>
            <p>
              Dữ liệu tốt thường được đo bằng: tính đúng (accuracy), đầy đủ
              (completeness), kịp thời (timeliness), nhất quán (consistency), và
              truy vết được (lineage). DE giỏi không chỉ “chạy được”, mà còn
              “chạy đúng và biết khi nào sai”.
            </p>

            {/* PHẦN 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Data Pipeline & ETL/ELT
              (trái tim của Data Engineering)
            </h2>
            <p>
              Pipeline dữ liệu là chuỗi bước giúp dữ liệu đi từ nguồn → hệ đích.
              Mô hình phổ biến gồm ETL/ELT:
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 1</span>
                <h4>Extract</h4>
                <p>Lấy dữ liệu từ DB, API, logs, message queue…</p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 2</span>
                <h4>Transform</h4>
                <p>
                  Làm sạch, chuẩn hóa schema, enrich, join, dedup, business
                  logic.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 3</span>
                <h4>Load</h4>
                <p>
                  Đưa vào Data Warehouse/Lake, tạo bảng fact/dimension, phục vụ
                  BI/ML.
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>ETL:</strong> transform trước rồi load (hay dùng khi
                  hệ đích không mạnh transform).
                </li>
                <li>
                  <strong>ELT:</strong> load trước rồi transform trong warehouse
                  (phổ biến trên cloud DWH hiện đại).
                </li>
                <li>
                  <strong>Batch vs Streaming:</strong> batch (định kỳ),
                  streaming (gần real-time).
                </li>
              </ul>
            </div>

            <h3>Pipeline thực tế thường chia 3 lớp: Bronze / Silver / Gold</h3>
            <p>Đây là pattern rất “đời” để quản lý chất lượng dữ liệu:</p>
            <ul className={styles.glossyList}>
              <li>
                <strong>Bronze (Raw):</strong> dữ liệu thô, ít biến đổi, giữ
                nguyên để audit.
              </li>
              <li>
                <strong>Silver (Cleaned):</strong> chuẩn schema, dedup, chuẩn
                hóa timezone/currency…
              </li>
              <li>
                <strong>Gold (Business):</strong> bảng phục vụ KPI/BI/ML
                (fact/dim, aggregates).
              </li>
            </ul>

            {/* PHẦN 3.5 - SQL SAMPLE */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Truy vấn SQL mẫu (thực
              chiến trong Data Engineering)
            </h2>
            <p>
              SQL là “ngôn ngữ chung” của data. Dưới đây là một số truy vấn mẫu
              bạn sẽ gặp thường xuyên khi xây pipeline và kiểm tra chất lượng dữ
              liệu.
            </p>

            <h3>1) Kiểm tra dữ liệu thiếu (missing) theo cột</h3>
            <pre className={styles.codeBlock}>
              {`-- Ví dụ bảng: orders(order_id, user_id, amount, created_at)
SELECT
  SUM(CASE WHEN user_id IS NULL THEN 1 ELSE 0 END) AS missing_user_id,
  SUM(CASE WHEN amount  IS NULL THEN 1 ELSE 0 END) AS missing_amount,
  COUNT(*) AS total_rows
FROM orders;`}
            </pre>

            <h3>2) Phát hiện bản ghi trùng (duplicate) theo khóa nghiệp vụ</h3>
            <pre className={styles.codeBlock}>
              {`-- Duplicate theo order_id
SELECT order_id, COUNT(*) AS cnt
FROM orders
GROUP BY order_id
HAVING COUNT(*) > 1
ORDER BY cnt DESC;`}
            </pre>

            <h3>3) Window function: Top khách hàng theo doanh thu mỗi tháng</h3>
            <pre className={styles.codeBlock}>
              {`-- Doanh thu theo user theo tháng, xếp hạng
WITH revenue AS (
  SELECT
    DATE_TRUNC('month', created_at) AS month,
    user_id,
    SUM(amount) AS total_amount
  FROM orders
  GROUP BY 1, 2
),
ranked AS (
  SELECT
    *,
    DENSE_RANK() OVER (PARTITION BY month ORDER BY total_amount DESC) AS rnk
  FROM revenue
)
SELECT month, user_id, total_amount
FROM ranked
WHERE rnk <= 10
ORDER BY month, total_amount DESC;`}
            </pre>

            <h3>4) Build bảng Fact: doanh thu theo ngày (Gold layer)</h3>
            <pre className={styles.codeBlock}>
              {`-- Fact table daily summary
CREATE TABLE IF NOT EXISTS fact_daily_revenue AS
SELECT
  DATE(created_at) AS day,
  COUNT(DISTINCT order_id) AS orders,
  SUM(amount) AS revenue
FROM orders
GROUP BY 1;`}
            </pre>

            <h3>5) SCD Type 2 (mô hình lịch sử thay đổi) cho bảng customer</h3>
            <pre className={styles.codeBlock}>
              {`-- Ý tưởng: khi customer thay đổi (name/address...), đóng record cũ và mở record mới
-- customer_dim(customer_sk, customer_id, name, address, valid_from, valid_to, is_current)

-- Pseudo SQL (tùy DWH sẽ khác):
-- 1) Close record current
UPDATE customer_dim
SET valid_to = CURRENT_DATE - INTERVAL '1 day',
    is_current = FALSE
WHERE customer_id IN (SELECT customer_id FROM staging_customers)
  AND is_current = TRUE
  AND (name    <> (SELECT name FROM staging_customers sc WHERE sc.customer_id = customer_dim.customer_id)
    OR address <> (SELECT address FROM staging_customers sc WHERE sc.customer_id = customer_dim.customer_id));

-- 2) Insert new record
INSERT INTO customer_dim (customer_id, name, address, valid_from, valid_to, is_current)
SELECT
  customer_id, name, address,
  CURRENT_DATE AS valid_from,
  DATE '9999-12-31' AS valid_to,
  TRUE AS is_current
FROM staging_customers;`}
            </pre>

            <h3>6) Data Quality rule: kiểm tra outlier amount</h3>
            <pre className={styles.codeBlock}>
              {`-- Outlier đơn giản: amount âm hoặc quá lớn
SELECT *
FROM orders
WHERE amount < 0 OR amount > 1000000
ORDER BY created_at DESC;`}
            </pre>

            {/* PHẦN 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Công cụ & xu hướng của
              Data Engineering
            </h2>
            <p>
              Data Engineering phát triển mạnh nhờ Cloud, Big Data và nhu cầu xử
              lý real-time. Thay vì “1 database là đủ”, doanh nghiệp thường dùng
              kiến trúc nhiều tầng: ingest → storage → transform → serve.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Cloud Platforms</h5>
                <p>AWS / GCP / Azure cho lưu trữ, compute, data warehouse.</p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Big Data Tools</h5>
                <p>Spark, Kafka, Airflow, dbt, lakehouse patterns.</p>
              </div>
            </div>

            <h3>Orchestration, Monitoring và “vận hành dữ liệu”</h3>
            <p>
              Pipeline chạy được hôm nay chưa chắc chạy được ngày mai. Một hệ
              thống dữ liệu “đáng tin” luôn cần orchestration (lịch chạy,
              dependency), monitoring (độ trễ, lỗi), alerting (khi SLA bị vi
              phạm).
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Orchestration:</strong> quản lý DAG, retry, backfill,
                  dependency.
                </li>
                <li>
                  <strong>Observability:</strong> theo dõi freshness, volume,
                  schema drift.
                </li>
                <li>
                  <strong>Cost:</strong> partitioning, clustering, tránh scan
                  full table, lifecycle storage.
                </li>
              </ul>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Không có Data Engineering tốt, mọi phân tích dữ liệu chỉ là lý
                thuyết.
              </p>
            </figure>

            <h3>Kết luận</h3>
            <p>
              Data Engineering không chỉ là “ETL”. Nó là nghệ thuật xây hệ thống
              dữ liệu vừa <strong>đúng</strong>, vừa <strong>nhanh</strong>, vừa{" "}
              <strong>bền</strong>. Khi doanh nghiệp càng dữ liệu hóa, vai trò
              của DE càng trở thành yếu tố quyết định: insight có tin được
              không, ML có chạy ổn không, và quyết định có kịp thời không.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Nếu bạn mới bắt đầu:</strong> học SQL + modeling
                  (fact/dim) + pipeline batch trước.
                </li>
                <li>
                  <strong>Nếu bạn muốn lên level:</strong> thêm orchestration,
                  data quality, và streaming basics.
                </li>
                <li>
                  <strong>Portfolio gợi ý:</strong> build pipeline
                  Bronze/Silver/Gold + dashboard KPI + data tests.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
