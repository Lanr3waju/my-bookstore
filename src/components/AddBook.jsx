import { useState } from "react";

function AddBook() {
    const [newBookVal, setNewBookValues] = useState({
        bookTitle: '',
        bookAuthor: '',
    });

    function handleNewBook({ target: { value, name } }) {
        setNewBookValues((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    return (
        <form className="welcome-page">
            <h1>Add Book</h1>
            <input
                type="text"
                id="bookTitle"
                value={newBookVal.bookTitle}
                onChange={handleNewBook}
                name="bookTitle"
            />

            <input
                type="text"
                id="bookAuthor"
                value={newBookVal.bookAuthor}
                onChange={handleNewBook}
                name="bookAuthor"
            />

        </form>
    )
}


export default AddBook;
