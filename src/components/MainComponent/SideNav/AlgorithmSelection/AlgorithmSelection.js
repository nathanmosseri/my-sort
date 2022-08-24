import "./AlgorithmSelection.css"
import infobutton from "../../../images/info.png"
export default function AlgorithmSelection () {
    return(
        <>
        <h2><u>Select An Algorithm:</u></h2>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Selection Sort</div>
            <div className = "infoButton"><img src = {infobutton}></img></div>
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Quick Sort</div>
            <div className = "infoButton"><img src = {infobutton}></img></div>
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Bubble Sort</div>
            <div className = "infoButton"><img src = {infobutton}></img></div>
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton">Merge Sort</div>
            <div className = "infoButton"><img src = {infobutton}></img></div>
        </div>
        </>
    )
}