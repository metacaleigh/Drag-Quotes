import React from 'react';
import QueenItem from './QueenItem';

function QueensList({ queensArr }) {
    const queenCards = queensArr.map((queen) => {
    return(
        <QueenItem key={queen.id} {...queen}/>
    )
    })
    return(
        <>
        <div className="cards-flex-container">
            {queenCards}
        </div>
        </>
    )
}

export default QueensList;