import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({loginCredentials}) => {
    return (
        <div id= 'nav-bar'>
        <NavLink exact to='/'>
            Algorithm Visualizer
        </NavLink>
        <NavLink to='/settings'>
            Account Settings
        </NavLink>
        <p id="hello-user">Hello, {loginCredentials.username}</p>
        <form>
        <button type="submit">Log Out</button>
        
        </form>
        </div>
    )
}

export default NavBar