export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 flex flex-col items-center px-6 py-20">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
        About Me
      </h1>

      <p className="text-gray-700 text-lg max-w-2xl text-center leading-relaxed">
        Xin chào! Tôi là{" "}
        <span className="font-semibold">Nguyễn Khánh Toàn</span>. Đây là trang
        giới thiệu đơn giản nhưng có thiết kế đẹp,
      </p>

      {/* Card */}
      <div className="mt-12 w-full max-w-3xl p-[1px] rounded-2xl bg-gradient-to-r from-gray-300 to-gray-100">
        <div className="backdrop-blur-xl bg-white/90 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Tôi làm gì?</h2>
          <p className="text-gray-600 leading-relaxed">
            Tôi là một sinh viên chuyên ngành Công nghệ thông tin, yêu thích lập
            trình và phát triển ứng dụng. Gần đây tôi đang học React, Next.js và
            xây dựng nhiều dự án thực tế.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Mục tiêu</h2>
          <p className="text-gray-600 leading-relaxed">
            Phát triển kỹ năng frontend, backend và trở thành fullstack
            developer. Tôi đang thực hành mỗi ngày để cải thiện khả năng.
          </p>
        </div>
      </div>

      {/* Back button */}
      <a
        href="/"
        className="mt-10 px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
      >
        ← Quay về trang chủ
      </a>
    </div>
  );
}
