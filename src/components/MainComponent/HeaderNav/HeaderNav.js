import signOut from "../../images/logout.png"
import settings from "../../images/settings.png"
import "./HeaderNav.css"
export default function HeaderNav ({userData}) {
    
    return(
        <>
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
                <img src = {signOut} alt ="signOut"></img>
            </div>
        </>

    )
}