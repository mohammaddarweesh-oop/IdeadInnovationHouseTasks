const connection = require("../config/db");

/**
 * POST /api/books
 * Creates a new book entry.
 * Expects: { id, name, title } in the request body.
 * Returns: 201 Created on success, 500 on database error.
 */
exports.createBook = (req, res) => {
  const { name, id, title } = req.body;
  const query = "INSERT INTO books (id, name, title) VALUES (?, ?, ?);";

  connection.query(query, [id, name, title], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error adding new book", details: err.message });
    }
    res.status(201).json({ message: "Added book successfully" });
  });
};

/**
 * GET /api/books
 * Retrieves all books from the database.
 * Returns: 200 OK with an array of books, 500 on database error.
 */
exports.getAllBooks = (req, res) => {
  const query = "SELECT * FROM books;";

  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving books", details: err.message });
    }
    res.status(200).json(result);
  });
};

/**
 * GET /api/books/:id
 * Retrieves a single book by its ID.
 * Params: Book ID in the URL.
 * Returns: 200 OK with the book data, 404 if not found, 500 on error.
 */
exports.getBookById = (req, res) => {
  const query = "SELECT * FROM books WHERE id = ?;";
  const { id } = req.params;

  connection.query(query, [id], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving book", details: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(results[0]);
  });
};

/**
 * PUT /api/books/:id
 * Fully updates a book (name and title) by its ID.
 * Params: Book ID in the URL.
 * Body: { name, title }.
 * Returns: 200 OK, 404 if ID not found, 500 on error.
 */
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { name, title } = req.body;
  const query = "UPDATE books SET name = ?, title = ? WHERE id = ?;";

  connection.query(query, [name, title, id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error updating book", details: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully" });
  });
};

/**
 * DELETE /api/books/:id
 * Deletes a book by its ID.
 * Params: Book ID in the URL.
 * Returns: 200 OK, 404 if ID not found, 500 on error.
 */
exports.deleteBook = (req, res) => {
  const query = "DELETE FROM books WHERE id = ?;";
  const { id } = req.params;

  connection.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error deleting book",
        details: err.message,
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  });
};

/**
 * PATCH /api/books/:id/translation
 * Appends a translation language to the book's title.
 * Params: Book ID in the URL.
 * Body: { language - (string) }.
 * Returns: 200 OK, 404 for invalid/missing language or missing ID, 500 on error.
 */
exports.addTranslation = (req, res) => {
  const { language } = req.body;
  const { id } = req.params;
  const query =
    "UPDATE books SET title = CONCAT(title, ' - (', ?, ')') WHERE id = ?;";

  if (!language || typeof language !== "string") {
    return res.status(400).json({ message: "Invalid or missing language" });
  }

  connection.query(query, [language, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error updating book translation",
        details: err.message,
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book translation updated successfully" });
  });
};
