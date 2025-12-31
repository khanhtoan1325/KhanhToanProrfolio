"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Briefcase,
} from "lucide-react";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header Section */}
        <div className={styles.header}>
          <motion.div
            className={styles.profileSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="/unnamed.jpg"
                alt="Nguyễn Khánh Toàn"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>Nguyễn Khánh Toàn</h1>
              <p className={styles.role}>Data Engineering Student</p>
              <div className={styles.location}>
                <MapPin size={16} />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.quoteCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className={styles.quote}>
              "Muốn Thành Công thì Phải Chấp Nhận Thất Bại"
            </p>
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* About Card */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className={styles.cardTitle}>
              <Briefcase size={20} />
              Giới thiệu
            </h2>
            <p className={styles.aboutText}>
              Sinh viên năm cuối ngành <strong>Hệ Thống Thông Tin</strong> tại
              Đại Học Công Nghệ TP.HCM (HUTECH). Định hướng{" "}
              <strong>Data Engineering</strong>, tập trung vào xây dựng pipeline
              dữ liệu, ETL/ELT và xử lý dữ liệu quy mô lớn.
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className={styles.cardTitle}>
              <Code2 size={20} />
              Kỹ năng
            </h2>
            <div className={styles.skillsGrid}>
              {[
                "Python",
                "SQL",
                "Node.js",
                "React",
                "MySQL",
                "SQL Server",
                "ETL/ELT",
                "Data Pipeline",
              ].map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className={styles.cardTitle}>
              <Mail size={20} />
              Liên hệ
            </h2>
            <div className={styles.contactGrid}>
              <a
                href="mailto:nguyenkhanhtoan1325@gmail.com"
                className={styles.contactLink}
              >
                <Mail size={16} />
                <span>nguyenkhanhtoan1325@gmail.com</span>
              </a>
              <a href="tel:+84777581439" className={styles.contactLink}>
                <Phone size={16} />
                <span>+84 777 581 439</span>
              </a>
              <a
                href="https://github.com/khanhtoan1325"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
