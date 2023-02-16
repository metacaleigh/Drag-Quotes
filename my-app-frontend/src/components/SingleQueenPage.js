import React, { useState, useEffect } from 'react';
import AddNewQuoteForm from './AddNewQuoteForm';
import SingleQueenNavBar from './SingleQueenNavBar';
import SingleQueenContent from './SingleQueenContent';
import { useParams } from 'react-router-dom';

function SingleQueenPage() {

  const [queenContent, setQueenContent] = useState(null)

  let {id} = useParams()


  useEffect(() => {
    getQueenContent();
  }, [])

  function getQueenContent() {
    fetch(`http://localhost:9292/queens/${id}`)
      .then(res => res.json())
      .then(queenContent => setQueenContent(queenContent))
  }
  
  if (!queenContent) return null
  return (
    <div className="single-queen-page">
        <SingleQueenNavBar/>
        <SingleQueenContent queenContent={queenContent}/>
    </div>
  );
}

export default SingleQueenPage;