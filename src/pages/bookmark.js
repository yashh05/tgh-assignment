import {  useSelector } from 'react-redux';

const Bookmark = () => {
    const bookmarkedQuotes = useSelector((state) => state.quotes.bookmarkedQuotes);
  return (
    <p>
        {JSON.stringify(bookmarkedQuotes)}
    </p>
  )
}

export default Bookmark