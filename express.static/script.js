const http = require('http');
//http module ka use HTTP server banane ke liye hota hai.


const fs = require('fs');
//fs (File System) module ka use file operations (jaise read/write) ke liye hota hai.


const hostname = '127.0.0.1';
//hostname ko '127.0.0.1' set kiya gaya hai, jo localhost ko represent karta hai.


const port = 3000;
//port ko 3000 set kiya gaya hai, jahan server listen karega.


const home = fs.readFileSync('./home.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')
//fs.readFileSync() ka use karke HTML files ko synchronously read kiya gaya hai.
//Yeh method program execution ko tab tak rokta hai jab tak file completely read na ho jaye. 


const server = http.createServer((req,res)=>{  

    console.log(req.url)       

    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        res.end(home);
    }
    else if(url === '/about') {
        res.end(about);
    }
    else if(url === '/services') {
        res.end(services);
    }
    else if(url === '/contact') {
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
    }
})

//http.createServer() function ek HTTP server create karta hai.

//req.url se incoming request ka URL path milta hai.

//Based on URL, corresponding HTML content serve kiya jata hai.

//Agar URL match nahi karta, to 404 error response send kiya jata hai.



server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
})

//server.listen() method server ko specified hostname aur port par listen karne ke liye instruct karta hai.

//Callback function successful server start hone par message log karta hai.
