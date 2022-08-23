import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <h2>Bubble Sort
        <NavLink to='/bubbleInfo'>
            ℹ️
        </NavLink>
        </h2>
        <h2>Selection Sort
        <NavLink to='/selectionInfo'>
            ℹ️
        </NavLink>
        </h2>
        <h2>Quick Sort
        <NavLink to='/quickInfo'>
            ℹ️
        </NavLink>
        </h2>
        </div>
    )
}

export default SideBar