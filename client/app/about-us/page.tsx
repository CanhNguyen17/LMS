export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen px-6 py-12"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.850)),
                 url(https://sontau.com/wp-content/uploads/2022/05/ve-chung-toi.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4 text-blue-700">Về Chúng Tôi</h1>
                <p className="mb-6 leading-relaxed">
                    Tại <span className="font-semibold">LMS EDU</span>, chúng tôi cam kết mang đến một hành trình học lập trình MIỄN PHÍ một cách hiệu quả, thực tiễn và gần gũi với cộng đồng lập trình viên Việt Nam. Các khóa học được thiết kế dành cho người mới bắt đầu cũng như những người muốn nâng cao kỹ năng chuyên sâu.
                </p>

                <h2 className="text-2xl font-bold mb-3 mt-10 text-white">Các khóa học nổi bật</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">HTML Cơ Bản</h3>
                        <p>Học cách xây dựng cấu trúc trang web bằng ngôn ngữ đánh dấu HTML5. Phù hợp cho người mới.</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">CSS & Giao Diện Web</h3>
                        <p>Thiết kế đẹp mắt và phản hồi nhanh trên mọi thiết bị bằng CSS và Flexbox/Grid.</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">JavaScript Nền Tảng</h3>
                        <p>Nắm vững logic, biến, vòng lặp và sự kiện DOM để làm web tương tác.</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">React Từ Cơ Bản Đến Nâng Cao</h3>
                        <p>Xây dựng ứng dụng hiện đại với React hooks, component, và routing như một Frontend Developer chuyên nghiệp.</p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-xl font-bold text-white mb-3">Tại sao chọn chúng tôi?</h2>
                    <ul className="list-disc list-inside text-white space-y-2">
                        <li>Học với các bài giảng dễ hiểu</li>
                        <li>Đội ngũ giảng viên kinh nghiệm, thân thiện</li>
                        <li>Cộng đồng hỗ trợ học viên tích cực</li>
                        <li>Cập nhật công nghệ mới liên tục</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
