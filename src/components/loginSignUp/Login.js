import React, {useState} from "react";
import userimage from "/Users/mac/Desktop/p3mysort/my-sort/src/images/login.png"

export default function Login ({usersData, loginSuccess, setLoginSuccess}){
    console.log(usersData)
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

    const handleLogin = (e) =>{
        e.preventDefault()
        let usernameId ='none';
        let passwordId= 'none';    
        usersData.forEach((user)=>{
            if(user.username === loginCredentials.username.value){
                usernameId = loginCredentials.id
            } else {
                alert('no match username')
            }
        })
        usersData.forEach((user)=>{
            if(user.password === loginCredentials.password.value){
                passwordId = user.id
            } else {
                alert('no match password')
            }
        })

        if(usernameId ===passwordId && usernameId != null && passwordId != null) {
            let correctLogin = !loginSuccess
            setLoginSuccess(correctLogin)
        } else {
            alert('doesnt match')
        }
    }
    
    return(
    <>
        <div className = "welcomeTitle">
            <div>
                <h2>Welcome to</h2>
                <h1>@mySORT</h1>
            </div>
        </div>
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
                <h4><u>Create An Account</u></h4>
            </form>
        </div>
    </>
    )
}