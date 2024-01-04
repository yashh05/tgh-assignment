import {  useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import { unbookmarkQuote } from '../slices/quoteSlices';

const Bookmark = () => {
  const bookmarkedQuotes = useSelector((state) => state.quotes.bookmarkedQuote);
  
  function Card({quote}){
    const {content,author} = quote
    const dispatch=useDispatch();

    return (
      <div className=' min-h-36 bg-slate-600 w-7/12 p-5 text-white rounded-lg' >
          <p className='text-3xl'>
            {content}
          </p>
          <div className='text-lg flex items-center gap-3 mt-2 float-end'>
          <h4>
            {author}
          </h4>
          <button onClick={()=>dispatch(unbookmarkQuote(quote))}><img src="./resources/delete.png" className=' w-10 text-white' alt="delete icon" /></button>
          </div>
      </div>
    )
  }
    return (
    <div className='flex items-center flex-col gap-5 mt-20'>
       {bookmarkedQuotes.map((quote)=>{
        return <Card quote={quote} key={quote._id} />
       })}
    </div>
  )
}

export default Bookmark