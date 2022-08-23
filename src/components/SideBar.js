import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <h2>bubble sort</h2>
        <NavLink to='/bubbleInfo'>
            ℹ️
        </NavLink>
        <h2>selection sort</h2>

        <NavLink to='/selectionInfo'>
            ℹ️
        </NavLink>
        <h2>Quick Sort</h2>
        <NavLink to='/quickInfo'>
            ℹ️
        </NavLink>
        </div>
    )
}

export default SideBar