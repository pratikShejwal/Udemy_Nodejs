const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    console.log('sent request');
    res.end('thanks')
})

server.listen(8000,()=>{
    console.log('success');
})