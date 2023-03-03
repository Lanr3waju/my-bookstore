import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import your Action Creators
import { editBook } from "../redux/books/books";

function EditBook({
  title: currentTitle,
  author: currentAuthor,
  id: bookId,
  closeEditMenu,
}) {
  const presentBooks = useSelector((state) => state.booksReducer.present);
  const presentBook = presentBooks.find(({ id }) => id === bookId);
  const dispatch = useDispatch();

  const [editedBook, setEditedBook] = useState({
    title: currentTitle,
    author: currentAuthor,
    id: bookId,
  });

  function handleEditedBook({ target: { value, name } }) {
    setEditedBook((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const submitBook = (e) => {
    e.preventDefault();
    // Check if book is actually edited to prevent unnecessary EDIT_ACTION calls.
    if (
      presentBook.title !== editedBook.title ||
      presentBook.author !== editedBook.author
    ) {
      dispatch(editBook(editedBook));
    }

    closeEditMenu();
  };

  const { title, author } = editedBook;
  return (
    <form className="flex flex-col md:flex-row items-center" onSubmit={submitBook}>
      <input
        className="md:w-2/6 w-full p-2 m-3 shadow-md rounded-lg shadow-black font-medium text-black"

        aria-label="Book Title"
        placeholder="Enter book title"
        type="text"
        id="title"
        value={title}
        onChange={handleEditedBook}
        name="title"
      />

      <input
        className="md:w-2/6 w-full p-2 m-3 shadow-md rounded-lg shadow-black font-medium text-black"
        aria-label="Book Author"
        placeholder="Enter book author"
        type="text"
        id="author"
        value={author}
        onChange={handleEditedBook}
        name="author"
      />

      <button
        disabled={title === "" || author === ""}
        className="bg-slate-900 p-2 text-white disabled:opacity-10"
        type="submit"
      >
        Change
      </button>
    </form>
  );
}

export default EditBook;

EditBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  closeEditMenu: PropTypes.func.isRequired,
};
