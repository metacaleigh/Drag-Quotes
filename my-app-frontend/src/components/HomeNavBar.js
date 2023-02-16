import React from 'react';
import { NavLink } from "react-router-dom";

function HomeNavBar() {
    return(
        <div className="NavBar">
            <NavLink to="/queens">View Queens</NavLink>
        </div>
    )
}

export default HomeNavBar;