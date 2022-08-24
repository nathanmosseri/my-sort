import "./Visualizer.css"
export default function Visualizer({workingArray}){
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 100;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
function getMergeSortAnimations(arr){
    const animations =[]
    const auxArr = arr.slice();
    mergeSortHelper(arr,0,arr.length-1,auxArr, animations);
    return animations
}
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxArr,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArr, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxArr, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxArr, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxArr,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
        animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
        animations.push([i, j]);
        if (auxArr[i] <= auxArr[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxArr[i]]);
        mainArray[k++] = auxArr[i++];
        } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxArr[j]]);
        mainArray[k++] = auxArr[j++];
        }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
        animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
        animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
        animations.push([k, auxArr[i]]);
        mainArray[k++] = auxArr[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
        animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
        animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
        animations.push([k, auxArr[j]]);
        mainArray[k++] = auxArr[j++];
    }
} 
function mergeSort(){
    const animations = getMergeSortAnimations(workingArray);
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('arrBar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
        setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
        }
    }
}
    if(workingArray.length>0)
    return(
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
        <button onClick={() => mergeSort()}>Merge Sort</button>
        </div>
    )
}