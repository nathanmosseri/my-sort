import './SideNavBar.css'
import ArraySettings from './ArraySettings/ArraySettings'
import AlgorithmSelection from './AlgorithmSelection/AlgorithmSelection'
import { mergeSort } from './Algorithms/merge'
import { bubbleSort } from './Algorithms/bubble'
import { Link } from 'react-router-dom'




export default function SideNavBar({
    userData, arrayLength, setArrayLength, animationSpeed, setAnimationSpeed, setArray, setWorkingAlgo, workingAlgo,workingArray
})
{
    let btnTextContent = workingAlgo === null ? "Select an Algo" : `Sort with ${workingAlgo}`
    let animation = (animationSpeed*(-1));
    const handleSortBtn = () => {
        if (workingAlgo === "Merge"){
            mergeSort(workingArray,animation)
        } else if (workingAlgo ==="Bubble"){
            bubbleSort(workingArray,animation)
        } else {
            alert("Don't forget to generate your array and select your algorithm!!!")
        }
    }
    return(
        <div id= "sideNav">
        <div id = "arraySettings">
            <ArraySettings 
                arrayLength = {arrayLength}
                setArrayLength = {setArrayLength}
                animationSpeed = {animationSpeed}
                setAnimationSpeed = {setAnimationSpeed}
                setArray = {setArray}
            />
        </div>
        <div id ="algoSettings">
            <AlgorithmSelection
                setWorkingAlgo = {setWorkingAlgo}
                workingAlgo={workingAlgo}
            />
            <div id= "sortContainer">
            <button id ="sortButton" onClick={handleSortBtn}>{btnTextContent}</button>
            </div>
        </div>
        <div id= "algoSettings">

        <div className = "algoGroup">
            <h2><u>Learn More About Algorithms</u></h2>
            <div id= "algorithmButton" className = "algorithmButton">
                <Link className='infoLinks' to='/selection-info'>Selection Sort</Link></div>
            {/* <div className = "infoButton"><Link to='/selection-info'><img src = {infobutton}></img></Link></div> */}
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton"><Link  className='infoLinks' to='/quick-info'>Quick Sort</Link></div>
            {/* <div className = "infoButton"><Link to='/quick-info'><img src = {infobutton}></img></Link></div> */}
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton"><Link  className='infoLinks' to='/bubble-info'>Bubble Sort</Link></div>
            {/* <div className = "infoButton"><Link to='/bubble-info'><img src = {infobutton}></img></Link></div> */}
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton"><Link  className='infoLinks' to='/merge-info'>Merge Sort</Link></div>
            {/* <div className = "infoButton"><Link to='/merge-info'><img src = {infobutton}></img></Link></div> */}
        </div>
        </div>
    
        </div>
    )
}