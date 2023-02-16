import React from 'react'
import { NavLink } from "react-router-dom";

function SingleQueenNavBar() {
    return(
        <div className="NavBar">
            <NavLink to="/">Home</NavLink>
            <div className="navbar-divider"> </div>
            <NavLink to="/queens">View Queens</NavLink>
        </div>
    )
}

export default SingleQueenNavBar;