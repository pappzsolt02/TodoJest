const express = require("express")

const app = express()

app.get('/', (req,res)=>{
    res.json("Helló")
})

app.listen(3000, ()=>{
    console.log("A server fut");
})