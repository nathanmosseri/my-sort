import React, {useState} from "react";
import userimage from "../images/login.png"
import "./login.css"

export default function Login ({usersData, loginSuccess, setLoginSuccess, handleRenderSignUpForm,setUserId}){
    const initialState = {
        username : "",
        password : ""
    }
    const[loginCredentials, setCredential] = useState(initialState)

    const handleLoginCredentials = (e)=>{
        const{name,value} = e.target
        setCredential(
            {...loginCredentials,
            [name]:value}
        )
    }
    
    let formUsername = loginCredentials.username  
    let formPassword = loginCredentials.password

    const handleLogin = (e) =>{
        e.preventDefault()
        let usernameId = 0;
        let passwordId = 9;    
        usersData.forEach((user)=>{
            if(user.username === formUsername){
                usernameId = user.id
            }

            if(user.password === formPassword){
                passwordId = user.id
            }
        })

        if(usernameId === passwordId) {
            setUserId(passwordId)
            let correctLogin = !loginSuccess
            setLoginSuccess(correctLogin)
        } else {
            console.log('doesnt match')
        }
    }
    

    return(
    
        <div id = "loginForm">
            <form onSubmit ={handleLogin}>
                <img src = {userimage} alt = "loginpic"/>
                <h3>Login</h3>
                <input 
                    type = "text"
                    className = "formInputs" 
                    placeholder="Username"
                    name = "username"
                    value = {loginCredentials.username}
                    onChange = {handleLoginCredentials}
                ></input>
                <input 
                    className = "formInputs" 
                    placeholder="Password" 
                    name = "password"
                    type = "password"
                    value = {loginCredentials.password}
                    onChange = {handleLoginCredentials}
                ></input>
                <button id = "loginBtn">Sign In</button>
                <h4 onClick = {handleRenderSignUpForm}><u>Create An Account</u></h4>
            </form>
        </div>
    )
}