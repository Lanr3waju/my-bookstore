import { useState } from "react";
import PropTypes from "prop-types";
import RadialProgress from "./RadialProgress";
import UpdateProgress from "./UpdateProgress";

export default function BookProgress({ chapters, chapter, id }) {
  const [updateBookProgress, setUpdateBookProgress] = useState(false);

  const closeUpdateBookProgress = () => {
    setUpdateBookProgress(false);
  };

  return (
    <>
      {updateBookProgress ? (
        <UpdateProgress
          chapters={chapters}
          chapter={+chapter}
          closeUpdateBookProgress={closeUpdateBookProgress}
          id={id}
        />
      ) : (
        <div className="flex justify-around md:w-3/6 w-full items-center">
          <RadialProgress chapter={+chapter} chapters={chapters} />

          <div className="w-[1px] h-[100px] bg-slate-700" />

          <section className="flex flex-col items-left">
            <h2 className="md:font-semibold mb-2 md:text-base text-sm text-sky-500">
              Current chapter
            </h2>
            <p className=" tracking-wider md:text-base mb-2 font-extralight text-sm">
              {chapter === 0 ? "Introduction" : `Chapter: ${chapter}`}
            </p>
            <button
              className="bg-orange-800 rounded-sm p-2 font-light text-sm text-yellow-50"
              type="button"
              onClick={() => setUpdateBookProgress(!updateBookProgress)}
            >
              update progress
            </button>
          </section>
        </div>
      )}
    </>
  );
}

BookProgress.propTypes = {
  chapters: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
