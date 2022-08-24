import React, {useEffect, useState} from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import SideNavBar from "./SideNav/SideNavBar";
import Visualizer from "./Visualizer/Visualizer";
import "./main.css"

export default function MainContainer({userId}){
    const[userData, setUserData] = useState([])
    const[arrayLength, setArrayLength] = useState(25)
    const[animationSpeed, setAnimationSpeed] = useState()
    const[workingArray, setArray] = useState({array: []})


    useEffect(()=> {
        fetch(`http://localhost:3000/users/${userId}`)
        .then(res=>res.json())
        .then(data => setUserData(data))
    },[])

    // console.log(widthArrBar)
    // console.log(workingArray)

    return(
        <>
        <div id = "headerNav">
            <HeaderNav userData = {userData}/>
        </div>
        <div id= "sideNav">
            <SideNavBar 
                userData = {userData}
                arrayLength = {arrayLength}
                setArrayLength = {setArrayLength}
                animationSpeed = {animationSpeed}
                setAnimationSpeed = {setAnimationSpeed}
                workingArray = {workingArray}
                setArray = {setArray}
            />
            <p>{workingArray.length}</p>
        </div>
        <div id = "visualizer">
            <Visualizer
                workingArray = {workingArray}
            />
        </div>
        </>
        
    )
}