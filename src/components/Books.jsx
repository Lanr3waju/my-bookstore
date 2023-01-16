import AddBook from "./AddBook";
import Book from "./Book";

function Books() {
  return (
    <>
      <ul>
        <li>
          <Book />
          <button type="button">Remove</button>
        </li>
      </ul>
      <AddBook />
    </>
  );
}

export default Books;
