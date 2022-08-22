import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";
import './loginSignupContainer.css'

export default function LoginSignupContainer ({usersData, loginSuccess, setLoginSuccess, addNewUser,setUserId}) {
    const [displayLogin, setDisplayLogin] = useState("true")

    const onRenderForm = () =>{
        setDisplayLogin(displaySignup =>!displaySignup)
    }

    const renderForm = displayLogin ?  
    <Login 
        usersData = {usersData}
        loginSuccess = {loginSuccess}
        setLoginSuccess = {setLoginSuccess} 
        handleRenderSignUpForm = {onRenderForm}
        setUserId={setUserId}
    />
    :
    <Signup 
        addNewUser = {addNewUser}
        handleRenderLoginForm = {onRenderForm}
    />
    return(
        <>
        <div className = "welcomeTitle">
            <div>
                <h2>Welcome to</h2>
                <h1>@mySORT</h1>
            </div>
        </div>
        {renderForm}
        </>
    )
}