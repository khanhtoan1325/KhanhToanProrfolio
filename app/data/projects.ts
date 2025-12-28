export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "Quanlynhansu",
    title: "Web Hệ thống Quản Lý Nhân Sự",
    description:
      "Nền tảng quản lý nhân sự tập trung, hỗ trợ tự động hoá quy trình HR, quản lý hồ sơ nhân viên và tối ưu hiệu quả vận hành doanh nghiệp.",
    tech: ["React", "TypeScript", "Maps Box API", "Tailwind"],
    image: "/WebChamCong.png",
    href: "/projects/Quanlynhansu",
  },
  {
    slug: "ecommerce-store",
    title: "App Chấm Công",
    description:
      "Ứng dụng chấm công hiện đại với tốc độ xử lý nhanh, trải nghiệm mượt mà và khả năng mở rộng linh hoạt cho doanh nghiệp.",
    tech: ["React Native", "MySQL", "Expo Go", "RestFul API", "AWS"],
    image: "/ChamCongApp.png",
    href: "https://github.com/khanhtoan1325/SmartCheck",
  },
  {
    slug: "health-dashboard",
    title: "App Money-Wish (Quản Lý Chi Tiêu)",
    description:
      "Hệ thống dashboard quản lý chi tiêu thông minh, trực quan hoá dữ liệu tài chính realtime, hỗ trợ phân tích và kiểm soát dòng tiền cá nhân.",
    tech: ["Flutter", "Dart", "Firebase", "GraphQL", "D3.js"],
    image: "/QuanLyChiTieu.jpg",
    href: "https://github.com/khanhtoan1325/Money-Wish",
  },
  {
    slug: "sales-management",
    title: "Web Site Bán Thuốc Online",
    description:
      "Website bán thuốc trực tuyến giúp quản lý sản phẩm, đơn hàng và tồn kho, theo dõi doanh thu và hỗ trợ phân tích dữ liệu bán hàng thông qua các dashboard trực quan.",
    tech: ["Next.js", "Redux", "Firebase", "Chart.js", "Stripe"],
    image: "/WebBanTHuoc.png",
    href: "https://github.com/khanhtoan1325/Project-2",
  },
  {
    slug: "hr-management-system",
    title: "Web Site Bán Sách UI/UX",
    description:
      "Website bán sách với giao diện UI/UX thân thiện, giúp người dùng dễ dàng tìm kiếm, khám phá, mua sách và quản lý đơn hàng một cách thuận tiện.",
    tech: ["React", "TypeScript"],
    image: "/WebBanSach.png",
    href: "https://github.com/khanhtoan1325/D-n-X",
  },
];
