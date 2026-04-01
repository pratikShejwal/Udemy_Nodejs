const http = require('node:http')

const server = http.createServer((req,res)=>{
    console.log(Date.now());
    console.log(req.headers)
    //
    switch (req.url) {

        case '/':
             res.writeHead(200)
              res.end('Home-Page')
            break;
         case '/contact':
            res.end('Contact-Page')
            break;
        default:
            res.end('Error')
              res.writeHead(400)
              
            break;
    }
    res.end('Ok')
})

server.listen(8000,()=>{
    console.log('running'); 
})