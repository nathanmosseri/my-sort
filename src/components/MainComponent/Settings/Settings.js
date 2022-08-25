import React, { useState } from "react";
import { Link } from "react-router-dom";

const Settings = ({setUserData, userData, settingsSliders, setSettingsSliders, setSubmitted}) => {


    const handleSettingsChange = (e) => {
        setSettingsSliders({
            ...settingsSliders,
            [e.target.name]: e.target.value
        })
    }

    const handleSettingsSubmit = (e) => {
        e.preventDefault()
        setUserData({
            ...userData,
            settingsSliders
        })

        fetch(`http://localhost:3000/users/${userData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(settingsSliders)
        })
        .then(res=> res.json())
        .then(data => {
            setSubmitted(prev => !prev)
        })
    }

    return (
        <div id="settings">
        <Link to='/' className="back-button">Back</Link>
        <h1>Settings Page</h1>
            <div className ="arraySettings">
            <form onSubmit={handleSettingsSubmit}>
            <label>Set Your Default Array Size</label>
            <input 
                className='slider' 
                type= "range" 
                min = "5" 
                max = "350" 
                name = "defaultLength"
                style = {{cursor: "pointer"}}
                value = {settingsSliders.defaultLength}
                onChange ={handleSettingsChange}
            ></input>
            <p>{settingsSliders.defaultLength}</p>
            <label>Set Your Default Sort Speed</label>
            <input 
                className = 'slider' 
                type= "range" 
                min = "5" 
                max = "100" 
                name = "defaultSpeed"
                value ={settingsSliders.defaultSpeed}
                onChange={handleSettingsChange}
                // style = {{cursor: "pointer"}}
            ></input>
            <p>{settingsSliders.defaultSpeed}</p>
            <button>Submit Changes</button>
            </form>
        </div>
        </div>
    )
}

export default Settings