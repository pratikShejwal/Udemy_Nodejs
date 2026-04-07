const {books} = require('../db/book')
const booksTable = require('../models/book.model')
const db = require('../db')
const {eq} = require('drizzle-orm')

exports.getAllBooks = async (req,res)=>{
    const books = await db.select().from(booksTable)
    return res.json(books)
}

exports.getBookById = async (req,res)=>{
    const id = req.params.id
    const book = db.select().from(booksTable).where((table)=>eq(table.id,id)).limit(1)

    if(!book){
        return res.status(404).json({error:'Book not found'})
    }
    else return res.json(book)
}

exports.createBook = async (req,res)=>{
     const {title, description, authorId} = req.body

    if (!title || title === '') {
        return res.status(400).json({error:'title is required'})
    }

   const [result] = await db.insert(booksTable).values({
        title,
        description,
        authorId,
    }).returning({
        id:booksTable.id
    })
    res.status(201).json({message: 'book created'})
}

exports.deleteBookById = (req,res)=>{
    const id = req.params.id
    db.delete().where(eq(booksTable.id,id))
    res.status(200).json({message:"book deleted"})
}