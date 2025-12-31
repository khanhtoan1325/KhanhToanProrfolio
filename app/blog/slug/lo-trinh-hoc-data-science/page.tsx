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
      "Lộ trình học Data Science cho người mới bắt đầu (chuyên sâu, có dự án)",
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
          {/* LEAD */}
          <section className={styles.leadCard}>
            <p>
              “Dữ liệu là nguồn tài nguyên thô, nhưng chỉ những ai có lộ trình
              đúng đắn mới có thể tinh chế nó thành vàng đen của kỷ nguyên số.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* INTRO */}
            <h2 className={styles.heading}>
              <span className={styles.number}>00</span> Trước khi bắt đầu: Học
              Data Science để làm gì?
            </h2>
            <p>
              “Data Science” không phải là một môn học đơn lẻ mà là{" "}
              <strong>tập hợp kỹ năng</strong>: hiểu bài toán (business), xử lý
              dữ liệu (engineering), phân tích (analytics), xây mô hình (ML), và
              kể câu chuyện thuyết phục (communication). Nếu bạn học thiếu định
              hướng, rất dễ rơi vào trạng thái “biết nhiều thứ lặt vặt nhưng
              không làm được dự án”.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Mục tiêu sau 8–12 tuần (người mới):</strong> làm được
                  2–3 dự án nhỏ (EDA + mô hình đơn giản), viết 1 bài blog giải
                  thích rõ ràng, có repo GitHub gọn gàng.
                </li>
                <li>
                  <strong>Mục tiêu sau 4–6 tháng:</strong> làm được dự án
                  end-to-end (thu thập → làm sạch → mô hình → báo cáo), hiểu căn
                  bản ML và “đọc” được paper/tutorial.
                </li>
                <li>
                  <strong>Mục tiêu sau 9–12 tháng:</strong> có portfolio đủ mạnh
                  để ứng tuyển (Data Analyst/Junior DS), nắm MLOps căn bản
                  (deploy, monitoring) nếu đi hướng DS/ML Engineer.
                </li>
              </ul>
            </div>

            {/* TOC */}
            <h3>Trong bài này có gì?</h3>
            <ul>
              <li>Nền tảng Toán & Thống kê: học đúng cái “đủ dùng”</li>
              <li>
                Python + SQL: tư duy dữ liệu thay vì tư duy “code cho vui”
              </li>
              <li>EDA & trực quan hóa: đặt câu hỏi và trả lời bằng dữ liệu</li>
              <li>
                Machine Learning: học theo “họ thuật toán” + quy trình chuẩn
              </li>
              <li>Dự án gợi ý theo cấp độ + checklist + tài nguyên học</li>
              <li>Sai lầm phổ biến (và cách tránh)</li>
            </ul>

            {/* STAGE 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> Nền tảng Toán & Thống kê
              (đủ để làm thật)
            </h2>
            <p>
              Học Data Science mà không có thống kê giống như xây nhà không
              móng. Nhưng cũng đừng “kẹt” ở lý thuyết quá lâu — mục tiêu là hiểu
              để <strong>ra quyết định</strong> khi phân tích dữ liệu.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Thống kê mô tả:</strong> Mean/Median/Mode, Variance,
                  Standard Deviation, phân phối, skewness/kurtosis (biết để hiểu
                  “lệch” và “đuôi dày”).
                </li>
                <li>
                  <strong>Xác suất:</strong> Bayes (trực giác cập nhật niềm
                  tin), Central Limit Theorem (tại sao nhiều thứ “gần chuẩn”),
                  law of large numbers (tại sao cần đủ mẫu).
                </li>
                <li>
                  <strong>Suy luận thống kê:</strong> p-value (đừng thần thánh
                  hóa), confidence interval, power, A/B testing (rất thực
                  chiến).
                </li>
                <li>
                  <strong>Đại số tuyến tính:</strong> vector/matrix, dot
                  product, eigen (đủ để hiểu PCA, embedding), gradient intuition
                  (đủ để hiểu tối ưu).
                </li>
              </ul>
            </div>

            <h3>Học thế nào để “đỡ ngợp”?</h3>
            <p>
              Thay vì học tràn lan, hãy học theo <strong>bài toán</strong>. Ví
              dụ: bạn muốn làm A/B testing → tập trung vào hypothesis testing,
              confidence interval, power. Bạn muốn hiểu PCA → tập trung vào
              variance, covariance matrix, eigen decomposition (mức trực giác).
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Nếu bạn giải thích được “vì sao dùng median thay vì mean” trong
                dữ liệu có outlier, bạn đã đi đúng hướng hơn rất nhiều người học
                lan man.
              </p>
            </figure>

            {/* STAGE 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Lập trình Python thực
              chiến (tư duy dữ liệu)
            </h2>
            <p>
              Đừng học Python như lập trình viên phần mềm thuần túy. Hãy học nó
              như <strong>một dây chuyền xử lý dữ liệu</strong>: đọc dữ liệu →
              làm sạch → biến đổi → phân tích → mô hình → báo cáo.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Pandas</span>
                <p>DataFrame, groupby, merge, pivot, xử lý missing/outlier</p>
              </div>
              <div className={styles.toolItem}>
                <span>NumPy</span>
                <p>Vectorization, broadcasting, hiệu năng tính toán</p>
              </div>
              <div className={styles.toolItem}>
                <span>SQL</span>
                <p>SELECT, JOIN, window function, CTE, tối ưu truy vấn</p>
              </div>
            </div>

            <h3>Những kỹ năng Python bạn nên “đóng đinh”</h3>
            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Data cleaning:</strong> xử lý missing
                  (mean/median/impute/flag), chuẩn hóa kiểu dữ liệu, parsing
                  datetime, text cleaning cơ bản.
                </li>
                <li>
                  <strong>Reproducibility:</strong> seed, notebook sạch, tách
                  hàm, lưu config, đọc/ghi file (csv/parquet), logging tối
                  thiểu.
                </li>
                <li>
                  <strong>Debugging dữ liệu:</strong> assert, kiểm tra schema,
                  kiểm tra range, thống kê nhanh để phát hiện dữ liệu “bẩn”.
                </li>
              </ul>
            </div>

            <h3>Mini-project (1–2 ngày) để luyện “cơ bắp”</h3>
            <p>
              Chọn một bộ dữ liệu (ví dụ: ecommerce/marketing/giá nhà), rồi làm:
              <strong>data dictionary</strong> (mô tả từng cột) + pipeline làm
              sạch + 10 câu hỏi phân tích (EDA). Mục tiêu không phải đẹp, mà là{" "}
              <strong>đúng và có lý giải</strong>.
            </p>

            {/* STAGE 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Phân tích & Trực quan
              hóa (EDA) — nơi DS “thật sự bắt đầu”
            </h2>
            <p>
              EDA không chỉ là vẽ biểu đồ cho vui. EDA là quá trình:{" "}
              <strong>đặt giả thuyết → kiểm tra → tinh chỉnh</strong>. Một EDA
              tốt trả lời: dữ liệu có tin được không? có bias không? có mối quan
              hệ nào đáng chú ý?
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step A</span>
                <h4>Matplotlib / Seaborn / Plotly</h4>
                <p>
                  Histogram (phân phối), boxplot (outlier), scatter (tương
                  quan), heatmap (corr), time-series plot (xu hướng theo thời
                  gian).
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step B</span>
                <h4>Feature Engineering</h4>
                <p>
                  Encoding (one-hot/target), scaling, binning, log-transform,
                  tạo feature theo thời gian (day-of-week, rolling mean), tương
                  tác biến.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Step C</span>
                <h4>Chất lượng dữ liệu</h4>
                <p>
                  Duplicate, leakage, drift, missing pattern (MCAR/MAR/MNAR mức
                  trực giác), kiểm tra phân phối train/test.
                </p>
              </div>
            </div>

            <h3>Checklist EDA “chuẩn bài blog”</h3>
            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>1)</strong> Mô tả dataset: nguồn, số dòng/cột, ý nghĩa
                  từng cột
                </li>
                <li>
                  <strong>2)</strong> Missing & outlier: tỉ lệ, pattern, quyết
                  định xử lý và lý do
                </li>
                <li>
                  <strong>3)</strong> Phân phối biến mục tiêu: lệch không? có
                  cần log không?
                </li>
                <li>
                  <strong>4)</strong> Tương quan & insight: mối quan hệ nào hợp
                  lý / bất thường?
                </li>
                <li>
                  <strong>5)</strong> Rủi ro: bias, leakage, dữ liệu không đại
                  diện
                </li>
                <li>
                  <strong>6)</strong> Kết luận EDA: 3–5 insight “đáng tiền” +
                  hướng mô hình
                </li>
              </ul>
            </div>

            {/* STAGE 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Machine Learning: học
              theo quy trình, không học “thuật toán rời rạc”
            </h2>
            <p>
              ML là phần hấp dẫn nhất, nhưng cũng là nơi nhiều người “đứt gánh”
              vì học theo kiểu thuộc lòng thuật toán. Bạn nên học theo{" "}
              <strong>quy trình ML chuẩn</strong>: baseline → split → metric →
              model → tune → evaluate → explain.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Supervised Learning</h5>
                <p>
                  Linear/Logistic Regression (baseline), Decision Tree/Random
                  Forest, Gradient Boosting (XGBoost/LightGBM - khi đã vững).
                </p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Unsupervised Learning</h5>
                <p>
                  K-Means/Hierarchical, PCA/UMAP, anomaly detection (Isolation
                  Forest mức cơ bản).
                </p>
              </div>
            </div>

            <h3>Metric: chọn sai là hỏng cả dự án</h3>
            <p>
              Phân loại không cân bằng (fraud, churn…) → đừng chỉ nhìn accuracy,
              hãy xem precision/recall/F1, PR-AUC. Dự báo số (giá nhà…) →
              MAE/RMSE; nếu outlier nhiều, MAE thường “hiền” hơn RMSE. Nói cách
              khác: <strong>metric là “định nghĩa thành công”</strong>.
            </p>

            <h3>Pipeline gợi ý (thực chiến)</h3>
            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Baseline:</strong> đo nhanh bằng model đơn giản (mean
                  predictor / logistic regression)
                </li>
                <li>
                  <strong>Split đúng:</strong> time-series thì split theo thời
                  gian, không shuffle bừa
                </li>
                <li>
                  <strong>Preprocess trong pipeline:</strong> tránh leakage (fit
                  trên train, transform cho test)
                </li>
                <li>
                  <strong>Cross-validation:</strong> đánh giá ổn định, tránh
                  overfit theo một split
                </li>
                <li>
                  <strong>Explain:</strong> feature importance, partial
                  dependence mức cơ bản
                </li>
              </ul>
            </div>

            {/* PROJECTS */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Dự án theo cấp độ (để
              portfolio “ra hình”)
            </h2>
            <p>
              Blog tâm huyết thường “ăn điểm” ở phần dự án: có dữ liệu thật, có
              quyết định, có trade-off. Dưới đây là gợi ý theo 3 mức:
            </p>

            <h3>Level 1 (1–2 tuần): EDA + story</h3>
            <ul>
              <li>
                Phân tích hành vi khách hàng: top sản phẩm, cohort retention cơ
                bản
              </li>
              <li>Giá nhà: EDA + baseline regression + giải thích feature</li>
              <li>
                Sentiment đơn giản: làm sạch text + TF-IDF + logistic regression
              </li>
            </ul>

            <h3>Level 2 (2–4 tuần): ML + pipeline</h3>
            <ul>
              <li>
                Dự đoán churn: xử lý class imbalance + metric + threshold tuning
              </li>
              <li>
                Forecast đơn giản: time-based split + baseline + feature theo
                thời gian
              </li>
              <li>
                Phân khúc khách hàng: K-Means + PCA/UMAP + giải thích segment
              </li>
            </ul>

            <h3>Level 3 (4–8 tuần): end-to-end</h3>
            <ul>
              <li>
                Thu thập dữ liệu (API/web scrape) → làm sạch → model →
                dashboard/report
              </li>
              <li>
                Deploy model đơn giản (FastAPI) + lưu log dự đoán để theo dõi
                drift
              </li>
            </ul>

            {/* COMMON MISTAKES */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> Sai lầm thường gặp (đọc
              để khỏi mất 3 tháng)
            </h2>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Học quá nhiều thuật toán trước khi làm dự án:</strong>{" "}
                  hãy làm 1 dự án nhỏ với baseline trước, rồi mới nâng cấp
                  model.
                </li>
                <li>
                  <strong>Data leakage:</strong> chuẩn hóa/encoding trên toàn bộ
                  dataset trước khi split là lỗi kinh điển.
                </li>
                <li>
                  <strong>Chạy theo accuracy:</strong> metric phải phù hợp bài
                  toán; luôn nhìn confusion matrix/PR curve.
                </li>
                <li>
                  <strong>Notebook rối:</strong> blog hay cần notebook “kể
                  chuyện” — có headings, kết luận từng phần.
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <h2 className={styles.heading}>
              <span className={styles.number}>07</span> Tài nguyên học (gọn,
              chất, dễ đi đường dài)
            </h2>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Thống kê</span>
                <p>Khan Academy / StatQuest (trực giác rất tốt)</p>
              </div>
              <div className={styles.toolItem}>
                <span>Python</span>
                <p>Pandas docs + bài tập làm sạch dữ liệu (kèm notebook)</p>
              </div>
              <div className={styles.toolItem}>
                <span>ML</span>
                <p>Scikit-learn tutorials + dự án Kaggle (chọn lọc)</p>
              </div>
            </div>

            {/* CTA */}
            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Hành trình vạn dặm bắt đầu từ một dòng code sạch — và một dự án
                nhỏ làm tới nơi tới chốn.
              </p>
            </figure>

            <h3>Kết luận</h3>
            <p>
              Nếu bạn là người mới, hãy nhớ:{" "}
              <strong>
                lộ trình tốt = (nền tảng vừa đủ) + (thực hành liên tục) + (viết
                lại như một câu chuyện)
              </strong>
              . Chỉ cần 2–3 dự án nhỏ được trình bày tốt, bạn sẽ vượt rất xa
              phần đông “học mãi không ra sản phẩm”.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Bước tiếp theo:</strong> chọn 1 dataset, đặt 10 câu
                  hỏi, làm EDA 1 tuần
                </li>
                <li>
                  <strong>Sau đó:</strong> baseline model + viết blog giải thích
                  quyết định xử lý dữ liệu
                </li>
                <li>
                  <strong>Cuối cùng:</strong> refine, thêm pipeline, thêm phần
                  “sai lầm & bài học”
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
