"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import styles from "./Certificate.module.css";
import { certificates } from "../data/certificatesData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CertificatesPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Background cố định, không tạo thêm chiều cao cho trang */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.pageTitle}
            >
              Chứng Chỉ Chuyên Môn
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={styles.pageDesc}
            >
              Minh chứng cho nỗ lực và kiến thức chuyên môn tích lũy.
            </motion.p>
          </header>

          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certificates.map((c) => (
              <motion.div
                key={c.id}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/certificates/${c.id}`}
                  className={styles.cardLink}
                >
                  <div className={styles.imageBox}>
                    <img
                      src={c.image}
                      alt={c.courseName}
                      className={styles.thumb}
                      loading="lazy"
                    />
                    <div className={styles.statusBadge}>
                      <span className={styles.dot} />
                      <span>Verified</span>
                    </div>
                  </div>

                  <div className={styles.content}>
                    <div className={styles.topRow}>
                      <div className={styles.issuerInfo}>
                        <span className={styles.issuerName}>{c.issuer}</span>
                        {c.partner && (
                          <span className={styles.partnerName}>
                            & {c.partner}
                          </span>
                        )}
                      </div>
                      <span className={styles.date}>{c.issuedDate}</span>
                    </div>

                    <h3 className={styles.courseTitle}>{c.courseName}</h3>
                    <p className={styles.certType}>{c.title}</p>

                    {c.notes && (
                      <div className={styles.notesSection}>
                        <p>{c.notes}</p>
                      </div>
                    )}

                    <div className={styles.recipientFooter}>
                      <div className={styles.userIcon}>
                        {(c.recipientName?.charAt(0) ?? "C").toUpperCase()}
                      </div>

                      <div className={styles.userInfo}>
                        <span className={styles.label}>Recipient</span>
                        <span className={styles.name}>{c.recipientName}</span>
                      </div>

                      <div className={styles.viewAction}>
                        <span className={styles.viewText}>Chi tiết</span>
                        <span className={styles.arrow}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
