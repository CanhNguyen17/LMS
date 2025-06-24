export default function StudentReviewTimeline() {
  const reviews = [
    {
      name: "Lê Văn Hoàng",
      title: "Frontend Developer",
      avatar: "/avatars/a.jpg",
      quote:
        "Cách học mới yêu thích của tôi. Chọn một chủ đề, học vài bài học mỗi ngày, lặp lại và tiếp tục.",
      align: "left",
    },
    {
      name: "Vân Trang",
      title: "Frontend Developer",
      avatar: "/avatars/b.jpg",
      quote:
        "Tôi đã sử dụng trang web tuyệt vời này để nâng kiến thức lập trình mỗi ngày. Đây là cách hoàn hảo để tôi học vì tôi rất bận rộn và đặc biệt là nó miễn phí",
      align: "right",
    },
    {
      name: "Lê Duy",
      title: "Frontend Developer",
      avatar: "/avatars/c.jpg",
      quote:
        "Vừa hoàn thành khóa học đầu tiên của tôi trên LMS EDU. Học nhanh hiểu. Thích lắm!",
      align: "left",
    },
  ];

  return (
    <div className="bg-neutral-900 text-white py-16">
      <div className="relative max-w-5xl mx-auto px-4 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-0.5 before:bg-gray-700">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className={`mb-16 flex flex-col md:flex-row ${r.align === "left" ? "md:flex-row-reverse" : ""
              } items-center md:items-start gap-6 md:gap-12`}
          >
            {/* Avatar & info */}
            <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
              <h4 className="mt-4 font-semibold text-lg">{r.name}</h4>
              <p className="text-sm italic text-gray-400">{r.title}</p>
            </div>

            {/* Quote */}
            <div className="relative bg-neutral-800 p-6 rounded-md text-lg italic leading-relaxed shadow-md md:w-1/2">
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-8 ${r.align === "left"
                  ? "border-r-neutral-800 border-l-transparent left-full"
                  : "border-l-neutral-800 border-r-transparent right-full"
                  } border-y-transparent`}
              ></div>
              “{r.quote}”
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
