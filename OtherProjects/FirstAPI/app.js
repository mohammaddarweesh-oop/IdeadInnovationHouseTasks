const express = require("express");
const app = express();

app.use(express.json());

class Book {
  constructor(id, name, title) {
    this.id = id;
    this.name = name;
    this.title = title;
  }

  changeTranslation(language) {
    //template literal
    this.title = `${this.title} - (${language})`;
  }

  static validate(book) {
    if (!(book instanceof Book))
      return "book must be instance of the Book class";
    if (!book.id || typeof book.id !== "number")
      return "Invalid Or Missing ID ";
    if (!book.name || typeof book.name !== "string")
      return "Invalid Or Missing Name ";
    if (!book.title || typeof book.title !== "string")
      return "Invalid Or Missing Title ";
  }
}
let books = [
  { id: 1, name: "moh", title: "eefef" },
  { id: 2, name: "moh", title: "eefef" },
  { id: 3, name: "moh", title: "eefef" },
];
app.post("/books", (req, res) => {
  console.log(req.body);
  const { id, name, title } = req.body;

  if (books.some((book) => book.id === id)) {
    return res.status(400);
  }

  const newBook = new Book(id, name, title);

  const err = Book.validate(newBook);
  if (err) return res.status(400).json({ err });
  books.push(newBook);
  res.status(201).json({ message: "Book has been added" });
});

app.get("/books", (req, res) => {
  console.log(books);

  res.status(200).json(books);
});

const port = 3002 || process.env.PORT;
app.listen(3002, () => {
  console.log(`server running http://localhost:${port}`);
});
