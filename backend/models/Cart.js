import mongoose from 'mongoose'

const Cart = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    courseId: { type: String, require: true },
    title: String,
    image: String,
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1, min: [1] },
}, {
    timestamps: true
})

export default mongoose.model('Cart', Cart)
