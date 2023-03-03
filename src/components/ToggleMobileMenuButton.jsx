import PropTypes from "prop-types";
import hamburger from '../images/hamburger.png'
import close from '../images/close.png'

const ToggleMenuButton = ({ isOpen, handleIsOpen }) => (
    <button className='md:hidden w-10 border-2 rounded-lg border-slate-700 bg-slate-600' type='button' onClick={handleIsOpen}>
        <img src={isOpen ? close : hamburger} alt='mobile menu button' />
    </button>
);

export default ToggleMenuButton;

ToggleMenuButton.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleIsOpen: PropTypes.func.isRequired,
};
