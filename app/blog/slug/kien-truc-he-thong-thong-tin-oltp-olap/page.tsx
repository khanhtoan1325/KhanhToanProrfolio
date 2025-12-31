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
      "Phân tích kiến trúc hệ thống thông tin hiện đại, sự khác biệt giữa OLTP, OLAP và Data Warehouse — kèm truy vấn SQL mẫu và checklist thiết kế.",
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
              cáo. Nó bắt đầu từ cách dữ liệu được sinh ra, chuẩn hóa, lưu trữ,
              và được ‘phục vụ’ cho từng mục tiêu: vận hành hằng ngày hay phân
              tích chiến lược.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* 00 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>00</span> Vì sao phải tách OLTP và
              OLAP?
            </h2>
            <p>
              Nhiều đội ngũ ban đầu thường “tiện đâu làm đó”: lấy dữ liệu trực
              tiếp từ database vận hành để dựng dashboard. Khi số người dùng
              tăng, truy vấn phân tích nặng sẽ làm{" "}
              <strong>chậm hệ thống giao dịch</strong>, dẫn đến rủi ro mất đơn,
              lỗi thanh toán hoặc trải nghiệm xấu.
            </p>
            <p>
              Vì vậy, kiến trúc hiện đại thường tách rõ: <strong>OLTP</strong>{" "}
              để vận hành (write nhiều, transaction nhiều), và{" "}
              <strong>OLAP</strong> để phân tích (read nhiều, query phức tạp).
              Data Warehouse/Lakehouse đóng vai trò “kho lịch sử” giúp BI/ML
              chạy ổn định mà không ảnh hưởng OLTP.
            </p>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>Idea cốt lõi</div>
              <ul className={styles.glossyList}>
                <li>
                  <strong>OLTP</strong>: tối ưu ghi/đọc theo từng giao dịch nhỏ,
                  cần ACID và latency thấp.
                </li>
                <li>
                  <strong>OLAP</strong>: tối ưu truy vấn tổng hợp, join lớn,
                  scan nhiều dữ liệu, phục vụ phân tích.
                </li>
                <li>
                  <strong>DWH/Lakehouse</strong>: nơi chuẩn hóa và tổ chức dữ
                  liệu để ra quyết định.
                </li>
              </ul>
            </div>

            {/* 01 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Tổng quan kiến trúc hệ
              thống thông tin hiện đại
            </h2>
            <p>
              Hệ thống thông tin doanh nghiệp hiện đại thường được chia thành
              nhiều tầng. Mỗi tầng có nhiệm vụ riêng và tối ưu cho một loại
              workload:
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer A</span>
                <h4>Ứng dụng & Giao dịch (OLTP)</h4>
                <p>
                  Nơi dữ liệu sinh ra: đặt hàng, thanh toán, kho, CRM, logs…
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer B</span>
                <h4>Tích hợp dữ liệu (ETL/ELT/CDC)</h4>
                <p>
                  Batch/stream/CDC để đưa dữ liệu ra khỏi OLTP một cách an toàn.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer C</span>
                <h4>Lưu trữ phân tích (DWH/Lakehouse)</h4>
                <p>
                  Lưu dữ liệu lịch sử, tối ưu truy vấn phân tích, governance,
                  lineage.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer D</span>
                <h4>Semantic/BI/ML</h4>
                <p>KPI, dashboard, data mart, feature store, mô hình dự báo.</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>Nguyên tắc vàng</div>
              <ul className={styles.glossyList}>
                <li>
                  Dữ liệu vận hành phải <strong>ổn định và nhanh</strong>.
                </li>
                <li>
                  Dữ liệu phân tích phải <strong>đúng và truy vết được</strong>.
                </li>
                <li>Không “đè” query phân tích nặng lên DB giao dịch.</li>
              </ul>
            </div>

            {/* 02 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> OLTP – Trái tim vận hành
              doanh nghiệp
            </h2>
            <p>
              OLTP (Online Transaction Processing) xử lý giao dịch hàng ngày:
              tạo đơn, cập nhật tồn kho, ghi nhận thanh toán. Mục tiêu là{" "}
              <strong>latency thấp</strong>, <strong>tính nhất quán</strong> và{" "}
              <strong>độ tin cậy</strong> (ACID).
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>ERP</span>
                <p>Quản lý tài chính, nhân sự, mua hàng</p>
              </div>
              <div className={styles.toolItem}>
                <span>CRM</span>
                <p>Quản lý khách hàng, pipeline bán hàng</p>
              </div>
              <div className={styles.toolItem}>
                <span>POS</span>
                <p>Giao dịch bán lẻ, thanh toán tại quầy</p>
              </div>
            </div>

            <h3>Đặc điểm kỹ thuật của OLTP</h3>
            <ul className={styles.glossyList}>
              <li>
                <strong>Write-heavy:</strong> nhiều insert/update nhỏ, liên tục.
              </li>
              <li>
                <strong>Normalized schema:</strong> chuẩn hóa để tránh dư thừa,
                đảm bảo nhất quán.
              </li>
              <li>
                <strong>Index chọn lọc:</strong> tối ưu theo truy vấn giao dịch
                phổ biến.
              </li>
            </ul>

            <h3>SQL mẫu OLTP: tạo đơn và cập nhật tồn kho (transaction)</h3>
            <pre className={styles.codeBlock}>
              {`-- Pseudo SQL (Postgres/MySQL style)
BEGIN;

INSERT INTO orders(order_id, user_id, total_amount, status, created_at)
VALUES (10001, 88, 250000, 'PAID', NOW());

INSERT INTO order_items(order_id, product_id, qty, price)
VALUES
  (10001, 501, 1, 150000),
  (10001, 502, 1, 100000);

-- Giảm tồn kho
UPDATE inventory
SET stock = stock - 1
WHERE product_id = 501 AND stock >= 1;

UPDATE inventory
SET stock = stock - 1
WHERE product_id = 502 AND stock >= 1;

COMMIT;`}
            </pre>

            <p>
              Điểm quan trọng: OLTP cần transaction để đảm bảo{" "}
              <strong>không bán âm kho</strong> và trạng thái đơn hàng nhất
              quán.
            </p>

            {/* 03 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> OLAP & Data Warehouse –
              Bộ não phân tích chiến lược
            </h2>
            <p>
              OLAP (Online Analytical Processing) phục vụ câu hỏi kiểu: “Doanh
              thu theo khu vực 12 tháng qua?”, “Churn theo cohort?”, “Sản phẩm
              nào đóng góp 80% lợi nhuận?”. Những truy vấn này thường scan dữ
              liệu lớn, join nhiều bảng, dùng window function, aggregates…
            </p>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                OLTP vs OLAP (tóm tắt nhanh)
              </div>
              <ul className={styles.glossyList}>
                <li>
                  <strong>OLTP:</strong> nhiều giao dịch nhỏ, latency ms, dữ
                  liệu “hiện tại”.
                </li>
                <li>
                  <strong>OLAP:</strong> truy vấn dài hơn, scan lớn, dữ liệu
                  “lịch sử” + tổng hợp.
                </li>
                <li>
                  <strong>Schema:</strong> OLTP normalized; OLAP thường
                  star/snowflake.
                </li>
              </ul>
            </div>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 1</span>
                <h4>ETL / ELT / CDC</h4>
                <p>
                  Tách dữ liệu ra khỏi OLTP bằng batch hoặc CDC (change data
                  capture).
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 2</span>
                <h4>Data Warehouse / Lakehouse</h4>
                <p>
                  Lưu dữ liệu lịch sử, partitioning, clustering, quản trị
                  schema.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step 3</span>
                <h4>OLAP / Semantic Layer</h4>
                <p>
                  Data mart/KPI layer để BI query nhanh và “đúng định nghĩa”.
                </p>
              </div>
            </div>

            <h3>Mô hình dữ liệu phân tích: Star Schema (Fact & Dimension)</h3>
            <p>
              Data Warehouse thường dùng mô hình star: <strong>fact</strong> (sự
              kiện: orders, payments) và <strong>dimension</strong> (ngữ cảnh:
              customer, product, time). Mục tiêu là query aggregates nhanh, dễ
              hiểu cho BI.
            </p>

            <h3>SQL mẫu OLAP: Doanh thu theo tháng và top sản phẩm</h3>
            <pre className={styles.codeBlock}>
              {`-- Giả sử fact_order_items(day, product_id, revenue)
SELECT
  DATE_TRUNC('month', day) AS month,
  product_id,
  SUM(revenue) AS total_revenue
FROM fact_order_items
WHERE day >= CURRENT_DATE - INTERVAL '180 day'
GROUP BY 1, 2
ORDER BY month DESC, total_revenue DESC;`}
            </pre>

            <h3>SQL mẫu OLAP: Cohort retention theo tháng đăng ký</h3>
            <pre className={styles.codeBlock}>
              {`-- users(user_id, signup_date), events(user_id, event_date)
WITH cohort AS (
  SELECT
    user_id,
    DATE_TRUNC('month', signup_date) AS cohort_month
  FROM users
),
activity AS (
  SELECT
    c.cohort_month,
    DATE_TRUNC('month', e.event_date) AS active_month,
    COUNT(DISTINCT e.user_id) AS active_users
  FROM cohort c
  JOIN events e ON e.user_id = c.user_id
  GROUP BY 1, 2
)
SELECT
  cohort_month,
  active_month,
  active_users
FROM activity
ORDER BY cohort_month, active_month;`}
            </pre>

            <p>
              Đây là kiểu truy vấn “đặc sản” của OLAP: join + group +
              time-bucketing. Đưa chạy ở OLTP sẽ rất dễ “nghẹt thở”.
            </p>

            {/* 04 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Từ dữ liệu đến quyết
              định: BI, Advanced Analytics và AI
            </h2>
            <p>
              Khi OLTP và OLAP được thiết kế đúng, doanh nghiệp có thể biến dữ
              liệu vận hành thành insight chiến lược: theo dõi KPI, phát hiện
              bất thường, dự báo nhu cầu, tối ưu tồn kho, cá nhân hóa trải
              nghiệm.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Business Intelligence</h5>
                <p>
                  Dashboard, báo cáo quản trị, metric definitions, drill-down.
                </p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Advanced Analytics</h5>
                <p>
                  Dự báo, Data Science, AI/ML, feature engineering,
                  experimentation.
                </p>
              </div>
            </div>

            <h3>Data Quality & Governance: thứ khiến “dashboard đáng tin”</h3>
            <p>
              Một kiến trúc đẹp trên giấy sẽ vô nghĩa nếu dữ liệu sai. Tối thiểu
              bạn cần: rule kiểm tra (missing/duplicate/outlier), schema
              versioning, lineage (dữ liệu đến từ đâu), và SLA (bao lâu cập
              nhật).
            </p>

            <h3>SQL mẫu: kiểm tra duplicate và missing (data quality nhanh)</h3>
            <pre className={styles.codeBlock}>
              {`-- Duplicate theo business key
SELECT order_id, COUNT(*) AS cnt
FROM raw_orders
GROUP BY order_id
HAVING COUNT(*) > 1;

-- Missing critical fields
SELECT
  SUM(CASE WHEN user_id IS NULL THEN 1 ELSE 0 END) AS missing_user_id,
  SUM(CASE WHEN total_amount IS NULL THEN 1 ELSE 0 END) AS missing_total_amount,
  COUNT(*) AS total_rows
FROM raw_orders;`}
            </pre>

            <h3>SQL mẫu: tối ưu query bằng partition pruning</h3>
            <pre className={styles.codeBlock}>
              {`-- Chỉ quét partition 30 ngày gần nhất (giảm chi phí/latency)
SELECT
  day,
  SUM(revenue) AS revenue
FROM fact_daily_revenue
WHERE day >= CURRENT_DATE - INTERVAL '30 day'
GROUP BY day
ORDER BY day;`}
            </pre>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                Checklist thiết kế kiến trúc (thực chiến)
              </div>
              <ul className={styles.glossyList}>
                <li>
                  <strong>1)</strong> Tách OLTP và OLAP; không query phân tích
                  nặng lên DB giao dịch.
                </li>
                <li>
                  <strong>2)</strong> Chọn chiến lược ingest: batch / CDC /
                  streaming tùy SLA.
                </li>
                <li>
                  <strong>3)</strong> Thiết kế DWH theo fact/dim; thống nhất
                  “định nghĩa KPI”.
                </li>
                <li>
                  <strong>4)</strong> Data quality tests + monitoring
                  freshness/volume.
                </li>
                <li>
                  <strong>5)</strong> Bảo mật & phân quyền: PII masking,
                  row-level security nếu cần.
                </li>
              </ul>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Kiến trúc dữ liệu tốt giúp doanh nghiệp nhìn thấy tương lai từ
                dữ liệu quá khứ — và ra quyết định dựa trên sự thật, không phải
                cảm tính.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
