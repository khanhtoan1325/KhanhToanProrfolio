"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function ProjectsPage() {
  return (
    <section className={styles.container}>
      {/* Background blobs */}
      <div className={`${styles.blob} ${styles.blobTop}`} />
      <div className={`${styles.blob} ${styles.blobBottom}`} />

      <div className={styles.wrapper}>
        {/* ===== HEADER ===== */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Dự án <br />
            <span className={styles.highlight}>Tiêu biểu.</span>
          </h1>
          <p className={styles.description}>
            Tổng hợp những sản phẩm công nghệ tôi đã tâm huyết xây dựng, từ ý
            tưởng sơ khai đến khi vận hành thực tế.
          </p>
        </motion.header>

        {/* ===== GRID ===== */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((p, index) => (
            <motion.article
              key={p.slug}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <img src={p.image} alt={p.title} className={styles.image} />

                <div className={styles.techOverlay}>
                  {p.tech.map((t) => (
                    <span key={t} className={styles.techBadge}>
                      {t}
                    </span>
                  ))}
                </div>

                <span className={styles.projectNumber}>0{index + 1}</span>
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <h2 className={styles.projectTitle}>{p.title}</h2>
                <p className={styles.projectDesc}>{p.description}</p>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Xem chi tiết
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
