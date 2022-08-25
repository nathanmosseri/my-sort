import { useState } from "react"
import "./ArraySettings.css"
export default function ArraySettings ({
    arrayLength, setArrayLength, settingsSliders, defaultArrayLength, 
    defaultAnimationSpeed, setSettingsSliders, animationSpeed, setAnimationSpeed, 
    workingArray, setArray, userData
}){

    const [defaultClicked, setDefaultClicked] = useState(false)

    const handleArrLength = (e) =>{

        setArrayLength(e.target.value)
    }
    const handleAnimationSpeed = (e) =>{
        setAnimationSpeed(e.target.value)
    }
    // random integer generator

    const handleDefault = (e) => {
        setDefaultClicked(!defaultClicked)
    }

    const handleSizeAndSpeed = (e) => {
        setSettingsSliders({
            ...ArraySettings,
            [e.target.name]: e.target.value
        })
    }

    function randomIntGenerator (min,max){
        return Math.floor(Math.random() * (max-min + 1) + min)
    }
    
    function handleGenerateArr () {
        let array = []
        for (let i = 0; i<arrayLength; i++ ){
            array.push(randomIntGenerator(5,700))
        }
        setArray(array)
    }

    const defaultSettingsButton = Object.keys(userData).includes('defaultLength') ? <button onClick={handleDefault}>{defaultClicked? 'Set Different Length and Speed' : 'Switch to Default Settings'}</button> : null


    return(
        <div className ="arraySettings">
            <p className='labels'>Set Array Length</p>
            <input 
                className='slider' 
                type= "range" 
                min = "5" 
                max = "350" 
                name = "arrayLength"
                style = {{cursor: "pointer"}}
                value = {defaultClicked? defaultArrayLength : arrayLength}
                onChange ={handleArrLength}
            ></input>
            <p>{defaultClicked? defaultArrayLength : arrayLength}</p>
            <p className='labels'>Set Animation Speed</p>
            <input 
                className = 'slider' 
                type= "range" 
                min = "5" 
                max = "100" 
                name = "animationSpeed"
                value ={defaultClicked? defaultAnimationSpeed : animationSpeed}
                onChange={handleAnimationSpeed}
                style = {{cursor: "pointer"}}
            ></input>
            <p>{defaultClicked? defaultAnimationSpeed : animationSpeed}</p>
            {defaultSettingsButton}
            <button id = "generateArr" name = "generateArr" style = {{cursor: "pointer"}} onClick={handleGenerateArr}>Generate New Array</button>
        </div>
    )
}