import Order from "../models/Order.js"

export const createOrder = async (req, res) => {
    try {
        const userId = req.user.userId
        const { courses, total, quantity } = req.body

        // Kiểm tra dữ liệu đầu vào
        if (!courses || courses.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Danh sách sản phẩm không được để trống',
            })
        }

        // Tạo đơn hàng mới
        const newOrder = new Order({
            userId,
            courses,
            total,
            quantity
        })

        const savedOrder = await newOrder.save()

        res.status(201).json({
            success: true,
            order: savedOrder,
        })
    } catch (error) {
        console.error('Error creating order:', error)
        res.status(500).json({
            success: false,
            message: 'Lỗi máy chủ',
            error: error.message,
        })
    }
}

export const listOrder = async (req, res) => {
    try {
        const userId = req.user.userId

        const orders = await Order.find({ userId }).lean()

        res.json(orders)
    } catch (error) {
        console.error('Error fetching orders:', error)
        res.status(500).json({ message: error.message })
    }
}

