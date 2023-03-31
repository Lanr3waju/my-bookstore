import PropTypes from "prop-types";
import { useState } from "react";
import UndoRedo from "./UndoRedo";
import MobileMenu from "./MobileMenu";
import ToggleThemeButton from "./ToggleThemeButton";
import ToggleMenuButton from "./ToggleMobileMenuButton";

function Header({ isDark, handleIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={
        isDark
          ? "font-poppins bg-slate-900 text-white shadow-sky-700 shadow-inner md:justify-between p-4 items-center flex flex-col md:flex-row"
          : "font-poppins p-4 items-center bg-white text-gray-700 flex shadow-md shadow-slate-800 md:justify-between flex-col md:flex-row"
      }
    >
      <h2 className="md:text-2xl text-2xl md:mr-16 font-bold text-[#2B8FE3]">
        Lanrewaju BOOKSTORE
      </h2>
      <h3 className="tracking-wider my-2 font-medium">BOOKS</h3>
      <div className="w-[50%] justify-around items-center md:flex hidden">
        <UndoRedo isDark={isDark} />
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
