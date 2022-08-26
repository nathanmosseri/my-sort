
// This is the main color of the array bars.
const PRIMARY_COLOR = 'purple';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

function mergeSort(arr, animationTime){
  const animations = getMergeSortAnimations(arr);
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
          }, i * animationTime);
      } else {
      setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
      }, i * animationTime);
      }
  }
}
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


export {mergeSort}