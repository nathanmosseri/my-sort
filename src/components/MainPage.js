import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Settings from "./Settings";

const MainPage = () => {
    return (
       <div>
        <NavBar/>
        <Switch>
            <Route path='/settings'>
                <Settings/>
            </Route>
        </Switch>
        </div>
    )
}

export default MainPage