import PropTypes from "prop-types";

function Book({ title, author }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{author} </h3>
      <button type="button">Remove</button>
    </>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
