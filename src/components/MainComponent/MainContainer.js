import React, {useEffect, useState} from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import SideNavBar from "./SideNav/SideNavBar";
import Visualizer from "./Visualizer/Visualizer";
import "./main.css"
import { Route, Switch } from "react-router-dom";
import BubbleInfo from "./Algoinfos/BubbleInfo";
import MergeInfo from "./Algoinfos/MergeInfo";
import QuickInfo from "./Algoinfos/QuickInfo";
import SelectionInfo from "./Algoinfos/SelectionInfo";

export default function MainContainer({userId, setLoginSuccess}){
    const[userData, setUserData] = useState([])
    const[arrayLength, setArrayLength] = useState(25)
    const[animationSpeed, setAnimationSpeed] = useState(-245)
    const[workingArray, setArray] = useState({array: []})
    const[workingAlgo, setWorkingAlgo] = useState(null)
    const [submitted, setSubmitted] = useState(true)


    useEffect(()=> {
        fetch(`http://localhost:3000/users/${userId}`)
        .then(res=>res.json())
        .then(data => setUserData(data))
    },[])

    
console.log(workingArray)

    return(
        <>
        
            <HeaderNav userData = {userData} setLoginSuccess={setLoginSuccess}/>
            <Switch>
            <Route exact path='/'>
            <SideNavBar 
                userData = {userData}
                arrayLength = {arrayLength}
                setArrayLength = {setArrayLength}
                animationSpeed = {animationSpeed}
                setAnimationSpeed = {setAnimationSpeed}
                setArray = {setArray}
                workingArray={workingArray}
                setWorkingAlgo = {setWorkingAlgo}
                workingAlgo={workingAlgo}

            />
            
            <Visualizer
                workingArray = {workingArray}
                animationSpeed = {animationSpeed}
            />
            </Route>
            {/* <Route exact path='/settings'>
                <Settings setSubmitted={setSubmitted} submitted={submitted} userData={userData} setUserData = {setUserData}/>
            </Route> */}
            <Route path='/selection-info'>
                <SelectionInfo/>
            </Route>
            <Route path='/quick-info'>
                <QuickInfo/>
            </Route>
            <Route path='/bubble-info'>
                <BubbleInfo/>
            </Route>
            <Route path='/merge-info'>
                <MergeInfo />
            </Route>
        </Switch>
        </>
        
    )
}