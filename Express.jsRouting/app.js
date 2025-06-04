const express = require('express');
const app = express();
const port = 80;

app.get('/',(req,res)=>{
    res.send("This is my first website in node.js")
});

app.get('/home',(req,res)=>{
    //res.send("This is my first home page in node.js")
    res.status(200).send("This is my first website in the world")
});

app.get('/about',(req,res)=>{
    res.send("This is my first about page in node.js")
});

app.get('/other',(req,res)=>{
    res.status(404).send("This will be created the eroor")
});

app.post('/about',(req,res)=>{
    res.send("This is post of my first in node.js")
});

app.listen(port,()=>{
    console.log(`This is my first application ${port}`)
})