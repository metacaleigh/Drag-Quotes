import React from 'react';
import { NavLink } from 'react-router-dom';

function QueenItem({ name, image_url, id }) {

return(
    <NavLink style={{textDecoration: 'none', color: 'black'}} to={`/queens/${id}`}>
        <div className="outer-card-div">
            <div className="inner-card-div">
                <h3 style={{textDecoration: 'none'}} className='card-header'>{name}</h3>
                <img className="queen-images" src={image_url} alt={name}/>
            </div>
        </div>
    </NavLink>
)
}

export default QueenItem;