import "./AlgorithmSelection.css"
import infobutton from "../../../images/info.png"
import { Link } from "react-router-dom"

export default function AlgorithmSelection () {
    return(
        <>
        <h2><u>Select An Algorithm:</u></h2>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Selection Sort</div>
            <div className = "infoButton"><Link to='/selection-info'><img src = {infobutton}></img></Link></div>
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Quick Sort</div>
            <div className = "infoButton"><Link to='/quick-info'><img src = {infobutton}></img></Link></div>
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Bubble Sort</div>
            <div className = "infoButton"><Link to='/bubble-info'><img src = {infobutton}></img></Link></div>
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Merge Sort</div>
            <div className = "infoButton"><Link to='/merge-info'><img src = {infobutton}></img></Link></div>
        </div>
        </>
    )
}