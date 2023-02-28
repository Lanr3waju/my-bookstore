import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
// import your Action Creators
import { addBook } from "../redux/books/books";

function AddBook() {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    id: nanoid(),
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
      ...prevFormData,
      title: "",
      author: "",
      id: nanoid(),
    }));
  };

  const { title, author } = newBook;
  return (
    <>
      <h1 className="font-semibold text-sky-500 text-lg">ADD NEW BOOK</h1>
      <form className="" onSubmit={submitBook}>
        <input
          className="w-2/6 p-2 m-3 shadow-sm shadow-black font-medium text-black"
          aria-label="Book Title"
          placeholder="Enter book title"
          type="text"
          id="title"
          value={title}
          onChange={handleNewBook}
          name="title"
        />

        <input
          className="w-2/6 p-2 m-3 shadow-sm shadow-black font-medium text-black"
          aria-label="Book Author"
          placeholder="Enter book author"
          type="text"
          id="author"
          value={author}
          onChange={handleNewBook}
          name="author"
        />

        <button
          disabled={title === "" || author === ""}
          className="bg-slate-900 p-2 text-white disabled:opacity-10"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddBook;
