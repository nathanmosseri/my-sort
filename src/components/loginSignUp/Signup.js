import React, {useState} from "react";
import userimage from "../images/login.png"
import "./signup.css"

export default function Signup ({handleRenderLoginForm, addNewUser}){
    const initialState = {
        name: "",
        username: "",
        password: ""
    }
    const[signupCredentials, setSignUpCredentials] = useState(initialState)

    const handleSignupCredentials = (e)=>{
        const{name,value} = e.target
        setSignUpCredentials(
            {...signupCredentials,
            [name]:value}
        )
    }

    const handleSignUp = (e)=>{
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method:"POST",
            headers:{
            'Content-type':'application/json'
        },
            body: JSON.stringify(signupCredentials)
        })
        .then(r => r.json())
        .then(d => addNewUser(d))
        .then(alert("Account successfully created! Please proceed to login."))
        .then(setSignUpCredentials(initialState))
        .catch(err => console.log(err))
    }

    return(
        <div id = "signupForm">
        <form onSubmit ={handleSignUp}>
            <img src = {userimage} alt = "signUpPic"/>
            <h3>Sign Up</h3>
            <input 
                type = "text"
                className = "formInputs" 
                placeholder="Name"
                name = "name"
                value = {signupCredentials.name}
                onChange = {handleSignupCredentials}
            ></input>
            <input 
                type = "text"
                className = "formInputs" 
                placeholder="Username"
                name = "username"
                value = {signupCredentials.username}
                onChange = {handleSignupCredentials}
            ></input>
            <input 
                className = "formInputs" 
                placeholder="Password" 
                name = "password"
                type = "password"
                value = {signupCredentials.password}
                onChange = {handleSignupCredentials}
            ></input>
            <button id = "signupBtn">Sign Up </button>
            <h4 onClick = {handleRenderLoginForm}><u>Signed up? Login</u></h4>
        </form>
    </div>
    )
}