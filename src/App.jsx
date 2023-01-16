import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import Books from "./components/Books";
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <h1>My BookStore</h1>
      <Routes>
        <Route path="/book/:id" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
