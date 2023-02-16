import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function QueenItem({ name, image_url, id, user_added, handleDelete, setEditQueen }) {

    function handleEditClick() {
        fetch(`http://localhost:9292/queens/${id}`)
            .then(res => res.json())
            .then(queen => setEditQueen(queen))
    }

return(
    <>
    <div className="outer-card-div">
        <NavLink style={{textDecoration: 'none', color: 'black'}} to={`/queens/${id}`}>
            <div className="inner-card-div">
                <h3 style={{textDecoration: 'none'}} className='card-header'>{name}</h3>
                <img className="queen-images" src={image_url} alt={name}/>
            </div>
        </NavLink>
        {user_added == true ? <button onClick={() => handleDelete(id)}>✕</button> : null}
        {user_added == true ? <NavLink to={`/edit-queen/${id}`}><button onClick={handleEditClick}>✎</button></NavLink> : null}
    </div>
    </>
)
}

export default QueenItem;
