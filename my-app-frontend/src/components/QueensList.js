import React from 'react';
import QueenItem from './QueenItem';

function QueensList({ queensArr, handleDelete }) {
    const queenCards = queensArr.map((queen) => {
    return(
        <QueenItem key={queen.id} user_added={queen["user_added?"]} {...queen} handleDelete={handleDelete}/>
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