import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import Books from "./components/Books";

function App() {
  return (
    <BrowserRouter>
      <h1>My BookStore</h1>
      <Routes>
        <Route path="/books/:id" element={<Books />} />
        <Route path="/" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
