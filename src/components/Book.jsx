import PropTypes from "prop-types";

function Book({ book: { title, author, id }, handleRemoveBook }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{author} </h3>
      <button onClick={handleRemoveBook(id)} className="border-b-8" type="button">Remove</button>
      <hr />
    </>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired
};
