const express = require('express')
const router = express.Router()
const authorsTable = require('../models/author.model')
const db = require('../db')

router.get('/',async(req,res)=>{
    const authors = await db.select().from(authorsTable)
    return res.json(authors)
})

module.exports = router