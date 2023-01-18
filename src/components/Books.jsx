import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddBook from "./AddBook";
import Book from "./Book";

function Books() {
  const [books, setBooks] = useState([])

  const myBook = [
    { author: "Kyle Simpson", title: "You no Sabi JavaScript" },
    { author: "Chinua Achebe", title: "Things Fall Apart" }
  ]

  useEffect(() => {
    setBooks(myBook)
  }, [1]);

  const bookEl = books.map((book) => (
    <li key={book.title}>
      <Link to={`/book/${book.title}`}>
        <Book author={book.author} title={book.title} />
      </Link>
    </li>
  )) || ""

  return (
    <>
      <ul>
        {bookEl}
      </ul>
      <AddBook />
    </>
  );
}

export default Books;
