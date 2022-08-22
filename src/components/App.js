import React, {useState, useEffect} from "react";
import Login from "./loginSignUp/Login";
import MainContainer from "./MainComponent/MainContainer";
import '../App.css';

function App() {
  const [loginPage, setPage] = useState(true)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [usersLogin, setUserData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(r=>r.json())
    .then(data => setUserData(data)) 
  },[])


  const renderedPage = loginSuccess? 
    <MainContainer/> : 
    <Login 
      usersData = {usersLogin}
      loginSuccess = {loginSuccess}
      setLoginSuccess = {setLoginSuccess}
    />
  return (
    <div className={loginPage? "loginDiv" : "app"}>
      {renderedPage}
    </div>
  );
}

export default App;
