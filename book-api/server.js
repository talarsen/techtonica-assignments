const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let books = [{
    "isbn": "17824",
    "title": "Cadillac Desert",
    "author": "Marc Reisner",
    "publish_date": "1996",
    "publisher": "Penguin Books",
    "numOfPages": 494,
},
{
    "isbn": "34532649",
    "title": "Desert Solitaire",
    "author": "Edward Abbey",
    "publish_date": "1968",
    "publisher": "First Ballantine Books",
    "numOfPages": 303,
},
{
    "isbn": "59994",
    "title": "Beyond the Hundredth Meridian",
    "author": "Wallace Stegner",
    "publish_date": "2014-02-01",
    "publisher": "Penguin Books",
    "numOfPages": 420,
},
{
  "isbn": "49208",
  "title": "Into Thin Air",
  "author": "Jon Krakauer",
  "publish_date": "1997",
  "publisher": "Double Day",
  "numOfPages": 378,
}
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;//request in the object that the browser is requesting

    // output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/book', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;

    // searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;

    // remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('Book is deleted');
});

app.post('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]

        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    // sending 404 when not found something is a good practice
    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));