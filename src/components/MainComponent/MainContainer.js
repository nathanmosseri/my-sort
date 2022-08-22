import React from "react";
import { Route, Switch } from "react-router-dom";
import AlgoVisualizer from "../AlgoVisualizer";
import BubbleInfo from "../BubbleInfo";
import QuickSortInfo from "../QuickSortInfo";
import SelectionInfo from "../SelectionInfo";
import NavBar from "./NavBar";
import Settings from "./Settings";
import SignUp from "../loginSignUp/Signup";
import Login from "../loginSignUp/Login";

const MainPage = () => {
    return (
       <div>
        <NavBar/>
        <Switch>
            <Route exact path='/'>
                <AlgoVisualizer/>
            </Route>
            <Route path='/settings'>
                <Settings/>
            </Route>
            <Route path='/bubbleInfo'>
                <BubbleInfo/>
            </Route>
            <Route path='/selectionInfo'>
                <SelectionInfo/>
            </Route>
            <Route path='/quickInfo'>
                <QuickSortInfo/>
            </Route>
            <Route exact path='/signup'>
                <SignUp/>
            </Route>
            <Route path='*'>
                <h1>Page Not Found</h1>
            </Route>
        </Switch>
        </div>
    )
}

export default MainPage