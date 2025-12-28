"use client";

import { motion, Variants } from "framer-motion";
import { Facebook, Github, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../app/CSS/Page.module.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* BACKGROUND */}
      <div className={styles.background}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
      </div>

      {/* CONTENT */}
      <div className={styles.mainContent}>
        {/* AVATAR */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className={styles.avatarContainer}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className={styles.avatarCard}
          >
            <div className={styles.innerGlow}></div>
            <div className={styles.avatarImageContainer}>
              <Image
                src="/unnamed.jpg"
                alt="Nguyễn Khánh Toàn"
                fill
                priority
                className={styles.avatarImage}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.textContent}
        >
          {/* WELCOME */}
          <motion.span variants={itemVariants} className={styles.eyebrow}>
            👋 Welcome to my website
          </motion.span>

          {/* TITLE */}
          <motion.h1 variants={itemVariants} className={styles.mainHeading}>
            Xin chào, tôi là <br />
            <span className={styles.gradientText}>Nguyễn Khánh Toàn</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p variants={itemVariants} className={styles.description}>
            Tôi là{" "}
            <span className={styles.highlight}>Full-stack Developer</span> theo
            định hướng{" "}
            <span className={styles.highlight}>Hệ thống thông tin</span>, chuyên
            xây dựng các ứng dụng với{" "}
            <span className={styles.highlight}>Next.js, React</span> và{" "}
            <span className={styles.highlight}>Node.js</span>. Mục tiêu của tôi
            là tạo ra những hệ thống ổn định, dễ mở rộng và mang lại giá trị
            thực cho doanh nghiệp.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className={styles.buttonsContainer}
          >
            <a href="/about" className={styles.primaryButton}>
              Liên hệ với tôi
              <ArrowRight className={styles.buttonIcon} size={20} />
            </a>

            <Link href="/projects" className={styles.secondaryButton}>
              Xem dự án
            </Link>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            variants={itemVariants}
            className={styles.socialContainer}
          >
            {[
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/khanhtoan1325",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://linkedin.com",
              },
              {
                icon: Facebook,
                label: "Facebook",
                href: "https://www.facebook.com/NGUYENKHANHTOAN1325/",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={styles.socialLink}
                  aria-label={item.label}
                >
                  <Icon size={26} strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
