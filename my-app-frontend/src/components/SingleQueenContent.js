import React from 'react';

function SingleQueenContent({ queenContent }) {

    let queenName = queenContent.name.toUpperCase();
    let queensQuotes = queenContent.quotes
    console.log(queensQuotes)
    let topQuote = queenContent.most_popular_quote
    console.log(topQuote)
    let user_added = queenContent["user_added?"]
    console.log(user_added)

    return(
        <div className="single-queen-content-container">
            <div className="single-queen-header">
                <h1>{queenName}</h1>
            </div>
            <div className='single-queen-content'>
                <div className="single-queen-images">
                    <img src={queenContent.image_url} id="top-image"/>
                </div>
                <div id="queen-details">
                    <h4><span className="underline">Sun Sign: </span>{queenContent.sun_sign}</h4>
                    <h4><span className="underline">Hometown: </span>{queenContent.hometown}</h4>
                    <h4><span className="underline">Season: </span>{queenContent.season}</h4>
                    <h4><span className="underline">Winner?: </span>{queenContent["winner?"] == true ? "Yes" : "No"}</h4>
                    <h4><span className="underline">Most Popular Quote: </span>{topQuote == null ? "N/A" : <span id="top-quote">"{topQuote.quote}"</span>}</h4>
                </div>
                <div>
                    <ul>
                        {/* {queensQuotes.forEach((q) => {
                            return <li key={quote.id}>{q.quote}</li>
                        })} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleQueenContent;