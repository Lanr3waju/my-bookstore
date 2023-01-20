import { useState } from "react";
import { useDispatch } from 'react-redux';
// import your Action Creators
import { nanoid } from "nanoid";
import { addBook } from '../redux/books/books';

const dispatch = useDispatch()

function AddBook() {

  const [newBook, setNewBook] = useState({
    id: nanoid(),
    title: "",
    author: "",
  });

  function handleNewBook({ target: { value, name } }) {
    setNewBook((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const submitBook = () => {
    dispatch(addBook(newBook));
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
