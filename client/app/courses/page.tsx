import CourseCard from "@/components/CourseCard";

type Course = {
    _id: string
    title: string
    description: string
}

async function getCourses(): Promise<Course[]> {
    const res = await fetch('http://localhost:5000/api/courses', {
        cache: 'no-store' // đảm bảo fetch mỗi lần load trang
    })

    if (!res.ok) {
        throw new Error('Không thể lấy danh sách khóa học!')
    }

    return res.json()
}

export default async function RegisterPage() {
    const courses = await getCourses()
    return (
        <div className="px-24 pt-6 pb-72 text-white" style={{
            background: `linear-gradient(rgba(0,0,0,0.450), rgba(0,0,0,0.500)),
            url(https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center"

        }}>
            <h1 className="text-2xl font-bold mb-4">DANH SÁCH KHÓA HỌC</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    )
}
