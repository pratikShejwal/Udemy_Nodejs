const express = require('express')

const app = express()
const PORT = 8000

app.use(express.json())

const books = [
    {id:1, title: 'Book One', author: 'Author One'},
    {id:2, title: 'Book Two', author: 'Author Two'}
]

app.get('/books',(req,res) =>{
    res.json(books)
})

app.get('/books/:id',(req,res) =>{
    const id = req.params.id
    const book = books.find(e => e.id == id)

    if(!book){
        return res.status(404).json({error:'Book not found'})
    }
    else return res.json(book)
  //  res.json(books)
})

app.post('/books',(req,res) =>{
    const {title, author} = req.body

    if (!title || title === '') {
        return res.status(400).json({error:'title is required'})
    }
    if (!author || author === '') {
        return res.status(400).json({error:'author is required'})
    }

    const id = books.length+1
    const book = {
        id,
        title,
        author
    }
    books.push(book)
    res.status(201).json({message: 'book created'})
})

app.delete('/books/:id',(req,res)=>{
    const id = req.params.id
    const bookId = books.findIndex((e)=> e.id == id)

    books.splice(bookId,1)
    res.status(200).json({message:"book deleted"})
})

app.listen(PORT,()=>{
    console.log('server is running');
})
