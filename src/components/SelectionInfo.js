import React from "react";
import { Link } from "react-router-dom";

const SelectionInfo = () => {
    return (
        <div className="info">
        <Link to='/'>Back</Link>
        <h1 className="sort-info-title">Selection Sort</h1>
            <img src="https://i.stack.imgur.com/5ai2E.jpg" />
            <p className="sort-info-paragraph">
                Selection sort is a simple sorting algorithm. This sorting 
                algorithm is an in-place comparison-based algorithm in which the
                list is divided into two parts, the sorted part at the left end
                and the unsorted part at the right end. Initially, the sorted 
                part is empty and the unsorted part is the entire list.The smallest
                element is selected from the unsorted array and swapped with the 
                leftmost element, and that element becomes a part of the sorted 
                array. This process continues moving unsorted array boundary by 
                one element to the right.This algorithm is not suitable for large 
                data sets as its average and worst case complexities are of Ο(n2), 
                where n is the number of items.
            </p>

            <table className="info-table">
                <tr>
                    <th>Pros</th>
                    <th>Cons</th>
                </tr>
                <tr>
                    <td>The main advantage of the selection sort is that it performs well on a small list.</td>
                    <td>The primary disadvantage of the selection sort is its poor efficiency when dealing with a huge list of items.</td>
                </tr>
                <tr>
                    <td>Because it is an in-place sorting algorithm, no additional temporary storage is required beyond what is needed to hold the original list.</td>
                    <td>The selection sort requires n-squared number of steps for sorting n elements.</td>
                </tr>
                <tr>
                    <td>Its performance is easily influenced by the initial ordering of the items before the sorting process.</td>
                    
                </tr>
            </table>

        </div>
    )
}

export default SelectionInfo