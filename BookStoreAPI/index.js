require('dotenv/config')
const express = require('express')
const bookrouter = require('./routes/book.routes')
const authorRouter = require('./routes/author.routes')
// const {middleware} = require('./middlewares/customMiddleware')
const app = express()
const PORT = 8000

app.use(express.json()) //global middleware
// app.use(middleware)
app.use('/books',bookrouter)
app.use('/authors',authorRouter)

app.listen(PORT,()=>{
    console.log('server is running');
})
