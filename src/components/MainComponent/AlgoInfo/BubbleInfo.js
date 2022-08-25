import React from "react";
import { Link } from "react-router-dom";
// import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";

const BubbleInfo = () => {


const block = () => {
function bblSort(arr){
    
 for(let i = 0; i < arr.length; i++){
    
   // Last i elements are already in place 
   for(let j = 0; j < ( arr.length - i -1 ); j++){
      
     // Checking if the item at present iteration
     // is greater than the next iteration
     if(arr[j] > arr[j+1]){
        
       // If the condition is true then swap them
       let temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
}
 
 
// This is our unsorted array
let arr = [234, 43, 55, 63,  5, 6, 235, 547];
 
 
// Now pass this array to the bblSort() function
bblSort(arr);
}

    return (
        <div className="info">
            <Link to='/'>Back</Link>
            <h1 className="sort-info-title">Bubble Sort</h1>
            <img src='https://www.w3resource.com/w3r_images/bubble-short.png' alt="Bubble Sort Graph"/>
            <h3 className="algo-summary">Summary</h3>
            <p className="sort-info-paragraph">
                Bubble sort is a basic algorithm for arranging a string of numbers 
                or other elements in the correct order. The method works by examining 
                each set of adjacent elements in the string, from left to right, 
                switching their positions if they are out of order. The algorithm 
                then repeats this process until it can run through the entire string 
                and find no two elements that need to be swapped.
            </p>
            <p>
                Because it has to repeatedly cycle through the entire set of elements,
                comparing only two adjacent items at a time, bubble sort is not 
                suitable for large data sets as its average and worst-case time 
                complexity is quite high. But it can work well when sorting 
                only a small number of elements.
            </p>

            <h3>Bubble Sort Example Code</h3>
            <CodeBlock 
            text={block} 
            language={'javascript'} 
            showLineNumbers={true} 
            theme={tomorrowNightBlue}
            />

            <h3>How Bubble Sort Passes Through An Array</h3>
            <p>Consider the array arr = [5, 1, 4, 2, 8]</p>
            <ol>
                <li>First Pass:</li>
                    <ul>
                        <li>Bubble sort starts with very first two elements, comparing them to check which one is greater.</li>
                        <li>[ <strong>5</strong>, <strong>1</strong>, 4, 2, 8 ]  -&gt; [ <strong>1</strong>, <strong>5</strong>, 4, 2, 8 ], Here, algorithm compares the first two elements, and swaps since 5 &gt; 1. </li>
                        <li>[ 1, <strong>5</strong>, <strong>4</strong>, 2, 8 ] –&gt;  [ 1, <strong>4</strong>, <strong>5</strong>, 2, 8 ], Swap since 5 &gt; 4 </li>
                        <li>[ 1, 4, <strong>5</strong>, <strong>2</strong>, 8 ] –&gt;  [ 1, 4, <strong>2</strong>, <strong>5</strong>, 8 ], Swap since 5 &gt; 2 </li>
                        <li>[ 1, 4, 2,  <strong>5</strong>,  <strong>8</strong> ] –&gt; [ 1, 4, 2,  <strong>5</strong>,  <strong>8</strong> ], Now, since these 
                            elements are already in order (8 &gt; 5), algorithm 
                            does not swap them.</li>
                    </ul>
                <li>Second Pass:</li>
                    <ul>
                        <li>Now, during second iteration it should look like this:</li>
                        <li>[ <strong>1</strong>, <strong>4</strong>, 2, 5, 8 ] –&gt; [ <strong>1</strong>, <strong>4</strong>, 2, 5, 8 ] </li>
                        <li>[ 1, <strong>4</strong>, <strong>2</strong>, 5, 8 ] –&gt; [ 1, <strong>2</strong>, <strong>4</strong>, 5, 8 ], Swap since 4 &gt; 2 </li>
                        <li>[ 1, 2, <strong>4</strong>, <strong>5</strong>, 8 ] –&gt; [ 1, 2, <strong>4</strong>, <strong>5</strong>, 8 ] </li>
                        <li>[ 1, 2, 4, <strong>5</strong>, <strong>8</strong> ] –&gt;  [ 1, 2, 4, <strong>5</strong>, <strong>8</strong> ] </li>
                    </ul>
                <li>Third Pass:</li>
                    <ul>
                        <li>Now, the array is already sorted, but our algorithm does not know if it is completed.</li>
                        <li>The algorithm needs one whole pass without any swap to know it is sorted.</li>
                        <li>[ <strong>1</strong>, <strong>2</strong>, 4, 5, 8 ] –&gt; [ <strong>1</strong>, <strong>2</strong>, 4, 5, 8 ] </li>
                        <li>[ 1, <strong>2</strong>, <strong>4</strong>, 5, 8 ] –&gt; [ 1, <strong>2</strong>, <strong>4</strong>, 5, 8 ] </li>
                        <li>[ 1, 2, <strong>4</strong>, <strong>5</strong>, 8 ] –&gt; [ 1, 2, <strong>4</strong>, <strong>5</strong>, 8 ] </li>
                        <li>[ 1, 2, 4, <strong>5</strong>, <strong>8</strong> ] –&gt; [ 1, 2, 4, <strong>5</strong>, <strong>8</strong> ] </li>
                    </ul>
            </ol>

            <h3>Pros and Cons of Bubble Sort</h3>
            <table className="pros-cons">
                <tr>
                    <th>Pros</th>
                    <th>Cons</th>
                </tr>
                <tr>
                    <td>The primary advantage of the bubble sort is that it is popular and easy to implement.</td>
                    <td>The main disadvantage of the bubble sort is the fact that it does not deal well with a list containing a huge number of items.</td>
                </tr>
                <tr>
                    <td>In the bubble sort, elements are swapped in place without using additional temporary storage.</td>
                    <td>The bubble sort requires n-squared processing steps for every n number of elements to be sorted.</td>
                </tr>
                <tr>
                    <td>The space requirement is at a minimum</td>
                    <td>The bubble sort is mostly suitable for academic teaching but not for real-life applications.</td>
                </tr>
            </table>
            <h3 className="algo-time-complexity">Time Complexity</h3>
            <table className="time-complexity-table">
                <tr>
                    <th>Best Case (numbers already sorted)</th>
                    <th>Worst Case (numbers in descending order)</th>
                    <th>Average Case</th>
                </tr>
                <tr>
                    <td>O(n)</td>
                    <td>O(n²)</td>
                    <td>O(n2)</td>
                </tr>
            </table>

        </div>
    )
}

export default BubbleInfo