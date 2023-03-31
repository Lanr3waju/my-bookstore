import PropTypes from "prop-types";
import UndoRedo from "./UndoRedo";
import ToggleThemeButton from "./ToggleThemeButton";

export default function MobileMenu({ isDark, handleIsDark }) {
  return (
    <div
      className={
        isDark
          ? "my-3 md:hidden w-3/4 bg-slate-700 p-4 rounded-md flex flex-col items-center justify-center"
          : "my-3 md:hidden w-3/4 bg-sky-200 p-4 rounded-md flex flex-col items-center justify-center"
      }
    >
      <UndoRedo />
      {/* <button
        className={
          isDark
            ? "mx-4 text-lg rounded-md px-5 py-1 bg-slate-800 border-[1px] border-white disabled:opacity-50 my-4"
            : "mx-4 text-lg text-white rounded-md px-5 py-1 bg-sky-600 disabled:opacity-50 my-4"
        }
        disabled={previousStateLength < 1}
        type="button"
        onClick={() => dispatch(ActionCreators.undo())}
      >
        undo
      </button>
      <div className="h-[1px] w-full bg-black" />
      <button
        className={
          isDark
            ? "mx-4 mt-2 mb-4 text-lg rounded-md px-5 py-1 bg-slate-800 disabled:opacity-50 border-[1px] border-white"
            : "mx-4 mt-2 mb-4 text-lg text-white rounded-md px-5 py-1 bg-sky-600 disabled:opacity-50"
        }
        disabled={futureStateLength < 1}
        type="button"
        onClick={() => dispatch(ActionCreators.redo())}
      >
        redo
      </button> */}
      <div className="h-[1px] w-full bg-black mb-3" />
      <ToggleThemeButton isDark={isDark} handleIsDark={handleIsDark} />
    </div>
  );
}

MobileMenu.propTypes = {
  isDark: PropTypes.bool.isRequired,
  handleIsDark: PropTypes.func.isRequired,
};
