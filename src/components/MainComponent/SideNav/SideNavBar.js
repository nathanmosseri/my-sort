import './SideNavBar.css'
import ArraySettings from './ArraySettings/ArraySettings'
import AlgorithmSelection from './AlgorithmSelection/AlgorithmSelection'
export default function SideNavBar({
    userData, arrayLength, setArrayLength, animationSpeed, setAnimationSpeed, workingArray, setArray

}){
    return(
        <>
        <div id = "arraySettings">
            <ArraySettings 
                arrayLength = {arrayLength}
                setArrayLength = {setArrayLength}
                animationSpeed = {animationSpeed}
                setAnimationSpeed = {setAnimationSpeed}
                workingArray = {workingArray}
                setArray = {setArray}
                
            />
        </div>
        <div id ="algoSettings">
            <AlgorithmSelection/>
        </div>
        <div id = "sortContainer">
            <button id ="sortButton">Sort!</button>
        </div>
        </>
    )
}