import { useState } from "react";

function AddBook() {
  const [newBookVal, setNewBookValues] = useState({
    title: "",
    author: "",
  });

  function handleNewBook({ target: { value, name } }) {
    setNewBookValues((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const { title, author } = newBookVal;
  return (
    <form className="welcome-page">
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
    </form>
  );
}

export default AddBook;
