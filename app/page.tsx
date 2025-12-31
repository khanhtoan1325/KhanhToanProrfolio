"use client";

import { motion, Variants } from "framer-motion";
import { Facebook, Github, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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

type Particle = {
  x: number;
  y: number;
  scale: number;
  dx: number;
  dy: number;
  duration: number;
  delay: number;
};

export default function Hero() {
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    // scroll only runs on client
    window.scrollTo(0, 0);

    const update = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const particles: Particle[] = useMemo(() => {
    if (!size.w || !size.h) return [];

    return Array.from({ length: 20 }, () => ({
      x: Math.random() * size.w,
      y: Math.random() * size.h,
      scale: Math.random() * 0.5 + 0.5,
      dx: Math.random() * 200 - 100,
      dy: Math.random() * -100 - 50,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, [size.w, size.h]);

  return (
    <section className={styles.heroSection}>
      {/* BACKGROUND */}
      <div className={styles.background}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>

        {/* Floating particles */}
        <div className={styles.particles}>
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              initial={{
                x: p.x,
                y: p.y,
                scale: p.scale,
                opacity: 0,
              }}
              animate={{
                y: [p.y, p.y + p.dy],
                x: [p.x, p.x + p.dx],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}
        </div>
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
          {/* TITLE */}
          <motion.h1
            variants={itemVariants}
            className={styles.mainHeading}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={styles.roleText}>
              Data Engineer <span className={styles.ampersand}>&</span>
              <br />
              System Developer
            </span>
          </motion.h1>

          {/* MOTTO */}
          <motion.div
            variants={itemVariants}
            className={styles.mottoInline}
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className={styles.mottoTextInline}>
              "Muốn Thành Công thì Phải Chấp Nhận Thất Bại"
            </span>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p variants={itemVariants} className={styles.description}>
            Sinh viên năm 4{" "}
            <span className={styles.highlight}>Hệ Thống Thông Tin</span> tại{" "}
            <span className={styles.highlight}>HUTECH</span>, chuyên sâu về{" "}
            <span className={styles.highlight}>Data Engineering</span>. Tôi đam
            mê xây dựng các{" "}
            <span className={styles.highlight}>data pipeline</span> với{" "}
            <span className={styles.highlight}>Python, SQL, Apache Spark</span>{" "}
            và triển khai giải pháp{" "}
            <span className={styles.highlight}>ETL/ELT</span> cho hệ thống big
            data.
          </motion.p>

          {/* SKILLS BADGES */}
          <motion.div variants={itemVariants} className={styles.skillsBadges}>
            {[
              "Python",
              "SQL",
              "Apache Spark",
              "ETL/ELT",
              "Data Pipeline",
              "Big Data",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className={styles.badge}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className={styles.buttonsContainer}
          >
            <motion.a
              href="/about"
              className={styles.primaryButton}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Thông Tin Về Tôi
              <ArrowRight className={styles.buttonIcon} size={20} />
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/projects" className={styles.secondaryButton}>
                Xem dự án
              </Link>
            </motion.div>
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
