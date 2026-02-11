import express from "express"
import dotenv from "dotenv"
dotenv.config()    
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import itemRouter from "./routes/item.routes.js"
import shopRouter from "./routes/shop.routes.js"
import orderRouter from "./routes/order.routes.js"
import http from "http"
import { Server } from "socket.io"
import { socketHandler } from "./socket.js"

const app = express()
const server = http.createServer(app)

// Multiple origins allow karna safe hota hai (Deployment + Local)
const allowedOrigins = [
    "https://food-delivery-mern-1sq8.onrender.com",
    "https://food-delivery-mern-1sq8.onrender.com/", // With trailing slash
    "http://localhost:5173" // For local testing
];

// Socket.io configuration
const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        credentials: true,
        methods: ['POST', 'GET']
    }
})

app.set("io", io)

// Middlewares
app.use(cors({ 
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}))

app.use(express.json()) 
app.use(cookieParser()) 

// Routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/shop", shopRouter)
app.use("/api/item", itemRouter)
app.use("/api/order", orderRouter)

// Socket Handler
socketHandler(io)

// Render dynamic PORT use karta hai
const port = process.env.PORT || 5000

server.listen(port, () => {
    connectDb()
    console.log(`Server started at ${port}`)
})
