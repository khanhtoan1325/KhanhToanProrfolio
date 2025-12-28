"use client";

import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import "../CSS/CardNav.css";
import { useCardNavAnimation } from "../hooks/useCardNavAnimation";

interface NavLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

interface NavbarProps {
  logo?: string; // Làm optional để tránh lỗi nếu quên truyền
  items: NavItem[];
  buttonLabel?: string;
  buttonHref?: string;
}

export default function Navbar({
  logo = "/logo.png", // Default value
  items,
  buttonLabel = "Get Started",
  buttonHref = "#",
}: NavbarProps) {
  const { isOpen, navRef, contentRef, setCardRef, toggleMenu } =
    useCardNavAnimation();

  return (
    <div className="card-nav-container">
      <nav ref={navRef} className={`card-nav ${isOpen ? "open" : ""}`}>
        {/* Header Section */}
        <div className="card-nav-top">
          {/* Toggle Button */}
          <div
            className="nav-toggle-btn"
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <RxCross2 size={20} color="#111" />
            ) : (
              <div className="hamburger-lines">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="logo-container">
            {/* Sử dụng Next/Image để tối ưu hoặc thẻ img thường nếu logo là SVG external */}
            <Image
              src={logo}
              alt="Brand Logo"
              width={100}
              height={30}
              className="object-contain h-8 w-auto"
              priority
            />
          </div>

          {/* CTA Button */}
          <a href={buttonHref} download className="card-nav-cta-button">
            {buttonLabel}
          </a>
        </div>

        {/* Content Section (Dropdown) */}
        <div ref={contentRef} className="card-nav-content">
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={setCardRef(idx)}
              className="nav-card"
              style={{
                background: item.bgColor,
                color: item.textColor,
              }}
            >
              <div className="nav-card-label">{item.label}</div>

              <div className="nav-card-links">
                {item.links.map((link, i) => (
                  <Link key={i} href={link.href} className="nav-card-link">
                    <GoArrowUpRight className="link-icon" size={16} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
