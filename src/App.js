import "./App.css";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadBookmarkedQuotes } from "./slices/quoteSlices";
import Bookmark from "./pages/bookmark";

function App() {
  const dispatch = useDispatch();

  async function fetchQuotes(bookmarkedQuotes){
    return new Promise(async function(resolve,reject){
      const quotes=[];

      for (const id of bookmarkedQuotes) {
        const response = await fetch(`https://api.quotable.io/quotes/${id}`);
    
        if (response.ok) {
          const quote = await response.json();
          quotes.push(quote);
        } else {
          console.error(`Failed to fetch quote with ID ${id}. Status: ${response.status}`);
        }
      }
      
      resolve(quotes);
    })    
  };

  useEffect(() => {
    const storedBookmarkedQuotes =JSON.parse(localStorage.getItem("bookmarked-quotes")) || [];
    fetchQuotes(storedBookmarkedQuotes)
    .then((quotes)=>{
      dispatch(loadBookmarkedQuotes(quotes))
    })
  }, []);

  return (
    <BrowserRouter>
      <div className=" w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookmarks" element={<Bookmark />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
