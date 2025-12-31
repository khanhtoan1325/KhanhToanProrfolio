"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Hiệu ứng Parallax nhẹ cho phần Header khi cuộn
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const post = {
    title: "Next.js 15 và tương lai của phát triển Web",
    description:
      "Khám phá các tính năng mới như React Server Components, Streaming UI và chiến lược caching để tối ưu trải nghiệm người dùng.",
    category: "Web Development",
    date: "02 Tháng 01, 2026",
    readTime: "9 phút đọc",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2000&auto=format&fit=crop",
  };

  return (
    <div className={styles.container}>
      {/* Thanh tiến trình chạy ở sát mép trên màn hình */}
      <motion.div className={styles.progress} style={{ scaleX }} />

      {/* Floating Back Button */}
      <nav className={styles.nav}>
        <Link href="/blog" className={styles.backBtn}>
          <div className={styles.backIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>Quay lại</span>
        </Link>
      </nav>

      <header className={styles.heroSection}>
        <motion.div
          style={{ y: headerY, opacity }}
          className={styles.heroContent}
        >
          <span className={styles.badge}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <div className={styles.authorGroup}>
              <div className={styles.avatar}>N</div>
              <div>
                <strong>{post.author}</strong>
                <p>
                  {post.date} • {post.readTime}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.imageFrame}>
          <img src={post.image} alt={post.title} className={styles.heroImage} />
          <div className={styles.imageOverlay} />
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          {/* Sidebar - Mục lục */}
          <aside className={styles.sidebar}>
            <div className={styles.stickySidebar}>
              <h4 className={styles.sidebarTitle}>Nội dung bài viết</h4>
              <ul className={styles.tocList}>
                <li>
                  <a href="#rsc">01. Server Components</a>
                </li>
                <li>
                  <a href="#streaming">02. Streaming UI</a>
                </li>
                <li>
                  <a href="#ux">03. Trải nghiệm UX</a>
                </li>
                <li>
                  <a href="#future">04. Tầm nhìn tương lai</a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Article Body */}
          <article className={styles.article}>
            <p className={styles.lead}>
              <span className={styles.dropCap}>N</span>ext.js 15 không chỉ là
              một bản nâng cấp framework. Nó là sự “chốt hạ” của hướng đi{" "}
              <strong>Server-first</strong>: đưa render, fetch dữ liệu, caching
              và tối ưu hiệu năng về phía server để giảm JavaScript trên client,
              tăng tốc TTI (Time to Interactive) và cải thiện Core Web Vitals —
              ngay cả trên thiết bị yếu hoặc mạng chập chờn.
            </p>

            <p>
              Nếu trước đây web thường “client-heavy” (đẩy nhiều logic lên trình
              duyệt), thì Next.js 15 khuyến khích bạn đưa phần lớn công việc về
              server và chỉ để client làm những thứ thật sự cần tương tác. Và đó
              là lý do nó không chỉ thay API — nó thay cách bạn{" "}
              <strong>tư duy kiến trúc ứng dụng</strong>.
            </p>

            <div className={styles.infoCard}>
              <div className={styles.cardGlow} />
              <h4>🎯 Bài viết này sẽ giúp bạn</h4>
              <ul>
                <li>
                  Hiểu Next.js 15 mạnh ở đâu: RSC, streaming, caching & server
                  workflow.
                </li>
                <li>
                  Biết cách áp dụng “server-first” vào sản phẩm thực tế (không
                  lý thuyết suông).
                </li>
                <li>
                  Tránh các lỗi phổ biến: hydration mismatch, cache sai dẫn đến
                  stale data, lạm dụng client component.
                </li>
              </ul>
            </div>

            <h3 className={styles.sectionTitle}>
              Vì sao Next.js 15 quan trọng ở thời điểm này?
            </h3>
            <p>
              Web hiện đại không còn là “tải HTML rồi JS làm hết”. Người dùng kỳ
              vọng trang mở ra nhanh, thấy nội dung sớm (LCP), tương tác mượt
              (INP) và ổn định bố cục (CLS). Muốn vậy, ta cần:
            </p>
            <ul>
              <li>
                <strong>Giảm JS gửi xuống client</strong> (ít parse/execute
                hơn).
              </li>
              <li>
                <strong>Streaming UI</strong> để hiển thị theo từng phần thay vì
                chờ tất cả.
              </li>
              <li>
                <strong>Caching thông minh</strong>: nhanh nhưng không “sai dữ
                liệu”.
              </li>
            </ul>

            <blockquote className={styles.modernQuote}>
              “Hiệu năng không chỉ là một tính năng. Nó là nền tảng của trải
              nghiệm người dùng, SEO và cả conversion.”
            </blockquote>

            {/* ====================== SECTION 1 ====================== */}
            <h2 id="rsc" className={styles.sectionTitle}>
              1. React Server Components (RSC) — “trái tim” của Server-first
            </h2>

            <p>
              RSC giúp bạn render component ở server và gửi về client{" "}
              <strong>kết quả đã sẵn sàng</strong>, thay vì gửi cả “đống JS” để
              trình duyệt tự render. Điểm mấu chốt: Server Components{" "}
              <strong>không dùng state/effect</strong> như client, nhưng cực
              mạnh cho việc hiển thị dữ liệu, bảo mật và tối ưu tải trang.
            </p>

            <ul>
              <li>Fetch data trực tiếp (DB/API) tại server.</li>
              <li>
                Giữ bí mật (API keys, tokens) an toàn — không lộ ra client.
              </li>
              <li>
                Giảm bundle size: client chỉ nhận JS cho phần cần tương tác.
              </li>
            </ul>

            <div className={styles.infoCard}>
              <div className={styles.cardGlow} />
              <h4>💡 Khi nào bạn “được lợi” nhất từ RSC?</h4>
              <ul>
                <li>
                  Trang nhiều dữ liệu hiển thị: blog, product list, landing,
                  dashboard đọc-only.
                </li>
                <li>
                  Bạn muốn SSR tốt nhưng vẫn giữ UX hiện đại ở những chỗ cần
                  tương tác.
                </li>
                <li>
                  Bạn muốn tách rõ: <strong>UI hiển thị (server)</strong> vs{" "}
                  <strong>UI tương tác (client)</strong>.
                </li>
              </ul>
            </div>

            <h3>Ví dụ tư duy đúng: “Server hiển thị – Client tương tác”</h3>
            <p>
              Render danh sách sản phẩm ở server (nhanh + SEO), giữ phần lọc/sắp
              xếp tương tác là client component. Bạn giảm JS đáng kể, vẫn giữ UX
              như SPA.
            </p>

            {/* NOTE: className codeBlock dùng nếu bạn có CSS. Nếu chưa có, cứ để nguyên vẫn chạy. */}
            <pre className={(styles as any).codeBlock}>
              {`// app/products/page.tsx (Server Component)
              import ProductsGrid from "./ProductsGrid"; // server
              import Filters from "./Filters"; // client

              export default async function ProductsPage() {
                const products = await fetch("https://api.example.com/products", {
                  cache: "force-cache",
                }).then((r) => r.json());

                return (
                  <>
                    <Filters />
                    <ProductsGrid products={products} />
                  </>
                );
              }

              // app/products/Filters.tsx
              "use client";
              import { useState } from "react";
              export default function Filters() {
                const [q, setQ] = useState("");
                return (
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search..."
                  />
                );
              }`}
            </pre>

            <h3>Trade-off (đọc để khỏi “vỡ mộng”)</h3>
            <ul>
              <li>
                Bạn cần tổ chức code rõ ràng: đâu là server, đâu là client.
              </li>
              <li>
                Thư viện client-only (phụ thuộc window/document) phải đặt đúng
                component client.
              </li>
              <li>
                Debug sẽ “chia đôi”: lỗi server runtime và lỗi client runtime.
              </li>
            </ul>

            {/* ====================== SECTION 2 ====================== */}
            <h2 id="streaming" className={styles.sectionTitle}>
              2. Streaming & Partial Rendering — người dùng thấy “nhanh” trước
              khi thật sự xong
            </h2>

            <p>
              Con người cảm nhận tốc độ không chỉ từ thời gian tải, mà từ{" "}
              <strong>thời gian thấy nội dung hữu ích đầu tiên</strong>.
              Streaming cho phép bạn gửi HTML theo từng “đợt”: phần nhanh
              (header, skeleton) xuất hiện sớm, phần nặng (danh sách, gợi ý,
              đánh giá…) đi sau.
            </p>

            <div className={styles.infoCard}>
              <div className={styles.cardGlow} />
              <h4>⚡ Streaming giải quyết vấn đề gì?</h4>
              <ul>
                <li>Tránh “màn hình trắng” chờ dữ liệu.</li>
                <li>Hiển thị nội dung sớm giúp người dùng yên tâm hơn.</li>
                <li>Tránh blocking: phần nặng không chặn toàn bộ UI.</li>
              </ul>
            </div>

            <h3>Ví dụ thực tế: trang bán hàng</h3>
            <p>
              Người dùng muốn thấy banner/danh mục ngay. Danh sách sản phẩm có
              thể stream sau; phần đánh giá/related items stream sau nữa.
            </p>

            <pre className={(styles as any).codeBlock}>
              {`// app/page.tsx
                  import { Suspense } from "react";
                  import Hero from "./Hero";
                  import ProductList from "./ProductList"; // async server comp
                  import Recommendations from "./Recommendations"; // async server comp

                  export default function Home() {
                    return (
                      <>
                        <Hero />
                        <Suspense fallback={<div>Đang tải sản phẩm...</div>}>
                          <ProductList />
                        </Suspense>

                        <Suspense fallback={<div>Đang tải gợi ý...</div>}>
                          <Recommendations />
                        </Suspense>
                      </>
                    );
                  }`}
            </pre>

            <blockquote className={styles.modernQuote}>
              “Tốc độ không chỉ là con số. Nó là cảm giác: thấy nội dung sớm,
              tương tác sớm, và không bị giật.”
            </blockquote>

            {/* ====================== SECTION 3 ====================== */}
            <h2 id="ux" className={styles.sectionTitle}>
              3. Caching & Trải nghiệm UX — nhanh nhưng không được “sai dữ liệu”
            </h2>

            <p>
              Caching là nơi nhiều dự án “đau”: cache quá mạnh thì dữ liệu cũ,
              cache yếu thì server tốn tài nguyên. Next.js 15 giúp bạn cấu hình
              cache theo ngữ cảnh rõ ràng:
            </p>

            <ul>
              <li>
                <strong>force-cache</strong>: dữ liệu ít thay đổi (blog list,
                landing).
              </li>
              <li>
                <strong>no-store</strong>: dữ liệu nhạy thời gian (giỏ hàng,
                quyền hạn).
              </li>
              <li>
                <strong>revalidate</strong>: dữ liệu thay đổi định kỳ (bảng xếp
                hạng, giá, tồn kho…).
              </li>
            </ul>

            <h3>Ví dụ: revalidate theo thời gian</h3>
            <pre className={(styles as any).codeBlock}>
              {`await fetch("https://api.example.com/posts", {
                  next: { revalidate: 60 }, // 60s làm mới
                });`}
            </pre>

            <h3>Ví dụ: revalidate theo “tag” (chuẩn cho sản phẩm thật)</h3>
            <p>
              Khi admin cập nhật sản phẩm/bài viết, bạn muốn “đập cache” đúng
              nhóm liên quan — không cần xóa toàn bộ cache.
            </p>
            <pre className={(styles as any).codeBlock}>
              {`// fetch có tag
                  await fetch("https://api.example.com/products", {
                    next: { tags: ["products"] },
                  });

                  // khi update ở server action / route handler:
                  import { revalidateTag } from "next/cache";
                  revalidateTag("products");`}
            </pre>

            <div className={styles.infoCard}>
              <div className={styles.cardGlow} />
              <h4>🧠 Rule of Thumb (đáng nhớ)</h4>
              <ul>
                <li>
                  Nội dung công khai, ít đổi → <strong>cache mạnh</strong>.
                </li>
                <li>
                  Dữ liệu theo người dùng (auth) → <strong>no-store</strong>.
                </li>
                <li>
                  Dữ liệu “có thể trễ 1 chút” → <strong>revalidate</strong>.
                </li>
              </ul>
            </div>

            <h3>Những “bẫy” caching hay gặp</h3>
            <ul>
              <li>
                Cache dữ liệu theo user nhưng dùng cache public → lộ dữ liệu /
                sai dữ liệu.
              </li>
              <li>
                Dùng revalidate quá dài cho dữ liệu giá/tồn kho → UX “ảo” gây
                mất niềm tin.
              </li>
              <li>Không tách rõ: dữ liệu “global” và dữ liệu “per-session”.</li>
            </ul>

            {/* ====================== SECTION 4 ====================== */}
            <h2 id="future" className={styles.sectionTitle}>
              4. Tầm nhìn tương lai: App Router, Server Actions và web “không
              còn client-heavy”
            </h2>

            <p>
              Tương lai của Next.js đang dịch chuyển về hướng:{" "}
              <strong>ít API layer rời rạc</strong>, ít “client fetch” hơn, và
              nhiều logic chạy ở server một cách có kiểm soát. Bạn viết UI như
              React bình thường, nhưng dữ liệu và xử lý nằm gần nơi dữ liệu sinh
              ra nhất.
            </p>

            <h3>Server Actions: form submit “đúng nghĩa server-first”</h3>
            <p>
              Thay vì tạo REST endpoint rồi viết fetch từ client, bạn có thể
              submit trực tiếp vào server action, giữ validation và quyền truy
              cập ở server.
            </p>

            <pre className={(styles as any).codeBlock}>
              {`// app/actions.ts
                      "use server";
                      export async function subscribe(formData: FormData) {
                        const email = String(formData.get("email") || "");
                        // validate + save DB
                      }

                      // app/page.tsx
                      import { subscribe } from "./actions";
                      export default function Page() {
                        return (
                          <form action={subscribe}>
                            <input name="email" placeholder="you@email.com" />
                            <button>Subscribe</button>
                          </form>
                        );
                      }`}
            </pre>

            <div className={styles.infoCard}>
              <div className={styles.cardGlow} />
              <h4>🔮 Dự đoán xu hướng 2026+</h4>
              <ul>
                <li>
                  <strong>Server-first</strong> sẽ là mặc định cho content &
                  commerce.
                </li>
                <li>
                  UI được stream theo “độ quan trọng” (prioritize nội dung
                  chính).
                </li>
                <li>
                  Caching trở thành “ngôn ngữ kiến trúc”, không chỉ là tối ưu
                  nhỏ.
                </li>
              </ul>
            </div>

            <h3>Checklist nâng cấp “an toàn” (để khỏi vỡ build)</h3>
            <ul>
              <li>
                Rà soát component nào cần <strong>"use client"</strong> (state,
                effect, event handler). Còn lại ưu tiên server.
              </li>
              <li>
                Tách fetch dữ liệu lên server component; tránh fetch ở client
                nếu không cần.
              </li>
              <li>
                Thống nhất chiến lược caching cho từng nhóm dữ liệu:
                public/auth/time-sensitive.
              </li>
              <li>
                Dùng Suspense để stream phần nặng; thêm fallback “đẹp” thay vì
                spinner vô hồn.
              </li>
              <li>
                Theo dõi Core Web Vitals trước/sau (LCP/INP/CLS) để nâng cấp có
                số liệu.
              </li>
            </ul>

            <div className={styles.conclusionBox}>
              <h3>Lời kết</h3>
              <p>
                Next.js 15 thiết lập chuẩn mới:{" "}
                <strong>
                  ít JavaScript hơn, nhiều “server intelligence” hơn
                </strong>
                . Nếu bạn đang xây sản phẩm bền vững, đây là thời điểm vàng để
                chuyển sang tư duy Server-first: render đúng nơi, cache đúng
                chỗ, stream đúng lúc — để UX “tự nhiên nhanh” thay vì tối ưu
                kiểu mẹo.
              </p>
              <p>
                Nếu bạn muốn bài blog “đậm chất case study” hơn, mình có thể
                giúp bạn viết thêm 1 phần “Before/After” (đo bundle size, LCP,
                INP) và một ví dụ thực tế theo dự án của bạn
                (blog/product/dashboard).
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
