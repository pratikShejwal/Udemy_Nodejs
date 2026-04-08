// const {books} = require('../db/book')
// const authorsTable = require('../models/author.model')
// const db = require('../db')
// const {eq, ilike} = require('drizzle-orm')
// const {sql} = require('drizzle-orm')
// exports.getAllAuthors = async (req,res)=>{
//     const search = req.query.search
//     if (search) {
//         // const books = await db.select().from(authorsTable).where(ilike(authorsTable.title, `%${search}%`))
//         const books = await db.select().from(authorsTable)
//         .where(sql`to_tsvector('english', ${authorsTable.title}) @@ to_tsquery('english', ${search})`);
        
//         return res.json(books)
//     }
//     console.log(search);
    
//     const books = await db.select().from(authorsTable)
//     return res.json(books)
// }

// exports.getAuthorById = async (req,res)=>{
//     const id = req.params.id
//     const book = await db.select().from(authorsTable).where((table)=>eq(table.id,id)).limit(1)

//     if(!book){
//         return res.status(404).json({error:'Book not found'})
//     }
//     else return res.json(book)
// }

// exports.createAuthor = async (req,res)=>{
//      const {firstName, lastName, email} = req.body

//     if (!title || title === '') {
//         return res.status(400).json({error:'title is required'})
//     }

//    const [result] = await db.insert(authorsTable).values({
//         firstName,
//         lastName,
//         email,
//     }).returning({
//         id:authorsTable.id
//     })
//     res.status(201).json({message: 'author created'})
// }

// exports.deleteAuthorById = (req,res)=>{
//     const id = req.params.id
//     db.delete().where(eq(authorsTable.id,id))
//     res.status(200).json({message:"author deleted"})
// }