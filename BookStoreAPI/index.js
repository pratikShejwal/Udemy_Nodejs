const express = require('express')

const app = express()
const PORT = 8000

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

app.listen(PORT,()=>{
    console.log('server is running');
})
