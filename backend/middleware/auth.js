import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]

    if (!token) return res.status(401).json({ message: 'Không có token' })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = {
            userId: decoded.id, // để controller lấy được userId
            username: decoded.username,
            role: decoded.role,
        }
        next()
    } catch (err) {
        res.status(403).json({ message: 'Token không hợp lệ' })
    }
}

export default auth
