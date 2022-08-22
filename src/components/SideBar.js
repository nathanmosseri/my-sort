import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
        <NavLink to='/bubbleInfo'>
            ℹ️
        </NavLink>
        <NavLink to='/selectionInfo'>
            ℹ️
        </NavLink>
        <NavLink to='/quickInfo'>
            ℹ️
        </NavLink>
        </div>
    )
}

export default SideBar