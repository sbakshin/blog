import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import authRouter from "./routes/auth.js";


const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

// Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/auth', authRouter)

async function startApp() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xzgqunu.mongodb.net/blog?retryWrites=true&w=majority`)

        app.listen(PORT, () => console.log('Server is started!'))
    } catch (e) {
        console.log(e)
    }
}

startApp()

