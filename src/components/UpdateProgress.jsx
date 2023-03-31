import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// import your Action Creators
import { updateBook } from "../redux/books/books";

function UpdateProgress({
  closeUpdateBookProgress,
  chapters,
  id: bookId,
  chapter: readChapter,
}) {
  const dispatch = useDispatch();
  const [progressState, setProgressState] = useState({
    chapter: readChapter,
    id: bookId,
  });

  function handleProgressState({ target: { value, name } }) {
    setProgressState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const submitBook = (e) => {
    e.preventDefault();
    dispatch(updateBook(progressState));
    closeUpdateBookProgress();
  };

  const { chapter } = progressState;

  return (
    <form
      className="flex flex-col md:flex-row items-center"
      onSubmit={submitBook}
    >
      <input
        className="md:w-2/6 w-full p-2 m-3 shadow-md rounded-lg shadow-black font-medium"
        aria-label="Book chapter"
        placeholder="Enter book chapter"
        type="number"
        max={chapters}
        min="0"
        id="chapter"
        value={chapter}
        onChange={handleProgressState}
        name="chapter"
      />

      <button
        className="bg-slate-900 p-2 text-white disabled:opacity-10"
        type="submit"
      >
        update
      </button>
    </form>
  );
}

export default UpdateProgress;

UpdateProgress.propTypes = {
  closeUpdateBookProgress: PropTypes.func.isRequired,
  chapters: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
