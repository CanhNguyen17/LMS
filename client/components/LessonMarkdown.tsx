'use client'

import ReactMarkdown from 'react-markdown'

export default function LessonMarkdown({ content }: { content: string }) {
    return (
        <div className="prose max-w-none mt-4">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}
