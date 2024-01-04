import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import { bookmarkQuote, unbookmarkQuote } from "../slices/quoteSlices";

const Main = () => {
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [randomQuote, setRandomQuote] = useState(Object);
  const [tagQuery, setTagQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [bookmark,setBookmark]=useState(false)

const dispatch = useDispatch()

  async function getRandomQuote() {
    setQuoteLoading(true);
    fetch("https://api.quotable.io/random?tags=" + tagQuery)
      .then((res) => res.json())
      .then((data) => {
        setRandomQuote(data);
        console.log(data);
        // setRandomQuoteAuthor(data.author);
        setQuoteLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // getRandomQuote();
      });
  }

  const handleTagChange = (event) => {
    const selectedTag = event.target.value;
    setTagQuery(selectedTag);
  };

  useEffect(() => {
    fetch("https://api.quotable.io/tags")
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((error) => console.error("Error fetching options:", error));
  }, []);

  // useEffect(() => {
  //   getRandomQuote();
  // }, [tagQuery]);


  function handlebookmark(){
    if(bookmark){
      setBookmark(false)
      dispatch(unbookmarkQuote(randomQuote._id))  
    }
    else{
      setBookmark((bookmark)=>!bookmark)
      dispatch(bookmarkQuote(randomQuote._id))
    }
  }

  return (
    <div className="flex flex-col w-full items-center gap-12">
      <div className=" w-3/5 min-h-[30vh] m-auto mt-28 bg-slate-600 rounded-lg text-white px-16 py-10">
        {quoteLoading ? (
          <img src="./loading.svg" alt="" className=" m-auto" />
        ) : (
          <>
            <p className="text-center text-4xl font-semibold">{randomQuote.content}</p>

            <div className="flex justify-end gap-5 mt-10 items-center  w-full">
              <h1 className=" text-xl">-{randomQuote.author}</h1>
              <button onClick={handlebookmark}> <img src={`${bookmark?"./bookmarked.png":"./bookmark.png"}`} alt='bookmark' className=" max-w-10"></img></button>
            </div>
          </>
        )}
      </div>
      {/* <i className="fa-solid fa-spinner"></i> */}

      <select
        name="tags-selector"
        id="tags-selector"
        className="block appearance-none w-3/12 text-xl h-10 py-2 px-4 pr-8 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        onChange={handleTagChange}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option._id} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>

      <button
        onClick={getRandomQuote}
        className="px-5 py-2 bg-black text-white text-xl rounded "
      >
        Generate another
      </button>
    </div>
  );
};

export default Main;