import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import store from "./redux/configureStore";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleIsDark = () => setIsDark(!isDark);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header isDark={isDark} handleIsDark={handleIsDark} />
        <main
          className={
            isDark
              ? "px-12 py-16 text-white bg-slate-700 min-h-screen font-poppins"
              : "px-12 bg-blue-50 py-16 min-h-screen font-poppins"
          }
        >
          <Routes>
            <Route path="/" element={<BookList isDark={isDark} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
