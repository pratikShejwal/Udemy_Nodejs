const express = require('express')
const router = express.Router()
const {books} = require('../db/book')
const controller = require('../controllers/book.controller')
const {middleware} = require('../middlewares/customMiddleware')
router.get('/',middleware,controller.getAllBooks)

router.get('/:id',controller.getBookById)

router.post('/',controller.createBook)

router.delete('/:id',controller.deleteBookById)

module.exports = router