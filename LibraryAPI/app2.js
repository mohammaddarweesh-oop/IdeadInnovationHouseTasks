class BookManager {
    
  constructor() {
    this.books = [];
  }

  addBook(newItem) {
    this.books.push(newItem);
  }

  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  updateBook(id, newItem) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...newItem };
    }
  }

  printBooks() {
    console.log(this.books);
  }
}

const bookManager = new BookManager();

bookManager.addBook({ id: 1, name: "test", title: "test" });
bookManager.addBook({ id: 2, name: "test 2", title: "test 2" });
bookManager.addBook({ id: 3, name: "test 3", title: "test 3" });

bookManager.updateBook(2, { name: "updated test 2", title: "updated title 2" });

bookManager.deleteBook(1);

bookManager.printBooks();

