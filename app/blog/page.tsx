"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { blogs } from "../data/blogs";
import styles from "./Blog.module.css";

export default function BlogPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className={styles.container}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      {blogs.map((post, index) => (
        <section key={post.id} className={styles.section}>
          {/* Blobs trang trí */}
          <div
            className={styles.blob}
            style={{
              background:
                index % 2 === 0
                  ? "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
              top: index % 2 === 0 ? "0%" : "30%",
              right: index % 2 === 0 ? "-10%" : "60%",
            }}
          />

          <motion.div
            className={styles.wrapper}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.contentCard}>
              <div
                className={`${styles.cardGrid} ${
                  index % 2 !== 0 ? styles.reverse : ""
                }`}
              >
                {/* HIỂN THỊ HÌNH ẢNH TỪ DATA */}
                <div className={styles.imageSection}>
                  <motion.div
                    className={styles.imageWrapper}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className={styles.blogImage}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay} />
                  </motion.div>
                </div>

                {/* PHẦN CHỮ */}
                <div className={styles.textContent}>
                  <header>
                    <span className={styles.categoryTag}>{post.category}</span>
                    <h2 className={styles.title}>{post.title}</h2>
                  </header>

                  <p className={styles.description}>{post.description}</p>

                  <footer className={styles.cardFooter}>
                    <Link
                      href={`/blog/slug/${post.slug}`}
                      className={styles.readMoreBtn}
                    >
                      <span>Đọc bài ngay</span>
                      <svg
                        className={styles.arrowIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <div className={styles.metaInfo}>
                      <span className={styles.metaDate}>{post.date}</span>
                      <span className={styles.metaDot}>•</span>
                      <span className={styles.metaTime}>{post.readTime}</span>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </motion.div>

          <div className={styles.bgNumber}>0{index + 1}</div>
        </section>
      ))}
    </main>
  );
}
