import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ title, author }) {
  return (
    <Link to={`/book/${title}`}>
      <ul>
        <li>{title} Hello</li>
        <li>{author} Book</li>
      </ul>
    </Link>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
