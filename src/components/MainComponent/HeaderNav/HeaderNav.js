import signOut from "../../images/logout.png"
import settings from "../../images/settings.png"
import "./HeaderNav.css"
import { useState } from "react"
export default function HeaderNav ({userData, setLoginSuccess}) {
    const handleLogout = () => {
        setLoginSuccess(prev => !prev)
    }
    return(
        <div id ="headerNav">
            <div className = "logo">
                <h1>@mySORT</h1>
            </div>
            <div className="greeting">
                <p>{`Hello, ${userData.name}!`}</p>
            </div>
            <div className="settings">
                <img src = {settings} alt ="settings"></img>
            </div>
            <div className = "signOut">
                <img onClick= {handleLogout} src = {signOut} alt ="signOut"></img>
            </div>
        </div>

    )
}