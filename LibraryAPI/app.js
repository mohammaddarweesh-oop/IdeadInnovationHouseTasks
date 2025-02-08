const express = require("express");
// const mysql = require("mysql2");
const bookRoutes = require("./Routers/bookRoutes");
const bookshopRoutes = require("./Routers/bookshopRoutes");

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api", bookRoutes);
app.use("/api", bookshopRoutes);

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Abo0788123738",
//   database: "library",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log("Error connection to mysql: ", err);
//     return;
//   }
//   console.log("Connection Successfully MySQL");
// });

/**
 * POST /api/books
 * Creates a new book entry.
 * Expects: { id, name, title } in the request body.
 * Returns: 201 Created on success, 500 on database error.
 */
// app.post("/api/books", (req, res) => {
//   const { name, id, title } = req.body;

//   const query = "insert into books (id,name,title) values (?,?,?);";
//   connection.query(query, [id, name, title], (err, result) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: `Error add new book`, details: err.message });
//     }

//     res.status(201).json({ message: "Added book is successfully" });
//   });
// });

/**
 * GET /api/books
 * Retrieves all books from the database.
 * Returns: 200 OK with an array of books, 500 on database error.
 */
// app.get("/books", (req, res) => {
//   const query = "select * from books;";

//   connection.query(query, (err, result) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: `Error retrieving the Books`, details: err.message });
//     }
//     res.status(200).json(result);
//   });
// });

/**
 * GET /api/books/:id
 * Retrieves a single book by its ID.
 * Params: Book ID in the URL.
 * Returns: 200 OK with the book data, 404 if not found, 500 on error.
 */
// app.get("/api/books/:id", (req, res) => {
//   const query = "select * from books where id = ?;";
//   const { id } = req.params;

//   connection.query(query, [id], (err, results) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: `Error retrieving the Books`, details: err.message });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ message: "Not Found Books" });
//     }
//     res.status(200).json(results[0]);
//   });
// });

/**
 * PUT /api/books/:id
 * Fully updates a book (name and title) by its ID.
 * Params: Book ID in the URL.
 * Body: { name, title }.
 * Returns: 200 OK, 404 if ID not found, 500 on error.
 */
// app.put("/api/books/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, title } = req.body;
//   const query = "update books set name = ?, title=? where id = ?;";

//   connection.query(query, [name, title, id], (err, result) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: `Error Editing the Books`, details: err.message });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         message: "book not found by id to update.",
//       });
//     }
//     res.status(200).json(result);
//   });
// });

/**
 * DELETE /api/books/:id
 * Deletes a book by its ID.
 * Params: Book ID in the URL.
 * Returns: 200 OK, 404 if ID not found, 500 on error.
 */
// app.delete("/api/books/:id", (req, res) => {
//   const query = "delete from books where id ?;";

//   connection.query(query, [req.params.id], (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         message: `Error deleting the books by id`,
//         details: err.message,
//       });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         message: "book not found by id to update.",
//       });
//     }

//     res.status(200).json({ message: "Deleted Successfuly!" });
//   });
// });

/**
 * PATCH /api/books/:id/translation
 * Appends a translation language to the book's title.
 * Params: Book ID in the URL.
 * Body: { language - (string) }.
 * Returns: 200 OK, 404 for invalid/missing language or missing ID, 500 on error.
 */
// app.patch("/api/books/:id/translation", (req, res) => {
//   const { language } = req.body;
//   const query =
//     "update books set title = concat(title,' - (',?,')') where id=?;";

//   if (!language || typeof language !== "string") {
//     return res
//       .status(404)
//       .json({ message: "sorry invalid or missing language " });
//   }

//   connection.query(query, [language, req.params.id], (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         message: `Error deleting the books by id`,
//         details: err.message,
//       });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         message: "book not found by id to update language.",
//       });
//     }

//     res.status(200).json({ message: "Updated Language Is Successfuly!" });
//   });
// });

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
