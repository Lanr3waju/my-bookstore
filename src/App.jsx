import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";

function App() {
  return (
    <BrowserRouter>
      <h1>My BookStore</h1>
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
