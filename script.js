const { log } = require('console')
const fs = require('fs')

fs.readFile('node.txt','ascii',(error,data)=>{
   if (error) {
    console.log(error);
   } else console.log(data);
    
})