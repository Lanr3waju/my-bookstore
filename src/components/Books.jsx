import { useSelector } from "react-redux";
import AddBook from "./AddBook";
import Book from "./Book";

function Books() {
  const booksList = useSelector((state) => state.booksReducer);

  return (
    <>
      {
        booksList.length === 0 &&
        <h2 className="text-red-600 text-xl font-bold animate-pulse">
          No Book Yet
        </h2>
      }

      <ul className="my-6">
        {
          booksList.map(({ id, title, author }) => (
            <li key={id}>
              <Book title={title} author={author} id={id} />
            </li>
          ))
        }
      </ul>
      <AddBook />
    </>
  );
}

export default Books;
