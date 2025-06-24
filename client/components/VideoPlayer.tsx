// components/VideoPlayer.tsx
'use client'

export default function VideoPlayer({ src }: { src: string }) {
    const videoId = extractYouTubeId(src)

    return (
        <div className="aspect-video w-full my-4">
            <iframe
                className="w-full h-full rounded"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

function extractYouTubeId(url: string): string {
    const match = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/)
    return match?.[1] || ''
}
