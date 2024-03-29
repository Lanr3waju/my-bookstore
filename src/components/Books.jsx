import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Book from "./Book";
import Modal from "./Modal";

import { removeBook } from "../redux/books/books";

const Books = ({ books, isDark }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modal) setModal(false);
  }, [books]);

  const displayModal = () => {
    setModal(true);
  };

  return (
    <ul className="my-6">
      {books.map(({ id, title, author, chapters, chapter }) => (
        <li key={id}>
          {modal && (
            <Modal>
              <div
                key={id}
                className="bg-slate-700 z-[1000] opacity-100 border-2 rounded-lg p-20 text-white max-w-fit flex flex-col items-center"
              >
                <h2 className="text-2xl">
                  Are you sure you want to remove book?
                </h2>
                <div className="text-center mt-6 flex">
                  <button
                    className="md:mx-4 mr-1 bg-red-600 hover:bg-red-700 transition-all border-2 px-7 py-2 rounded border-white text-xl"
                    onClick={() => dispatch(removeBook(id))}
                    type="button"
                  >
                    Yes
                  </button>
                  <button
                    className="md:mx-4 ml-1 bg-green-600 hover:bg-green-700 transition-all border-2 px-7 py-2 rounded border-white text-xl"
                    onClick={() => setModal(false)}
                    type="button"
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          )}
          <Book
            displayModal={displayModal}
            isDark={isDark}
            title={title}
            author={author}
            chapters={+chapters}
            chapter={+chapter}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default Books;

Books.propTypes = {
  isDark: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
