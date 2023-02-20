import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(false)

  const handleIsDark = () => setIsDark(!isDark)

  return (
    <BrowserRouter>
      <Header isDark={isDark} handleIsDark={handleIsDark} />
      <main className="px-12 mt-5">
        <Routes>
          <Route path="/" element={<BookList isDark={isDark} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
