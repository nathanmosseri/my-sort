import "./AlgorithmSelection.css"
import infobutton from "../../../images/info.png"
export default function AlgorithmSelection ({setWorkingAlgo}) {
  
    const handleSetAlgo = (e) =>{
        let chosenAlgo = e.target.id
        setWorkingAlgo(chosenAlgo)
    }

    return(
        <>
        <h2><u>Select An Algorithm:</u></h2>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton"><button id = "Bubble" onClick ={(e)=>handleSetAlgo(e)}>Bubble Sort</button></div>
        </div>
        <div className = "algoGroup">
            <div id= "algorithmButton" className = "algorithmButton"><button id = "Merge" onClick ={(e)=>handleSetAlgo(e)}>Merge Sort</button></div>
        </div>
        </>
    )
}
