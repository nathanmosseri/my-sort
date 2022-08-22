import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div id= 'nav-bar'>
        <NavLink exact to='/'>
            Algorithm Visualizer
        </NavLink>
        <NavLink to='/settings'>
            Account Settings
        </NavLink>
        </div>
    )
}

export default NavBar