import express from "express"
import productRouter from "./src/features/product/productRoutes.js"
import userRouter from "./src/features/user/userRoutes.js"
import basicAuthorizer from "./src/middlewares/basicAuthMiddleware.js"

const server = express()

// middleware to parse the json data
server.use(express.json())

server.use('/api/products', basicAuthorizer, productRouter)
server.use('/api/users', userRouter)

server.get('/', (req, res)=>{
    res.send("Hello World")
})

server.listen(3003, ()=>{
    console.log("Server is running on port 3003")
})