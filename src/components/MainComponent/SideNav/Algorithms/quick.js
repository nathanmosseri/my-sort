
const PRIMARY_COLOR = 'purple';

const SECONDARY_COLOR = 'red';

function quickSort(arr, animationTime) {
  const animations = getQuickSortAnimations(arr)
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('arrBar');
    const isColorChange = i % 3 ;  
    if (isColorChange ) {
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

function getQuickSortAnimations(arr){
  const animations = []
  const auxArr = arr.slice()
  getQuickAnimations(arr,auxArr, 0,arr.length-1,animations)
  return animations

}

function getQuickAnimations(arr,auxArr, startIdx, endIdx, animations){

  if(startIdx >= endIdx) return;
  let pivot = startIdx
  let leftPointer = startIdx+1
  let rightPointer = endIdx;

  animations.push([pivot,pivot])
  animations.push([leftPointer,rightPointer])
  while(leftPointer <= rightPointer){
    if (auxArr[leftPointer]>auxArr[pivot] && auxArr[rightPointer] <auxArr[pivot]){
      animations.push([leftPointer, auxArr[rightPointer]])
      animations.push([rightPointer, auxArr[leftPointer]])
      let temp = auxArr[rightPointer];
      auxArr[rightPointer] = auxArr[leftPointer];
      auxArr[leftPointer] = temp;
      let temp1 = arr[rightPointer];
      arr[rightPointer] = arr[leftPointer];
      arr[leftPointer] = temp1;
    } 
    // else if(auxArr[rightPointer]>auxArr[pivot] && auxArr[leftPointer] <auxArr[pivot]){
    //   animations.push([rightPointer, auxArr[rightPointer]])
    //   animations.push([])
    // }
    if(auxArr[rightPointer] >= auxArr[pivot]){
      animations.push([rightPointer, auxArr[rightPointer]])
      animations.push([pivot, auxArr[pivot]])
      rightPointer --
    }
    if(auxArr[leftPointer] <= auxArr[pivot]){
      animations.push([leftPointer, auxArr[leftPointer]])
      animations.push([pivot, auxArr[pivot]])
      leftPointer ++
    }
    if(rightPointer>leftPointer) animations.push([leftPointer,rightPointer])
  }
  animations.push([pivot,rightPointer])
  if (pivot !== rightPointer){
    // let temp = auxArr[rightPointer]
    // auxArr[rightPointer]= auxArr[pivot]
    // auxArr[pivot] = temp
    // let temp1 = arr[rightPointer];
    // arr[rightPointer] = arr[pivot];
    // arr[pivot] = temp1;
    animations.push([pivot,auxArr[rightPointer]])
    animations.push([rightPointer, auxArr[pivot]])
    animations.push([rightPointer, rightPointer])
  }
  getQuickAnimations(arr,auxArr,startIdx,rightPointer-1, animations)
  getQuickAnimations(arr,auxArr,rightPointer+1,endIdx, animations)
}
export {quickSort}