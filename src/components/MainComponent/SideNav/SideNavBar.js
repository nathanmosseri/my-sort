import './SideNavBar.css'
import ArraySettings from './ArraySettings/ArraySettings'
import AlgorithmSelection from './AlgorithmSelection/AlgorithmSelection'
export default function SideNavBar({
    userData, arrayLength, animationSpeed, setArrayLength, setAnimationSpeed, defaultArrayLength, defaultAnimationSpeed, setSettingsSliders, settingsSliders,  workingArray, setArray

}){
    return(
        <div id= "sideNav">
        <div id = "arraySettings">
            <ArraySettings 
                arrayLength = {arrayLength}
                setArrayLength = {setArrayLength}
                animationSpeed = {animationSpeed}
                defaultAnimationSpeed = {defaultAnimationSpeed}
                defaultArrayLength = {defaultArrayLength}
                setSettingsSliders = {setSettingsSliders}
                settingsSliders = {settingsSliders}
                setAnimationSpeed = {setAnimationSpeed}
                workingArray = {workingArray}
                setArray = {setArray}
                userData = {userData}
                
            />
        </div>
        <div id ="algoSettings">
            <AlgorithmSelection/>
        </div>
        <div id = "sortContainer">
            <button id ="sortButton">Sort!</button>
        </div>
        </div>
    )
}