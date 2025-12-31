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
      "Phát triển ứng dụng Mobile đa nền tảng với React Native (chuyên sâu, thực chiến)",
    category: "Mobile App",
    date: "12 Tháng 12, 2025",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
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

          <div className={styles.authorMeta}>
            <div className={styles.avatar}>RN</div>
            <div>
              <strong>Ban biên tập Mobile</strong>
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
              “React Native giúp các Startup rút ngắn thời gian ra mắt sản phẩm
              bằng cách dùng chung một codebase cho iOS và Android — nhưng điều
              làm nên sự khác biệt là: bạn phải biết lúc nào nên dùng, và triển
              khai theo kiến trúc đúng để không ‘vỡ’ khi app lớn lên.”
            </p>
          </section>

          <div className={styles.richText}>
            {/* PHẦN 0 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>00</span> Bài toán thật: Khi nào
              React Native là lựa chọn “đáng tiền”?
            </h2>
            <p>
              Trước khi nói về kỹ thuật, hãy nói về{" "}
              <strong>quyết định sản phẩm</strong>. React Native mạnh nhất khi
              bạn cần: ra MVP nhanh, đội ngũ JS/React sẵn có, và app chủ yếu là
              UI + API + dữ liệu. Nếu app của bạn là “hardcore native” (game 3D,
              xử lý video nặng, AR/VR…), native hoặc engine chuyên dụng thường
              hợp lý hơn.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Hợp với React Native:</strong> thương mại điện tử, app
                  nội dung, booking, fintech UI-heavy, social feed,
                  admin/dashboard mobile.
                </li>
                <li>
                  <strong>Cân nhắc kỹ:</strong> app yêu cầu performance cực cao,
                  animation phức tạp mức game, hoặc phụ thuộc SDK native hiếm.
                </li>
                <li>
                  <strong>Chìa khóa thành công:</strong> chọn đúng stack (Expo
                  vs Bare), kiến trúc rõ ràng, tối ưu performance từ sớm.
                </li>
              </ul>
            </div>

            {/* PHẦN 1 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>01</span> React Native là gì?
              (Hiểu đúng để dùng đúng)
            </h2>
            <p>
              React Native là framework do Meta phát triển, cho phép xây dựng
              ứng dụng Mobile bằng JavaScript/TypeScript và React. Điểm “ăn
              tiền” là: app không chạy trong WebView — UI được render thành{" "}
              <strong>native view</strong> (UIButton/TextView…) nên cảm giác sử
              dụng “rất app”.
            </p>

            <p>
              Về bản chất, RN là cầu nối giữa <strong>JS runtime</strong> và{" "}
              <strong>native platform</strong>. Bạn viết UI bằng React, RN
              “dịch” nó thành native components. Ngày nay, RN ngày càng tiến về
              mô hình giao tiếp hiệu quả hơn (New Architecture) để giảm
              bottleneck khi app phức tạp.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Code một lần:</strong> Chạy trên iOS & Android (chia
                  sẻ phần lớn logic/UI).
                </li>
                <li>
                  <strong>UI Native:</strong> Không phải WebView, cảm giác “đúng
                  mobile”.
                </li>
                <li>
                  <strong>Hot Reload/Fast Refresh:</strong> tăng tốc vòng lặp
                  phát triển.
                </li>
                <li>
                  <strong>Hệ sinh thái:</strong> navigation, state, networking,
                  animation, build pipeline…
                </li>
              </ul>
            </div>

            <h3>React Native không “free” hoàn toàn</h3>
            <p>
              Bạn tiết kiệm thời gian/chi phí ở giai đoạn đầu, nhưng cần quản
              trị tốt khi sản phẩm lớn: phân tách module, quản lý state, tối ưu
              list/image, build/release chuẩn. Nếu không, app sẽ “chậm dần” theo
              thời gian và dev experience sẽ xuống.
            </p>

            {/* PHẦN 2 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>02</span> Vì sao Startup chọn
              React Native? (Nhưng chọn thế nào cho đúng)
            </h2>
            <p>
              Với Startup và MVP, tốc độ và chi phí là yếu tố sống còn. React
              Native cho phép đội ngũ nhỏ build đa nền tảng mà không cần 2 team
              native riêng. Tuy nhiên, “chọn RN” mới chỉ là bước 1 — bước 2 là
              chọn <strong>Expo</strong> hay <strong>Bare React Native</strong>.
            </p>

            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>JavaScript/TS</span>
                <p>Dễ tuyển, cộng đồng lớn, tooling tốt</p>
              </div>
              <div className={styles.toolItem}>
                <span>Expo</span>
                <p>Setup nhanh, build dễ, phù hợp MVP</p>
              </div>
              <div className={styles.toolItem}>
                <span>Bare RN</span>
                <p>Toàn quyền native config, phù hợp app đặc thù</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Chọn Expo khi:</strong> bạn muốn tốc độ ra sản phẩm,
                  ít đụng native, cần OTA updates, build pipeline đơn giản.
                </li>
                <li>
                  <strong>Chọn Bare khi:</strong> bạn cần tích hợp SDK native
                  sâu, custom build, hoặc yêu cầu native module “lạ”.
                </li>
                <li>
                  <strong>Gợi ý thực chiến:</strong> MVP → Expo. Khi scale và
                  cần native sâu → cân nhắc “eject” hoặc hybrid.
                </li>
              </ul>
            </div>

            <h3>Checklist “đúng chất MVP” với RN</h3>
            <ul className={styles.glossyList}>
              <li>
                <strong>1)</strong> Auth + API data + caching dữ liệu
              </li>
              <li>
                <strong>2)</strong> Navigation mượt + loading state rõ ràng
              </li>
              <li>
                <strong>3)</strong> Crash-free + tracking lỗi tối thiểu
              </li>
              <li>
                <strong>4)</strong> Release sớm, đo retention/feedback rồi tối
                ưu
              </li>
            </ul>

            {/* PHẦN 3 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>03</span> Kiến trúc ứng dụng React
              Native (để app lớn không “nát”)
            </h2>
            <p>
              Khi app vượt qua MVP, thứ khiến team “đau” không phải là viết UI —
              mà là <strong>tổ chức code + quản lý state + data flow</strong>.
              Kiến trúc tốt giúp: code dễ đọc, dễ test, dễ thay đổi và scale
              team.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer 1</span>
                <h4>UI & Components</h4>
                <p>
                  Component tái sử dụng, design system, kiểm soát
                  spacing/typography, tránh “mỗi màn hình một kiểu”.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer 2</span>
                <h4>State & Data</h4>
                <p>
                  Local state (UI), Server state (API) tách rõ. Ưu tiên React
                  Query cho data-fetch/caching, Zustand/Redux Toolkit cho app
                  state phức tạp.
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Layer 3</span>
                <h4>Domain & Services</h4>
                <p>
                  Tách nghiệp vụ ra khỏi UI: services (api), usecases,
                  validators, mappers. UI “chỉ hiển thị”, không chứa logic
                  business nặng.
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Rule quan trọng:</strong> phân biệt{" "}
                  <em>Server State</em> vs <em>Client/UI State</em>. Nếu bạn
                  dùng Redux để chứa dữ liệu API mọi nơi, app sẽ phình và khó
                  debug.
                </li>
                <li>
                  <strong>Offline-first:</strong> nếu sản phẩm cần offline, hãy
                  thiết kế caching + persistence sớm (ví dụ: lưu token, queue
                  request, sync khi online).
                </li>
                <li>
                  <strong>Navigation:</strong> coi routing là “xương sống”
                  (stack/tab + deep link) để tránh hack.
                </li>
              </ul>
            </div>

            <h3>Những “mảnh ghép” thực chiến bạn sẽ dùng nhiều</h3>
            <div className={styles.toolGrid}>
              <div className={styles.toolItem}>
                <span>Navigation</span>
                <p>Stack/Tab, deep linking, guarded routes</p>
              </div>
              <div className={styles.toolItem}>
                <span>Networking</span>
                <p>Axios/fetch, interceptor, retry, timeout</p>
              </div>
              <div className={styles.toolItem}>
                <span>Server State</span>
                <p>Caching, pagination, optimistic update</p>
              </div>
            </div>

            {/* PHẦN 3.5: Performance */}
            <h2 className={styles.heading}>
              <span className={styles.number}>04</span> Performance & UX (điểm
              quyết định app “xịn” hay “lag”)
            </h2>
            <p>
              React Native có thể rất mượt — nhưng bạn phải tôn trọng những
              nguyên tắc performance cơ bản. 80% vấn đề đến từ{" "}
              <strong>list</strong>, <strong>image</strong>, và{" "}
              <strong>re-render</strong>.
            </p>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>List:</strong> dùng FlatList/SectionList đúng cách
                  (keyExtractor, getItemLayout nếu có thể), tránh render item
                  quá nặng.
                </li>
                <li>
                  <strong>Image:</strong> tối ưu kích thước, lazy load, cache;
                  tránh ảnh quá lớn.
                </li>
                <li>
                  <strong>Re-render:</strong> memo hóa component, tách component
                  nhỏ, đừng truyền object/func mới liên tục.
                </li>
                <li>
                  <strong>Animation:</strong> ưu tiên animation library tối ưu
                  (chạy mượt), tránh setState theo từng frame.
                </li>
              </ul>
            </div>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Người dùng không nhớ bạn dùng framework gì — họ chỉ nhớ app có
                mượt hay không.
              </p>
            </figure>

            {/* PHẦN 4 */}
            <h2 className={styles.heading}>
              <span className={styles.number}>05</span> Tương lai của React
              Native: New Architecture (Fabric & Turbo Modules)
            </h2>
            <p>
              React Native đang tiến gần hơn tới hiệu năng native nhờ New
              Architecture. Hiểu đơn giản: mục tiêu là giảm overhead giao tiếp
              giữa JS và native, giúp UI phản hồi nhanh hơn, và tích hợp native
              module hiệu quả hơn.
            </p>

            <div className={styles.mlBox}>
              <div className={styles.mlCategory}>
                <h5>Fabric</h5>
                <p>
                  Cải thiện pipeline render UI, cập nhật layout/interaction mượt
                  hơn, phù hợp app có nhiều UI động.
                </p>
              </div>
              <div className={styles.mlCategory}>
                <h5>Turbo Modules</h5>
                <p>
                  Tối ưu giao tiếp JS ↔ Native, load module hiệu quả hơn, giảm
                  bottleneck khi app lớn.
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Điểm quan trọng:</strong> New Architecture không “tự
                  nhiên” làm app bạn nhanh 2 lần. Nó tạo nền tảng tốt hơn để bạn
                  tối ưu và scale.
                </li>
                <li>
                  <strong>Lời khuyên:</strong> ưu tiên tối ưu
                  list/image/re-render trước — đó là “low-hanging fruit”.
                </li>
              </ul>
            </div>

            {/* PHẦN 5: Testing + Release */}
            <h2 className={styles.heading}>
              <span className={styles.number}>06</span> Testing & Release (để
              sản phẩm chạy bền, không hên xui)
            </h2>
            <p>
              Khi bạn bắt đầu có người dùng thật, “đúng tính năng” chưa đủ — bạn
              cần <strong>ổn định</strong>. Một pipeline tối thiểu nên có: unit
              test cho logic, integration test cho flow quan trọng, và quy trình
              release rõ ràng.
            </p>

            <div className={styles.roadmapTimeline}>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Test 1</span>
                <h4>Unit Test</h4>
                <p>
                  Test utils, validators, mappers, business logic (nhanh & rẻ).
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Test 2</span>
                <h4>Integration / E2E</h4>
                <p>
                  Test các flow chính: login → list → detail → checkout (ít
                  nhưng “đáng tiền”).
                </p>
              </div>
              <div className={styles.timelinePoint}>
                <span className={styles.pointTag}>Release</span>
                <h4>Build & Deploy</h4>
                <p>
                  Versioning, changelog, rollout theo % người dùng, theo dõi
                  crash.
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <ul className={styles.glossyList}>
                <li>
                  <strong>Release tip:</strong> luôn có staging build để QA, và
                  “freeze scope” trước khi phát hành.
                </li>
                <li>
                  <strong>Observability:</strong> tối thiểu cần crash tracking +
                  logging lỗi network.
                </li>
                <li>
                  <strong>OTA updates:</strong> nếu dùng Expo, bạn có thể cập
                  nhật nhanh (nhưng phải quản trị version cẩn thận).
                </li>
              </ul>
            </div>

            {/* KẾT */}
            <h2 className={styles.heading}>
              <span className={styles.number}>07</span> Kết luận: React Native
              “đáng” khi bạn làm đúng bài
            </h2>
            <p>
              React Native không phải “đường tắt” thần kỳ. Nó là một lựa chọn
              chiến lược: giúp bạn đi nhanh ở giai đoạn đầu, và vẫn có thể đi xa
              nếu bạn đầu tư kiến trúc, performance và release process ngay từ
              khi app bắt đầu lớn.
            </p>

            <figure className={styles.modernQuote}>
              <div className={styles.quoteLine} />
              <p>
                Một codebase tốt không chỉ giúp chạy đa nền tảng — nó giúp đội
                ngũ phát triển đi xa hơn, nhanh hơn và bền hơn.
              </p>
            </figure>
          </div>
        </article>
      </main>
    </div>
  );
}
