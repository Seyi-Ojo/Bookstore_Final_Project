const express = require('express')
const {AddBookValidationMW, UpdateBookValidationMW} = require("../validations/book.validator")
const bookController = require("../controllers/book.controller")

const bookRouter = express.Router()

bookRouter.get('/', bookController.getAllBooks)

bookRouter.get('/:id', bookController.getBookByID)

bookRouter.post('/', AddBookValidationMW, bookController.addBook)

bookRouter.put('/:id', UpdateBookValidationMW, bookController.updateBook)

bookRouter.delete('/:id', bookController.deleteBookByID)


module.exports = bookRouter