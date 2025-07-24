import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

//
import authRoutes from './routes/auth.js'
import courseRoutes from './routes/courses.js'
import userRoutes from './routes/users.js'

dotenv.config()
const app = express()
//
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log('Server running on port 5000')
        })
    })
    .catch(err => console.error('DB connection error:', err))
