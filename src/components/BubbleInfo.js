import React from "react";
import { Link } from "react-router-dom";

const BubbleInfo = () => {
    return (
        <div className="info">
            <Link to='/'>Back</Link>
            <h1 className="sort-info-title">Bubble Sort</h1>
            <img src='https://www.w3resource.com/w3r_images/bubble-short.png'/>
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
                optimal for more massive datasets. But it can work well when sorting 
                only a small number of elements.
            </p>

            <table className="info-table">
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

        </div>
    )
}

export default BubbleInfo