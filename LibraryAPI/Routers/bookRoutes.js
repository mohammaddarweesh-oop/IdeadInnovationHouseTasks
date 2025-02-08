const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  addTranslation,
} = require("../Controllers/bookController");

router.route("/books").post(createBook).get(getAllBooks);
router.route("/books/:id").get(getBookById).put(updateBook).delete(deleteBook);
router.route("/books/:id/translation").patch(addTranslation);

module.exports = router;
