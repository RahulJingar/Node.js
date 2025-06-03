const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.use('/static',express.static('static'))


// Set the template engis as pug
app.set('view engine', 'pug')

//Set the view directory
app.set('views engine', path.join(__dirname, 'views'))

//Our pug demo endpoint
app.get('/demo', (req,res)=>{
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to pubg!' })
});

app.get('/',(req,res)=>{
    res.status(200).send("This is my first website in node js")
});


app.get('/about',(req,res)=>{
    res.send("This is my about page and will be write the second time website in node js")
});

app.get('/about',(req,res)=>{
    res.send("This is my about page website in node js")
});

app.get('/this',(req,res)=>{
    res.status(404).send("This page is not found page in node js")
});


app.listen(port,()=>{
    console.log("This is done")
});


