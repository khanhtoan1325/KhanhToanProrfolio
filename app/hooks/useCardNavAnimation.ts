"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

export function useCardNavAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  // Sử dụng contentRef để tính chiều cao chính xác
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Dùng ref để lưu timeline, giúp control play/reverse
  const tl = useRef<gsap.core.Timeline | null>(null);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Khởi tạo timeline ở trạng thái paused
      tl.current = gsap.timeline({ paused: true });

      // Animation 1: Mở rộng chiều cao Nav
      // Chúng ta để "auto" để GSAP tự tính chiều cao content
      tl.current.to(navRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.out",
      });

      // Animation 2: Hiện content
      tl.current.to(
        contentRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        "<0.1" // Bắt đầu sau animation chiều cao 0.1s
      );

      // Animation 3: Stagger các card bay lên
      tl.current.to(
        cardsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.2)",
        },
        "<0.1"
      );
    }, navRef); // Scope selector vào navRef

    // Cleanup khi component unmount
    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    if (!tl.current) return;

    if (!isOpen) {
      setIsOpen(true);
      tl.current.play();
    } else {
      // Khi đóng, reverse lại và set state sau khi xong
      tl.current.reverse().then(() => {
        setIsOpen(false);
      });
    }
  };

  return { isOpen, navRef, contentRef, setCardRef, toggleMenu };
}
