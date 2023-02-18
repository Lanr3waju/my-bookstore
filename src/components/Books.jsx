import PropTypes from "prop-types";
import Book from "./Book";

function Books({ books }) {
  return (
    <>
      <ul className="my-6">
        {books.map(({ id, title, author }) => (
          <li key={id}>
            <Book title={title} author={author} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Books;

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
