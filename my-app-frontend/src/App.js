import './index.css';
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import QueensPage from './components/QueensPage';
import SingleQueenPage from './components/SingleQueenPage';
import { Switch } from "react-router-dom";
import AddNewQueenForm from './components/AddNewQueenForm';
import AddNewQuoteForm from './components/AddNewQuoteForm';


function App({ Route }) {

  const [queensArr, setQueensArr] = useState([])
  const [quotesArr, setQuotesArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/queens")
        .then(res => res.json()) 
        .then(queensArr => setQueensArr(queensArr))

    fetch("http://localhost:9292/quotes")
        .then(res => res.json()) 
        .then(quotesArr => setQuotesArr(quotesArr))
      }, [])

  function onFormSubmit(newQueen) {
    const newQueenBody = {
      ...newQueen,
      season: Number(newQueen.season)
    }
    console.log(newQueenBody)

    fetch("http://localhost:9292/queens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQueenBody)
    })
      .then(res => res.json())
      .then(setQueensArr(...queensArr, newQueen))
  }

  // function onQuoteFormSubmit(newQuote) {
  //   const newQuoteBody = {
  //     ...newQuote,
  //     queen_id: Number(newQuote.queen_id)
  //   }

  //   fetch("http://localhost:9292/quotes", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newQuoteBody)
  //   })
  //     .then(res => res.json())
  //     .then(setQuotesArr(...quotesArr, newQuote))
  // }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage quotesArr={quotesArr}/>
        </Route>
        <Route exact path="/queens">
          <QueensPage queensArr={queensArr}/>
        </Route>
        <Route path="/queens/:id">
          <SingleQueenPage />
        </Route>
        <Route exact path="/add-new-queen">
          <AddNewQueenForm onFormSubmit={onFormSubmit}/>
        </Route>
        <Route exact path="/add-new-quote">
          <AddNewQuoteForm queensArr={queensArr}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
