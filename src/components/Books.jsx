import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';
import AddBook from "./AddBook";
import Book from "./Book";


function Books() {
  const booksList = useSelector((state) => state.booksReducer)
  const dispatch = useDispatch()

  const bookEl = booksList.map(({ id, title, author }) => (
    <li className="mb-4" key={id}>
      <Book title={title} author={author} id={id} />
      <button onClick={() => dispatch(removeBook(id))} className="bg-slate-700 text-yellow-50" type="button">Remove</button>
      <hr />
    </li>
  ))

  return (
    <>
      <ul className="my-6">
        {booksList.length > 0 ? bookEl : <h2 className='text-red-600 text-xl font-bold animate-pulse'>No Book Yet</h2>}
      </ul>
      <AddBook />
    </>
  );
}

export default Books;
