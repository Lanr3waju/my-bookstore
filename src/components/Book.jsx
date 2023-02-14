import PropTypes from "prop-types";

function Book({ title, author, id }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <h3>{author} </h3>
    </section>
  );
}

export default Book;

Book.defaultProps = {
  id: '',
  title: '',
  author: '',
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};