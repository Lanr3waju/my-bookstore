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
    chapters: "",
    chapter: 0,
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
      chapters: "",
      id: nanoid(),
    }));
  };

  const { title, author, chapters } = newBook;
  return (
    <>
      <h1 className="font-semibold text-sky-500 text-lg">ADD NEW BOOK</h1>
      <form
        className="flex flex-col items-center md:flex-row"
        onSubmit={submitBook}
      >
        <input
          className="md:w-2/6 p-2 w-full m-3 shadow-md rounded-lg shadow-black font-medium text-black"
          aria-label="Book Title"
          placeholder="Enter book title"
          type="text"
          id="title"
          value={title}
          onChange={handleNewBook}
          name="title"
        />

        <input
          className="md:w-2/6 w-full p-2 m-3 shadow-md rounded-lg shadow-black font-medium text-black"
          aria-label="Book Author"
          placeholder="Enter book author"
          type="text"
          id="author"
          value={author}
          onChange={handleNewBook}
          name="author"
        />

        <input
          className="md:w-1/6 w-full p-2 m-3 shadow-md rounded-lg shadow-black font-medium text-black"
          aria-label="Chapters"
          placeholder="No. of chapters"
          max="100"
          min="0"
          type="number"
          id="chapters"
          value={chapters}
          onChange={handleNewBook}
          name="chapters"
        />

        <button
          disabled={title === "" || author === "" || chapters === 0}
          className="bg-slate-900 p-2 text-white disabled:opacity-40 rounded-md mt-4 md:m-0 active:bg-slate-900 w-2/4 md:w-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddBook;
