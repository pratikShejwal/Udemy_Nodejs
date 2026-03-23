const { log } = require('console')
const fs = require('fs')
// console.log(fs);

const text = fs.readFileSync('node.txt','ascii')
fs.writeFileSync('node.txt','\nGood Morning')
fs.appendFileSync('node.txt','\nGood Night')

// fs.mkdirSync('pratiek')
// fs.rmdirSync('pratiek')
fs.unlinkSync('node.txt')

// console.log(text)
