import PropTypes from "prop-types";
import { ActionCreators } from 'redux-undo';
import { useSelector, useDispatch } from "react-redux";
import moonIcon from '../images/moon.png'
import sunIcon from '../images/sun.png'

function Header({ isDark, handleIsDark }) {
    const previousStateLength = useSelector((state) => state.booksReducer.past.length);
    const futureStateLength = useSelector((state) => state.booksReducer.future.length);
    const dispatch = useDispatch();
    return (
        <header className={isDark ? "bg-slate-900 text-white shadow-sky-700 shadow-inner p-4 items-center flex" : "p-4 items-center text-gray-700 flex shadow-md shadow-slate-800"}>
            <h2 className="text-2xl font-bold text-[#2B8FE3] mr-20">Lanrewaju BOOKSTORE</h2>
            <h3 className="tracking-wider font-medium">BOOKS</h3>
            <button
                className="mx-4 rounded-full px-4 border-2 border-black disabled:opacity-50"
                disabled={previousStateLength < 1}
                type="button"
                onClick={() => dispatch(ActionCreators.undo())}>
                undo
            </button>

            <button
                className="mx-4 rounded-full px-4 border-2 border-black disabled:opacity-50"
                disabled={futureStateLength < 1}
                type="button"
                onClick={() => dispatch(ActionCreators.redo())}>
                redo
            </button>
            <button type='button' className='ml-auto w-20' onClick={handleIsDark} ><img src={isDark ? sunIcon : moonIcon} alt="theme icon" /></button>
        </header>
    );
}

export default Header;

Header.propTypes = {
    isDark: PropTypes.bool.isRequired,
    handleIsDark: PropTypes.func.isRequired,
};

