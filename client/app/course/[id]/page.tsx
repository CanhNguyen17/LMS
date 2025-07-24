import VideoPlayer from '@/components/VideoPlayer'
import LessonMarkdown from '@/components/LessonMarkdown'
import { cookies } from 'next/headers'

type Lesson = {
    _id: string //LUY Y
    titleLesson: string
    videoUrl: string
    contentMarkdown: string
}

async function getLessons(courseId: string): Promise<Lesson[]> { //LUY Y
    const token = cookies().get('token')?.value


    const res = await fetch(`http://localhost:5000/api/courses/${courseId}/lesson`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
    })

    if (!res.ok) {
        const text = await res.text()
        console.error('Lỗi:', res.status, text)
        throw new Error('Không thể tải bài học')
    }

    return res.json()
}

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
    const lessons = await getLessons(params.id)

    return (
        <div className="min-h-screen bg-gray-50 px-10 md:px-24 py-8 md:py-10 space-y-10">
            <h1 className="text-3xl font-bold text-blue-700 border-b border-gray-200 pb-4">
                Bài học
            </h1>

            {lessons.map((item, index) => (
                <div key={item._id} className="bg-white shadow rounded-lg px-4 md:p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full font-bold">
                            {index + 1}
                        </span>
                        {item.titleLesson}
                    </h2>

                    <div className="w-full max-w-2xl mx-auto ring-gray-200 rounded-md">
                        <VideoPlayer src={item.videoUrl} />
                    </div>

                    <div className="">
                        <LessonMarkdown content={item.contentMarkdown} />
                    </div>
                </div>
            ))}
        </div>
    )
}
