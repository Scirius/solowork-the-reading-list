/** @class Booklist representing a list of books.
 * see readme.md for excercise description
 */
class BookList {
  /**
   * Creates an instance of Booklist
   * basic OOP excercise at WBS Coding School
   *
   * @constructor
   * @author: J
   */
  constructor() {
    this._books = [];
    this._numberOfReadBooks = 0;
    this._numberOfUnreadBooks = 0;
    this._nextBook = null;
    this._currentBook = null;
    this._lastBookRead = null;
  }

  get numberOfReadBooks() {
    return this._numberOfReadBooks;
  }
  get currentBook() {
    return `${this._currentBook._title} by ${this._currentBook._author}`;
  }
  get lastBookRead() {
    if (this._lastBookRead) {
      return `${this._lastBookRead._title} by ${this._lastBookRead._author} on ${this._lastBookRead._dateRead}`;
    } else {
      return "There is no read book in the list.";
    }
  }

  /**
   * Adds a new book to the list and counts read/unread
   * also checks which book was read last (read==true and latest _dateRead)
   *
   * @param {Book} book The book to add.
   */
  add(book) {
    this._books.push(book);
    if (book.read) {
      this._numberOfReadBooks++;
      if (this._lastBookRead) {
        if (this._lastBookRead._dateRead < book._dateRead) {
          this._lastBookRead = book;
        }
      } else {
        this._lastBookRead = book;
      }
    } else {
      this._numberOfUnreadBooks++;
    }
  }
  /**
   * Gets first unread book from list
   *
   */
  getFirstUnreadBook() {
    return this._books.find((book) => book.read === false);
  }
  /**
   *  Actually starts reading with the first unread on list
   */
  startReading() {
    if (this._books.length === 0) {
      console.log("You have no books in your list to read.");
      return;
    } else {
      var newBook = this.getFirstUnreadBook();
      if (newBook) {
        console.log(`Ok, you start reading with your first unread book on list (${newBook._title} by ${newBook._author})`);
        this._currentBook = newBook;
      } else {
        console.log("Oh no, you have no more unread books!");
      }
    }
  }
  /**
   * Finishes the current book
   * marks the book that is currently being read as "read"
   * gives it a read date of new Date(Date.now())
   * changes the last book read to be the book that just got finished
   * changes the current book to be the next book to be read
   * changes the next book to be read property to be the first unread book you find in the list of books
   *
   */
  finishCurrentBook() {
    if (!this._currentBook) {
      console.log("There is no book you're currently reading.");
    } else {
      console.log(`You just finished reading ${this._currentBook._title} by ${this._currentBook._author}`);
      this._currentBook._read = true;
      this._currentBook._dateRead = new Date(Date.now());
      this._lastBookRead = this._currentBook;
    }

    //this._previousBook = this._currentBook;
    //this._currentBook = this._books.find((book) => book.read === false);
  }
}

/* @class Book representing a single book. */
class Book {
  /**
   * Creates an instance of a single book
   *
   * @constructor
   * @author: J
   * @param {string} title The book's title
   * @param {string} genre The genre the book fits into
   * @param {string} author The author of the book
   * @param {boolean} read The status of the book being read
   * @param {date} dateRead The date of the book being read
   */
  constructor(title, genre, author, read = false, dateRead = null) {
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._read = read;
    this._dateRead = dateRead; //finished
  }
  /**
   * returns read status via getter
   */
  get read() {
    return this._read;
  }

  /**
   * marks book as read
   */
  markAsFinished() {
    this._read = true;
  }

  /**
   * 1sets book dateRead (finish date)
   * @param {date} finishDate The date of the book being finished
   */
  set dateRead(finishDate) {
    this._dateRead = finishDate;
  }
}

/**
 * Example bookList
 */
const bookList = new BookList();

bookList.add(new Book("The Mambo Kings Play Songs of Love", "novel", "Oscar Hijuelos"));
bookList.add(new Book("Foundation", "Science-fiction", "Isaac Asimov", true, new Date("2020-08-01T23:24:00")));
bookList.add(new Book("Endgame", "Play", "Samuel Beckett", true, new Date("2020-08-07T19:54:00")));
bookList.add(new Book("On the Road", "Novel", "Jack Kerouac"));
bookList.add(new Book("The Myth of Sisyphus", "Essay", "Albert Camus"));

console.log(bookList);
console.log(bookList.numberOfReadBooks);
bookList.startReading();
console.log(`Current book: ${bookList.currentBook}`);
console.log(`Last book read: ${bookList.lastBookRead}`);
bookList.finishCurrentBook();
console.log(`Last book read: ${bookList.lastBookRead}`);
bookList.startReading();
console.log(`Current book: ${bookList.currentBook}`);
console.log(`Last book read: ${bookList.lastBookRead}`);
bookList.finishCurrentBook();
console.log(`Last book read: ${bookList.lastBookRead}`);
bookList.startReading();
console.log(`Current book: ${bookList.currentBook}`);
console.log(`Last book read: ${bookList.lastBookRead}`);
bookList.finishCurrentBook();
console.log(`Last book read: ${bookList.lastBookRead}`);
bookList.startReading();
