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

            <h3>How Selection Sort Passes Through an Array</h3>
            <p>Consider the array arr= [64, 25, 12, 22, 11]</p>
            <ol>
                <li>First Pass:</li>
                    <ul>
                        <li>For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially. The first position where 64 is stored presently, after traversing whole array it is clear that 11 is the lowest value.</li>
                            <ul>
                                <li>[<strong>64</strong>, 25, 12, 22, <strong>11</strong>]</li>
                            </ul>
                        <li>Thus, replace 64 with 11. After one iteration, 11, which happens to be the least value in the array, tends to appear in the first position of the sorted list.</li>
                            <ul>
                                <li>[<strong>11</strong>, 25, 12, 22, <strong>64</strong>]</li>
                            </ul>
                    </ul>
                <li>Second Pass:</li>
                    <ul>
                        <li>For the second position, where 25 is present, again traverse the rest of the array in a sequential manner.</li>
                            <ul>
                                <li>[11, <strong>25</strong>, <strong>12</strong>, 22, 24]</li>
                            </ul>
                        <li>After traversing, we found that 12 is the second lowest value in the array and it should appear at the second place in the array, thus swap these values.</li>
                            <ul>
                                <li>[11, <strong>12</strong>, <strong>25</strong>, 22, 64]</li>
                            </ul>
                    </ul>
                <li>Third Pass:</li>
                    <ul>
                        <li>Now, for third place, where 25 is present again traverse the rest of the array and find the third least value present in the array.</li>
                            <ul>
                                <li>[11, 12, <strong>25</strong>, <strong>22</strong>, 64]</li>
                            </ul>
                        <li>While traversing, 22 came out to be the third least value and it should appear at the third place in the array, thus swap 22 with element present at third position.</li>
                            <ul>
                                <li>[11, 12, <strong>22</strong>, <strong>25</strong>, 64]</li>
                            </ul>
                    </ul>
                <li>Fourth Pass:</li>
                    <ul>
                        <li>Similarly, for fourth position traverse the rest of the array and find the fourth least element in the array </li>
                        <li>As 25 is the 4th lowest value hence, it will place at the fourth position.</li>
                            <ul>
                                <li>[11, 12, 22, <strong>25</strong>, 64]</li>
                            </ul>
                    </ul>
                <li>Fifth Pass:</li>
                    <ul>
                        <li>At last the largest value present in the array automatically gets placed at the last position in the array</li>
                        <li>The resulted array is the sorted array.</li>
                            <ul>
                                <li>[11, 12, 22, 25, 64]</li>
                            </ul>
                    </ul>

                    
            </ol>

            <table className="pros-cons">
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
            <h3 className="algo-time-complexity">Time Complexity</h3>
            <table className="time-complexity-table">
                <tr>
                    <th>Best Case (numbers already sorted)</th>
                    <th>Worst Case</th>
                    <th>Average Case</th>
                </tr>
                <tr>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                </tr>
            </table>

        </div>
    )
}

export default SelectionInfo