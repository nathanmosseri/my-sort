import { NavLink } from "react-router-dom"
import signOut from "../../images/logout.png"
import settings from "../../images/settings.png"
import "./HeaderNav.css"
export default function HeaderNav ({userData, setLoginSuccess}) {
    
    const handleLogOut = () => {
        setLoginSuccess(prev => !prev)
    }

    return(
        <div id = "headerNav">
            <div className = "logo">
                <h1>@mySORT</h1>
            </div>
            <div className="greeting">
                <p>{`Hello, ${userData.name}!`}</p>
            </div>
            <div className="settings">
                <NavLink to='/settings'>
                <img src = {settings} alt ="settings"></img>
                </NavLink>
            </div>
            <div className = "signOut">
                <img src = {signOut} alt ="signOut" onClick={handleLogOut}></img>
            </div>
        </div>

    )
}