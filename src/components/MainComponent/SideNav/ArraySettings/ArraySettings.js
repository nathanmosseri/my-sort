import "./ArraySettings.css"
export default function ArraySettings ({
    arrayLength, setArrayLength, animationSpeed, setAnimationSpeed, setArray
}){
    const handleArrLength = (e) =>{

        setArrayLength(e.target.value)
    }
    const handleAnimationSpeed = (e) =>{
        setAnimationSpeed(e.target.value)
    }
    //random integer generator
    function randomIntGenerator (min,max){
        return Math.floor(Math.random() * (max-min + 1) + min)
    }

    
    function handleGenerateArr () {
        let array = []
        for (let i = 0; i<arrayLength; i++ ){
            array.push(randomIntGenerator(5,700))
        }
        setArray(array)
    }

    let animTime = animationSpeed*(-1)

    return(
        <div className ="arraySettings">
            <p className='labels'>Set Array Length: {`${arrayLength}`}</p>
            <input 
                className='slider' 
                type= "range" 
                min = "5" 
                max = "300" 
                name = "arrayLength"
                style = {{cursor: "pointer"}}
                value = {arrayLength}
                onChange ={handleArrLength}
            ></input>
            <p className='labels'>Animation Speed: {`${animTime}ms`}</p>
            <input 
                className = 'slider' 
                type= "range" 
                min = "-500" 
                max = "-1" 
                name = "animationSpeed"
                value ={animationSpeed}
                onChange={handleAnimationSpeed}
                style = {{cursor: "pointer"}}
            ></input>
            <button id = "generateArr" name = "generateArr" style = {{cursor: "pointer"}} onClick={handleGenerateArr}>Generate New Array</button>
        </div>
    )
}