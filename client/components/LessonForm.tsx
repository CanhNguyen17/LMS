import { createLesson } from '@/app/admin/actions'

export default function LessonForm({ courseId }: { courseId: string }) {
    return (
        <form
            action={createLesson}
            className=" bg-white border rounded-md p-6 my-4 shadow ring-gray-200"
        >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Thêm bài học mới</h2>

            {/* //an */}
            <input type="hidden" name="courseId" value={courseId} />

            <input
                name="titleLesson"
                placeholder="Title lesson"
                className="w-full border rounded p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                name="contentMarkdown"
                placeholder="Content markdown"
                className="w-full border rounded p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                name="videoUrl"
                placeholder="videoUrl"
                className="w-full border rounded p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded"
            >
                Thêm
            </button>
        </form>
    )
}
