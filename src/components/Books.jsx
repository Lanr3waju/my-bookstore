import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddBook from "./AddBook";
import Book from "./Book";

const data = [
  {
    id: 1,
    author: "Kyle Simpson",
    title: "You don't know JS"
  },
  {
    id: 2,
    author: "Chinua Achebe",
    title: "Things fall apart"
  }
]


function Books() {
  const [books] = useState(data);

  return (
    <>
      <ul>{books?.length > 0 && books?.map((book) => (
        <li key={book.title}>
          <Link to={`/book/${book.title}`}>
            <Book book={book} />
          </Link>
        </li>
      ))
      }</ul>
      <AddBook />
    </>
  );
}

export default Books;
