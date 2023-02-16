import React, { useState, useEffect } from 'react';
import TextBubble from '../TextBubble.png';

function RandomQuote({ quotesArr }) {

    const [randomQuote, setRandomQuote] = useState(null)

    // let quoteClaps = randomQuote.claps

    const [clapCount, setClapCount] = useState(0)
    
    useEffect(() => {
        generateRandomQuote()
    }, [])

    function generateRandomQuote() {
        fetch("http://localhost:9292/quotes/get_random_quote")
            .then(res => res.json())
            .then(randomQuote => setRandomQuote(randomQuote))
    }
    
    function handleButtonClick() {
        generateRandomQuote()
    }

    function handleClapClick() {
        setClapCount(clapCount => clapCount + 1)
    }

    console.log(randomQuote)

    if (!randomQuote) return null
    return(
        <>
            <div className="random-quote-container">
                <div className='queen-image-for-quote'>
                    <img id="queen-image-quote" src={randomQuote.queen.image_url}/>
                </div>
                <div className='quote-container'>
                    <img id="text-bubble-image" src={TextBubble} />
                    <div id="queen-says">{randomQuote.queen.name} says...</div>
                    <div id="quote-text">"{randomQuote.quote}"</div>
                    <div id="clap-button-div"onClick={handleClapClick}>👏 {clapCount} claps...</div>
                </div>
            </div>
            <div>
                <button id="random-quote-button" onClick={handleButtonClick}>Generate Random Quote</button>
            </div>
        </>
    )
}

export default RandomQuote;

