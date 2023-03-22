const http = require('http');

const server = http.createServer((req, res)=>{
   if(req.url === '/') {
     res.end("This the Home page")
   }
   if(req.url === '/about') {
     res.end('This the about page for Meraplay')
   }
   res.end(
    `<h1>Oops</h1>
    <p>This page doesn't exist</p>
    <a href='/' >Go back to the home page</a>
    `)
})

server.listen(5000)