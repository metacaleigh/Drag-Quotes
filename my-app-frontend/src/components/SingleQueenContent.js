import React from 'react';
// import GoldStar from '../GoldStar.png';

function SingleQueenContent({ queenContent }) {

    let queenName = queenContent.name.toUpperCase();

    // if (!queenContent) return null
    return(
        <div className="single-queen-content-container">
            <div className="single-queen-header">
                <h1>{queenName}</h1>
            </div>
            <div className='single-queen-content'>
                <div className="single-queen-images">
                    <img src={queenContent.image_url} id="top-image"/>
                    {/* <img src={GoldStar} id="bottom-image"/> */}
                </div>
                <div id="queen-details">
                    <h4>Sun Sign: {queenContent.sun_sign}</h4>
                    <h4>Hometown: {queenContent.hometown}</h4>
                    <h4>Season: {queenContent.season}</h4>
                    <h4>Winner?: {queenContent["winner?"] == true ? "Yes" : "No"}</h4>
                    <h4>Most Popular Quote:</h4>
                </div>
            </div>
        </div>
    )
}

export default SingleQueenContent;