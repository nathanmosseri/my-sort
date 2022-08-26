import React, { useState } from "react";
import { Link } from "react-router-dom";
import './settings.css'

const Settings = ({setUserData, userData, setSubmitted}) => {
    
    const [newUserName, setNewUserName] = useState({
        username: '',
        password: ''
    })

    const handleSettingsChange = (e) => {
        setNewUserName({
            ...newUserName,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSettingsSubmit = (e) => {
        e.preventDefault()
        setUserData({
            ...userData,
            newUserName
        })
        alert('Credentials Changed')

    fetch(`http://localhost:3000/users/${userData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserName)
        })
        .then(res=> res.json())
        .then(data => {
            setSubmitted(prev => !prev)
            setNewUserName({
                username: '',
                password: ''
            })
        })
    
    }



    return (

        <div id="settings">
            <h3>Change Your Credentials</h3>
            <form id="username-form" onSubmit={handleSettingsSubmit}>
                <input 
                className ="formInputs"
                placeholder="Enter New Username" 
                name="username" 
                value={newUserName.username}
                onChange={handleSettingsChange}
                />
                <input 
                className ="formInputs"
                placeholder="Enter New Password" 
                name="password" 
                value={newUserName.password}
                onChange={handleSettingsChange}
                />
                <button id='submit' type="submit">Submit Changes</button>
            </form>
            <Link id='back' to='/'>Back</Link>
        </div>
    
    
)
    }    

export default Settings
