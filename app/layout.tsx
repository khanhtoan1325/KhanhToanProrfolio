import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Cập nhật Metadata cho chuẩn SEO Portfolio
export const metadata: Metadata = {
  title: "Nguyễn Khánh Toàn",
  description: "Website cá nhân của Nguyễn Khánh Toàn",
  icons: {
    icon: "/favicon.ico",
  },
};

// 3. Cấu hình Menu (Dữ liệu mẫu)
const navItems = [
  {
    label: "Sản phẩm",
    bgColor: "linear-gradient(145deg, #1e1b4b, #312e81)",
    textColor: "#ffffff",
    links: [
      { label: "Dự án cá nhân", href: "/projects" },
      { label: "Blog Và Bài Viết", href: "/blog" },
      { label: "Open Source", href: "/open-source" },
    ],
  },
  {
    label: "Thông tin",
    bgColor: "#171717",
    textColor: "#ffffff",
    links: [
      { label: "Về tôi", href: "/about" },
      { label: "Kinh nghiệm", href: "/experience" },
      { label: "Giấy Chứng Nhận", href: "/certificates" },
    ],
  },
  {
    label: "Liên hệ",
    bgColor: "linear-gradient(145deg, #6a11cb, #2575fc)",
    textColor: "#171717",
    links: [
      { label: "Email", href: "nguyenkhanhtoan1325@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Facebook", href: "https://facebook.com" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Navbar
          logo=""
          items={navItems}
          buttonLabel="Tải CV"
          buttonHref="/NguyenKhanhToan.pdf"
        />

        <main className="relative z-0 min-h-screen pt-32 px-4 sm:px-8 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
