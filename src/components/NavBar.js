import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div id= 'nav-bar'>
        <NavLink exact to='/'>
            Home
        </NavLink>
        <NavLink to='/settings'>
            Settings
        </NavLink>
        
        </div>
    )
}

export default NavBar