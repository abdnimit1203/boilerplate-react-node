const express  = require("express")
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

// middleware

app.use(cors())
app.use(express.json())



app.get('/', (req,res)=>{
    res.send("My server is running...")
})
app.get('/data', (req,res)=>{
    res.send("data 1, data 2, ....")
})


app.listen(port, ()=>{
    console.log(`My server running on port: ${port}`);
})
