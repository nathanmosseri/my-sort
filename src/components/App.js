import React, {useState, useEffect} from "react";
import MainContainer from "./MainComponent/MainContainer";
import '../App.css';
import LoginSignupContainer from "./loginSignUp/LoginSignupContainer";

function App() {

  const [loginSuccess, setLoginSuccess] = useState(false)
  const [usersLogin, setUserData] = useState([])
  const [userId, setUserId] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(r=>r.json())
    .then(data => setUserData(data)) 
  },[])

  const addNewUser = (newUser)=>{
    setUserData([...usersLogin, newUser])
  }

  const renderedPage = loginSuccess? 
    <MainContainer
      userId={userId}
    /> 
    : 
    <LoginSignupContainer
      usersData = {usersLogin}
      loginSuccess = {loginSuccess}
      setLoginSuccess = {setLoginSuccess}
      addNewUser = {addNewUser}
      setUserId ={setUserId}
    />
 
  return (
    <div className={loginSuccess? "app" : "loginDiv"}>
      {renderedPage}
    </div>
  );
}

export default App;
