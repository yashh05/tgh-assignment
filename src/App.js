import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadBookmarkedQuotes } from "./slices/quoteSlices";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedBookmarkedQuotes =JSON.parse(localStorage.getItem("bookmarkedQuotes")) || [];
    dispatch(loadBookmarkedQuotes(storedBookmarkedQuotes));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className=" w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
