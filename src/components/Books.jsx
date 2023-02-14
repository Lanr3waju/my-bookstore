import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/books';
import AddBook from "./AddBook";
// import Book from "./Book";

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

  // const dispatch = useDispatch()

  // const handleRemoveBook = (id) => (
  //   // dispatch(removeBook(id))
  // )

  return (
    <>
      <ul>{books.length > 0 && books.map((book) => (
        <li key={book.title}>
          {/* <Link to={`/book/${book.title}`}> */}
          {/* <Book book={books} handleRemoveBook={(id) => handleRemoveBook(id)} /> */}
          {/* </Link> */}
        </li>
      ))
      }</ul>
      <AddBook />
    </>
  );
}

export default Books;
