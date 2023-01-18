import { useState } from "react";
import { Link } from "react-router-dom";
import AddBook from "./AddBook";
import Book from "./Book";


function Books() {
  const [books] = useState([]);

  const bookEl =
    books.map((book) => (
      <li key={book.title}>
        <Link to={`/book/${book.title}`} key={book.title}>
          <Book key={book.title} author={book.author} title={book.title} />
        </Link>
      </li>
    )) || "";

  return (
    <>
      <ul>{bookEl}</ul>
      <AddBook />
    </>
  );
}

export default Books;
