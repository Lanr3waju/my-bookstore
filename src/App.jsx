import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import Books from "./components/Books";

function App() {
  <BrowserRouter>
    <h1>My BookStore</h1>
    <Routes>
      <Route path="/book/:id" element={<Books />} />
      <Route path="/" element={<Book />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
