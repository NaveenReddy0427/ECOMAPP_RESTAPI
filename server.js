import express from "express"
import productRouter from "./src/features/product/productRoutes.js"
import userRouter from "./src/features/user/userRoutes.js"
import jwtAuth from "./src/middlewares/jwtMiddleware.js"

const server = express()

// middleware to parse the json data
server.use(express.json())

server.use('/api/products', jwtAuth, productRouter)
server.use('/api/users', userRouter)

server.get('/', (req, res)=>{
    res.send("Hello World")
})

server.listen(3003, ()=>{
    console.log("Server is running on port 3003")
})