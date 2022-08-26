
const PRIMARY_COLOR = 'purple';

const SECONDARY_COLOR = 'red';


function bubbleSort(arr, animationTime){
    const animations = getBubbleAnimations(arr)
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('arrBar');
        const isColorChange = (i % 4)+1;  
        if (isColorChange <=2) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 || i % 4 === 3? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * animationTime/2);
        } else {
        setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
        }, i * animationTime/2);
        }
    }
}

function getBubbleAnimations(arr){
    let animations =[]
    let auxArr = arr.slice();
    let sorted = false
    let round = 0

    while(!sorted) {
        sorted = true;
        for(let i = 0; i<arr.length-1-round; i++){

            animations.push([i,i+1])
            animations.push([i,i+1])
            if(auxArr[i]>auxArr[i+1]){
                animations.push([i+1, auxArr[i]])
                animations.push([i, auxArr[i+1]])
                let temp = auxArr[i];
                auxArr[i] = auxArr[i + 1];
                auxArr[i + 1] = temp;
                let temp1 = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp1;
                sorted = false
            }else{
                animations.push([i,auxArr[i]])
                animations.push([i+1, auxArr[i+1]])
                sorted = false
            }
        }

        round++
    }
    return animations
}

export {bubbleSort}