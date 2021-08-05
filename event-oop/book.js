class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.renewalLimit = 5;
  }
}

class AudioBook {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.lengthInMinutes = 90;
  }
}

class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = []; // list of books checked out from library
  }

  checkOut(book) {
    this.libraryBooks.push(book);
  }

  //Add a function on Borrower called getLastBook() that returns the last book they borrowed
  getLastBook(book) {
    return this.libraryBooks.length -1
  }
}

//Create at least 2 instances of Borrower, 2 instances of regular Book, and 2 instances of AudioBook
let myBook = new Book(55234, "Principles of OO Design", "Barbara", "Liskov");
let theirBook = new Book(55235, "Climbing Tall Mountains", "Alex", "Hannold");

console.log(myBook.checkout())