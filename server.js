import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoute from './routes/authRoutes.js'

//configure dotenv
dotenv.config()

//database config
connectDB()

//rest object
const app = express()

//middlewares
app.use(express.json())

//routes
app.use('/api/v1/auth', authRoute)

//rest api
app.get('/', (req, res) => {
    res.send('<h1>welcome to ecommerce app</h1>')
})

//run listen
app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT} `)
})