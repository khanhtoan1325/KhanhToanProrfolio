"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const items = [
  {
    time: "2022 - Hiện tại",
    title: "Sinh viên Công nghệ thông tin",
    desc: "Xây dựng nền tảng vững chắc về cấu trúc dữ liệu, thuật toán. Bắt đầu hành trình với React và thực hiện các dự án thực tế đầu tiên.",
  },
  {
    time: "2021 - Hiện tại",
    title: "Bắt đầu học tập và làm việc tại CTY TNHH 1TV Viễn Thịnh",
    desc: "Chuyên Viên Hỗ Trợ Kỹ Thuật - Xử Lý Đơn Hàng - Kiểm Tra Đơn Hàng. Học hỏi và phát triển kỹ năng trong môi trường doanh nghiệp thực tế.",
  },
];

export default function ExperiencePage() {
  return (
    <section className={styles.container}>
      {/* Background Blobs */}
      <div className={`${styles.blob} ${styles.blobRight}`} />
      <div className={`${styles.blob} ${styles.blobLeft}`} />

      <div className={styles.wrapper}>
        <motion.header
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Kinh <span className={styles.highlight}>Nghiệm.</span>
          </h1>
        </motion.header>

        <div className={styles.timeline}>
          {items.map((it, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Dot decoration on line */}
              <div className={styles.dot} />

              <span className={styles.time}>{it.time}</span>
              <div className={styles.card}>
                <h2 className={styles.role}>{it.title}</h2>
                <p className={styles.description}>{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
