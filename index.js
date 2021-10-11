const express = require("express");


const app = express();

app.get("/",async (req,res)=>{
    res.status(200).send("hello world");
})

const port = 3001;

app.listen(port,()=>{
    console.log(`listening at port ${port}`); 
});