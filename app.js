require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 1337
const colors = require('colors')

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log(`The server has been started on port ${PORT}` .green)
})
