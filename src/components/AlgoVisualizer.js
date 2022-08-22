import React from "react";
import { Link, Switch, Route } from "react-router-dom"; 
import SideBar from './SideBar'
import BubbleInfo from "./BubbleInfo";
import SelectionInfo from "./SelectionInfo";
import QuickSortInfo from "./QuickSortInfo";

const AlgoVisualizer = () => {

    

    return (
    <div>
    
        <SideBar/>
        <div>
            <h2>bubble sort</h2>
            <h2>selection sort</h2>
            <h2>quick sort</h2>
        </div>
    </div>
    )
}

export default AlgoVisualizer