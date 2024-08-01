import express from "express"

const server = express()

server.get('/', (req, res)=>{
    res.send("Hello World")
})

server.listen(3003, ()=>{
    console.log("Server is running on port 3003")
})