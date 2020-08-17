/** @class Booklist representing a list of books. */
class Booklist {
  /**
   * Creates an instance of Booklist
   * basic OOP excercise at WBS Coding School
   *
   * @constructor
   * @author: J
   */
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
  constructor(title, genre, author, read) {
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._read = read;
    this._dateRead = null;
  }
}
