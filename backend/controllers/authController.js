import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { username, password } = req.body
    const passwordHash = await bcrypt.hash(password, 10)

    const existing = await User.findOne({ username })
    if (existing) return res.status(400).json({ message: 'Tài khoản đã tồn tại' })

    const user = new User({ username, passwordHash })
    await user.save()
    res.status(201).json({ message: 'Đăng ký thành công' })
}

export const login = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) return res.status(400).json({ message: 'Sai tài khoản' })

    const isMatch = await bcrypt.compare(password, user.passwordHash)
    if (!isMatch) return res.status(400).json({ message: 'Sai mật khẩu' })

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )
    res.json({ token, role: user.role, username: user.username })
}
