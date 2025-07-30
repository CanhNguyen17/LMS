import mongoose from 'mongoose'

const lessonSchema = new mongoose.Schema({
    titleLesson: String,
    videoUrl: String,
    contentMarkdown: String
}, { _id: true })

const courseSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    price: {
        type: Number,
        required: true
    },
    lessons: [lessonSchema]
})

export default mongoose.model('Course', courseSchema)
