import { useState } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from "nanoid";
// import your Action Creators
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch()

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    id: nanoid()
  });

  function handleNewBook({ target: { value, name } }) {
    setNewBook((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const submitBook = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setNewBook((prevFormData) => ({
      ...prevFormData, title: "", author: "", id: nanoid()
    }))
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
