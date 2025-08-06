import mongoose from 'mongoose'
//

const Order = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    courses: [
        {
            courseId: { type: String, required: true },
            title: String,
            image: String,
            price: { type: Number, required: true },
            quantity: { type: Number, default: 1, min: [1] },
        }
    ],
    total: { type: Number, required: true },
    quantity: { type: Number },
}, {
    timestamps: true
})

export default mongoose.model('Order', Order);