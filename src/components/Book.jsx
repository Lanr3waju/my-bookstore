import PropTypes from "prop-types";

function Book({ book: { title, author } }) {
  console.log(title)
  return (
    <>
      <h2>{title}</h2>
      <h3>{author} </h3>
      <button className="border-b-8" type="button">Remove</button>
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
};
