const {books} = require('../db/book')
const booksTable = require('../models/book.model')
const db = require('../db')
const {eq, ilike} = require('drizzle-orm')
const {sql} = require('drizzle-orm')
const { authorsTable } = require('../models')
exports.getAllBooks = async (req,res) => {
    const search = req.query.search
    if (search) {
        // const books = await db.select().from(booksTable).where(ilike(booksTable.title, `%${search}%`))
        const books = await db.select().from(booksTable)
        .where(sql`to_tsvector('english', ${booksTable.title}) @@ to_tsquery('english', ${search})`);
        
        return res.json(books)
    }
    console.log(search);
    
    const books = await db.select().from(booksTable)
    return res.json(books)
}

exports.getBookById = async (req,res)=>{
    const id = req.params.id
    const book = await db.select().from(booksTable).where((table)=>eq(table.id,id)).leftJoin(authorsTable,eq(authorsTable.id,booksTable.id)).limit(1)

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