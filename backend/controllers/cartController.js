import Course from '../models/Course.js'
import CourseCart from '../models/Cart.js'

// POST [/cart/:id] — Thêm sản phẩm vào giỏ
export const addToCart = async (req, res) => {
    try {
        const userId = req.user.userId
        const courseId = req.params.id

        const course = await Course.findById(courseId)

        if (!course) {
            return res.status(404).json({ message: 'course not found' })
        }

        const cartItem = await CourseCart.findOne({ userId, courseId })
        if (cartItem) {
            cartItem.quantity += 1
            await cartItem.save()
        } else {
            const newCartItem = new CourseCart({
                userId,
                courseId,
                title: course.title,
                image: course.image,
                price: course.price,
            })
            await newCartItem.save()
        }

        res.status(200).json({ message: 'course added to cart' })
    } catch (error) {
        console.error('Error adding course to cart:', error)
        res.status(500).json({ message: error.message })
    }
}

// GET [/cart] — Lấy danh sách giỏ hàng theo user
export const getCart = async (req, res) => {
    try {
        const userId = req.user.userId
        const products = await CourseCart.find({ userId }).populate('courseId')
        res.json(products)
    } catch (error) {
        console.error('Error fetching cart:', error)
        res.status(500).json({ message: error.message })
    }
}

// DELETE [/cart/:id] — Xoá sản phẩm khỏi giỏ
export const deleteCart = async (req, res) => {
    try {
        await CourseCart.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: 'Product deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// PUT [/cart/:id] — Cập nhật số lượng
export const putQuantityCart = async (req, res) => {
    const { action } = req.body
    const update = action === 'increase'
        ? { $inc: { quantity: 1 } }
        : action === 'decrease'
            ? { $inc: { quantity: -1 } }
            : null

    if (!update) {
        return res.status(400).json({ message: 'Invalid action' })
    }

    try {
        const result = await CourseCart.updateOne({ _id: req.params.id }, update)
        console.log('MongoDB Update Result:', result);
        res.status(200).json({ message: 'Product quantity updated successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// PUT [/cart] — Xóa toàn bộ giỏ sau khi mua
export const putDeleteCart = async (req, res) => {
    try {
        await CourseCart.deleteMany()
        res.status(200).json({ message: 'Products deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
