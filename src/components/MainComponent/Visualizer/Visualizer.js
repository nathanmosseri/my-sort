import "./Visualizer.css"
export default function Visualizer({workingArray, animationSpeed}){

    if(workingArray.length>0)
    return(
        <div id = "visualizer">
            <div className="arrContainer">{
            workingArray.map((value,index)=>(
                <div 
                    className = "arrBar" 
                    key = {index} 
                    style = {
                        {backgroundColor: "blue", 
                        height: `${value}px`, 
                        }
                    }
                ></div>
            )) 
        }
        </div>
        </div>
        
    )
}