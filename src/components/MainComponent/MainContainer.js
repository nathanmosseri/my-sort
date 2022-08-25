import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import SideNavBar from "./SideNav/SideNavBar";
import Visualizer from "./Visualizer/Visualizer";
import Settings from "./Settings/Settings";
import "./main.css"
import SelectionInfo from "./AlgoInfo/SelectionInfo";
import QuickInfo from "./AlgoInfo/QuickInfo";
import BubbleInfo from "./AlgoInfo/BubbleInfo";
import MergeInfo from "./AlgoInfo/MergeInfo";

export default function MainContainer({userId, setLoginSuccess}){
    const[userData, setUserData] = useState([])
    const[arrayLength, setArrayLength] = useState(25)
    const[animationSpeed, setAnimationSpeed] = useState()
    const[workingArray, setArray] = useState({array: []})
    const [settingsSliders, setSettingsSliders] = useState({
        defaultLength: '',
        defaultSpeed: '',
    })
    const [submitted, setSubmitted] = useState(true)


    useEffect(()=> {
        fetch(`http://localhost:3000/users/${userId}`)
        .then(res=>res.json())
        .then(data => setUserData(data))
    },[submitted])

    // console.log(widthArrBar)
    // console.log(workingArray)

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
                    defaultArrayLength = {userData.defaultLength}
                    defaultAnimationSpeed = {userData.defaultSpeed}
                    settingsSliders = {settingsSliders}
                    setSettingsSliders = {setSettingsSliders}
                    workingArray = {workingArray}
                    setArray = {setArray}
                />
                </Route>
                <Route exact path='/'>
                <Visualizer
                    workingArray = {workingArray}
                />
                </Route>
                <Route exact path='/settings'>
                    <Settings setSubmitted={setSubmitted} setUserData={setUserData} userData={userData} settingsSliders={settingsSliders} setSettingsSliders={setSettingsSliders}/>
                </Route>
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
                    <MergeInfo/>
                </Route>
            </Switch>
       
        </>
        
        
    )
}