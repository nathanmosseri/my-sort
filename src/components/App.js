import React, { useState } from "react";
import Login from "./Login";
import MainPage from './MainPage'

function App() {

  const [loginSuccess, setLoginSuccess] = useState(true)


  return (
    <div className="App">
      {loginSuccess ? <MainPage /> : <Login/>}

      
    </div>
  );
}

export default App;
