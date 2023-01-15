import PropTypes from 'prop-types';
function Book({ title, author }) {
    return (
        <ul>
            <li>{title}</li>
            <li>{author}</li>
        </ul>
    )
}

export default Book;

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
