import React from 'react';
import { NavLink } from "react-router-dom";

function QueensNavBar() {
    return(
        <div className="NavBar">
            <NavLink to="/">Home</NavLink>
            <div className="navbar-divider"> </div>
            <NavLink to="/add-new-queen">Add New Queen</NavLink>
        </div>
    )
}

export default QueensNavBar;