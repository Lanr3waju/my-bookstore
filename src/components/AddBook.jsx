import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import your Action Creators
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch()
  const booksList = useSelector((state) => state.booksReducer)

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  function handleNewBook({ target: { value, name } }) {
    setNewBook((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const submitBook = (e) => {
    e.preventDefault();
    const id = booksList.length + 1
    const { title, author } = newBook;
    const bookToAdd = {
      title,
      author,
      id,
    }
    dispatch(addBook(bookToAdd));
  }

  const { title, author } = newBook;
  return (
    <form onSubmit={submitBook}>
      <h1>Add Book</h1>
      <input
        className="border-blue border-4"
        aria-label="Book Title"
        placeholder="Enter book title"
        type="text"
        id="title"
        value={title}
        onChange={handleNewBook}
        name="title"
      />

      <input
        className="border-blue border-4"
        aria-label="Book Author"
        placeholder="Enter book author"
        type="text"
        id="author"
        value={author}
        onChange={handleNewBook}
        name="author"
      />

      <button type="submit" >Submit</button>
    </form>
  );
}

export default AddBook;
