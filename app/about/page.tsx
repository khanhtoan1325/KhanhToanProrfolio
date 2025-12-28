"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bolt,
  Mail,
  Phone,
  Github,
  Facebook,
  GraduationCap,
} from "lucide-react";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <section className={styles.container}>
      {/* Background blobs */}
      <div className={`${styles.blob} ${styles.blobLeft}`} />
      <div className={`${styles.blob} ${styles.blobRight}`} />

      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* ===== HERO ===== */}
        <div className={styles.heroSection}>
          <div>
            <h1 className={styles.mainTitle}>
              Bridge <br />
              <span className={styles.whiteText}>Business</span> <br />
              With <br />
              <span className={styles.gradientText}>Technology</span>
            </h1>

            <p className={styles.subText}>
              Tôi tập trung xây dựng các hệ thống phần mềm phục vụ quản lý và
              vận hành doanh nghiệp, với tư duy hệ thống, phân tích yêu cầu và
              triển khai giải pháp công nghệ hiệu quả.
            </p>

            <div className={styles.buttonGroup}>
              <button className={styles.primaryBtn}>Xem giải pháp</button>
              <button className={styles.secondaryBtn}>Phân tích dự án</button>
            </div>
          </div>

          <div className={styles.photoWrapper}>
            <img
              src="/unnamed.jpg"
              alt="Profile"
              className={styles.profileImg}
            />
          </div>
        </div>

        {/* ===== INFO GRID ===== */}
        <div className={styles.infoGrid}>
          {/* ===== CHUYÊN MÔN ===== */}
          <div className={styles.glassCard}>
            <h2 className={styles.cardTitle}>
              <Bolt size={22} /> Chuyên Môn
            </h2>

            <div className={styles.skillGrid}>
              {[
                ["Node.js", "Backend & API"],
                ["React", "Frontend UI"],
                ["JavaScript", "Core Language"],
                ["MySQL", "Relational Database"],
                ["SQL Server", "Enterprise Database"],
                ["Python", "Data Processing"],
                ["Java", "OOP Backend"],
              ].map(([name, desc]) => (
                <div key={name} className={styles.skillItem}>
                  <span>{name}</span>
                  <strong>{desc}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* ===== LIÊN HỆ ===== */}
          <div className={styles.glassCard}>
            <h2 className={styles.cardTitle}>
              <Mail size={22} /> Liên Hệ
            </h2>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Mail size={18} />
                nguyenkhanhtoan1325@gmail.com
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} />
                +84 777 581 439
              </div>
              <div className={styles.contactItem}>
                <Github size={18} />
                <a
                  href="https://github.com/khanhtoan1325"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className={styles.contactItem}>
                <Facebook size={18} />
                <a
                  href="https://www.facebook.com/NGUYENKHANHTOAN1325"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nguyễn Khánh Toàn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== HỌC VẤN ===== */}
        <div className={styles.educationCard}>
          <h2 className={styles.cardTitle}>
            <GraduationCap size={22} /> Học Vấn
          </h2>

          <div className={styles.educationItem}>
            <span className={styles.dot} />
            <div>
              <strong>Ngành Hệ thống Thông tin</strong>
              <p>Phân tích – Thiết kế – Xây dựng hệ thống phần mềm</p>
              <small>Đang học</small>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
