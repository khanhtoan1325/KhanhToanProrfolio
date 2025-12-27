import Link from "next/link";
import styles from "./OpenSource.module.css";

const repos = [
  {
    name: "profile_web",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    description:
      "Mã nguồn website cá nhân hiện tại. Tối ưu SEO và hiệu năng vượt trội.",
    href: "https://github.com",
  },
  {
    name: "mobile_app_template",
    tags: ["React Native", "Expo", "Redux"],
    description:
      "Cấu trúc dự án chuẩn cho mobile app, tích hợp sẵn Auth và Dark mode.",
    href: "https://github.com",
  },
  {
    name: "backend_core",
    tags: ["Node.js", "NestJS", "PostgreSQL"],
    description: "Hệ thống lõi quản lý người dùng và phân quyền mạnh mẽ.",
    href: "https://github.com",
  },
];

export default function OpenSourcePage() {
  return (
    <section className={styles.container}>
      {/* Các lớp trang trí nền */}
      <div className={`${styles.blob} styles.blob1`} />
      <div className={`${styles.blob} styles.blob2`} />

      <div className={styles.wrapper}>
        <header>
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Commits</span>
            </div>
          </div>

          <h1 className={styles.title}>
            Mã nguồn <span className={styles.highlight}>Tự do.</span>
          </h1>
          <p className={styles.description}>
            Nơi tổng hợp các dự án tôi đã xây dựng và đóng góp. Bạn có thể tự do
            clone, sửa đổi hoặc đóng góp ý tưởng.
          </p>
        </header>

        <div className={styles.grid}>
          {repos.map((r) => (
            <article key={r.name} className={styles.card}>
              <div className={styles.tagContainer}>
                {r.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className={styles.repoName}>{r.name}</h2>
              <p className={styles.repoDesc}>{r.description}</p>

              <Link href={r.href} target="_blank" className={styles.link}>
                Xem chi tiết
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
