import express from 'express';
import controller from './app.controller';
const router = express.Router();

router.get("/read/csv/books", controller.read_books)
router.get("/read/csv/magazines", controller.read_magazines)
router.get("/read/csv/authors", controller.read_authors)
router.get("/book/isbn", controller.find_book_by_isbn)
router.get("/book/email", controller.find_book_by_email)
router.get("/magazine/isbn", controller.find_magazine_by_isbn)
router.get("/magazine/email", controller.find_magazine_by_email)
router.get("/books/magazine/sort", controller.sort_books_and_magazine)
router.post("/books", controller.add_books)
router.post("/magazines", controller.add_magazines)
router.get("/export/books", controller.export_books)
router.get("/export/magazine", controller.export_magazine)



export default router