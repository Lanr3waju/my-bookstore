import { ActionCreators } from "redux-undo";
import { useSelector, useDispatch } from "react-redux";
import undoIcon from "../images/icons8-undo-30.png"
import redoIcon from "../images/icons8-redo-30.png"

export default function UndoRedo() {
    const previousStateLength = useSelector(
        (state) => state.booksReducer.past.length
    );
    const futureStateLength = useSelector(
        (state) => state.booksReducer.future.length
    );

    const dispatch = useDispatch();

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'z' || event.metaKey && event.key === 'z') {
            dispatch(ActionCreators.undo())
        }
        else if (event.ctrlKey && event.key === 'y' || event.metaKey && event.key === 'y') {
            dispatch(ActionCreators.redo())
        }
    });

    return (
        <div role="button" tabIndex={0} >
            <button
                className="px-5 py-1 disabled:opacity-50"
                disabled={previousStateLength < 1}
                type="button"
                onClick={() => dispatch(ActionCreators.undo())}
            ><img src={undoIcon} alt="undo" />
            </button>

            <button
                className="px-5 py-1 disabled:opacity-50"
                disabled={futureStateLength < 1}
                type="button"
                onClick={() => dispatch(ActionCreators.redo())}
            >
                <img src={redoIcon} alt="undo" />
            </button>
        </div>
    )
}
