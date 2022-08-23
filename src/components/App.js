
import React, {useState, useEffect} from "react";
import Login from "./loginSignUp/Login";
import MainContainer from "./MainComponent/MainContainer";
import '../App.css';

function App() {

  const [loginSuccess, setLoginSuccess] = useState(false)
  const [usersLogin, setUserData] = useState([])
  const initialState = {
        username : "",
        password : ""
    }
    const[loginCredentials, setCredential] = useState(initialState)

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(r=>r.json())
    .then(data => setUserData(data)) 
  },[])


  const renderedPage = loginSuccess? 
    <MainContainer loginCredentials={loginCredentials}/> : 
    <Login 
      usersData = {usersLogin}
      loginSuccess = {loginSuccess}
      setLoginSuccess = {setLoginSuccess}
      loginCredentials = {loginCredentials}
      setCredential = {setCredential}
    />
  return (
    <div className={loginSuccess? "app" : "loginDiv"}>
      {renderedPage}
    </div>
  );
}

export default App;
