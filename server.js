import express from "express"
import ProductRoutes from "./src/features/product/productRoutes.js"

const server = express()

server.use('/api/products', ProductRoutes)

server.get('/', (req, res)=>{
    res.send("Hello World")
})

server.listen(3003, ()=>{
    console.log("Server is running on port 3003")
})