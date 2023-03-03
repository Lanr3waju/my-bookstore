import PropTypes from "prop-types";
import { useState } from "react";
import { ActionCreators } from "redux-undo";
import { useSelector, useDispatch } from "react-redux";
import MobileMenu from "./MobileMenu";
import ToggleThemeButton from "./ToggleThemeButton";
import ToggleMenuButton from "./ToggleMobileMenuButton";

function Header({ isDark, handleIsDark }) {
  const previousStateLength = useSelector(
    (state) => state.booksReducer.past.length
  );
  const futureStateLength = useSelector(
    (state) => state.booksReducer.future.length
  );
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={
        isDark
          ? "font-poppins bg-slate-900 text-white shadow-sky-700 shadow-inner md:justify-between p-4 items-center flex flex-col md:flex-row"
          : "font-poppins p-4 items-center text-gray-700 flex shadow-md shadow-slate-800 md:justify-between flex-col md:flex-row"
      }
    >
      <h2 className="md:text-2xl text-2xl md:mr-16 font-bold text-[#2B8FE3]">
        Lanrewaju BOOKSTORE
      </h2>
      <h3 className="tracking-wider my-2 font-medium">BOOKS</h3>
      <div className="w-[50%] justify-around items-center md:flex hidden">
        <button
          className={
            isDark
              ? "text-lg rounded-md px-5 py-1 bg-slate-600 disabled:opacity-50"
              : "text-lg text-white rounded-md px-5 py-1 bg-sky-600 disabled:opacity-50"
          }
          disabled={previousStateLength < 1}
          type="button"
          onClick={() => dispatch(ActionCreators.undo())}
        >
          undo
        </button>

        <button
          className={
            isDark
              ? "text-lg rounded-md px-5 py-1 bg-slate-600 disabled:opacity-50"
              : "text-lg text-white rounded-md px-5 py-1 bg-sky-600 disabled:opacity-50"
          }
          disabled={futureStateLength < 1}
          type="button"
          onClick={() => dispatch(ActionCreators.redo())}
        >
          redo
        </button>
        <ToggleThemeButton isDark={isDark} handleIsDark={handleIsDark} />
      </div>
      <ToggleMenuButton isOpen={menuOpen} handleIsOpen={handleMenuOpen} />
      {menuOpen && <MobileMenu isDark={isDark} handleIsDark={handleIsDark} />}
    </header>
  );
}

export default Header;

Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
  handleIsDark: PropTypes.func.isRequired,
};
