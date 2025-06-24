// components/CourseCard.tsx
import Link from 'next/link'

export default function CourseCard({ course }: { course: any }) {
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.650),rgba(0,0,0,0.450)),
                 url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }
            }>
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm">{course.description}</p>
            <Link href={`/course/${course._id}`}>
                <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800">
                    Xem khóa học
                </button>
            </Link>
        </div>
    )
}
