import React from "react";
import { Link } from "react-router-dom";

const SelectionInfo = () => {
    return (
        <div className="info">
        <Link to='/'>Back</Link>
        <h1 className="sort-info-title">Merge Sort</h1>
            <img src='https://miro.medium.com/max/661/1*7Kox4Bll0Ddvb0td1tiXsg.png' alt="Merge Sort Graph" />
            <h3>Summary</h3>
            <p className="sort-info-paragraph">
                The Merge Sort algorithm is a sorting algorithm that is considered 
                an example of the divide and conquer strategy. So, in this algorithm, 
                the array is initially divided into two equal halves and then they 
                are combined in a sorted manner. We can think of it as a recursive 
                algorithm that continuously splits the array in half until it 
                cannot be further divided. This means that if the array becomes 
                empty or has only one element left, the dividing will stop, i.e. 
                it is the base case to stop the recursion. If the array has multiple 
                elements, we split the array into halves and recursively invoke the 
                merge sort on each of the halves. Finally, when both the halves are 
                sorted, the merge operation is applied. Merge operation is the 
                process of taking two smaller sorted arrays and combining them to 
                eventually make a larger one.
            </p>

            <h3>How Merge Sort Passes Through an Array</h3>
            <p>Consider the array arr = [38, 27, 43, 3, 9, 82, 10]</p>
            <ol>
                <li>At first, check if the left index of the array is less than the right index, if it is then calculate its mid point</li> 
                <li>Now, merge sort first divides the whole array iteratively into equal halves, unless the atomic values are achieved. </li>
                <li>Here, we see that an array of 7 items is divided into two arrays of length 4 and 3 respectively.</li>
                    <ul>
                        <li>[38, 27, 43, 3, 9, 82, 10] -&gt; [38, 27, 43, 3] [9, 82, 10]</li>
                    </ul>
                <li>Now, again find that the left index is less than the right index for both arrays, if it is, then again calculate mid points for both the arrays.</li>
                <li>Now, further divide these two arrays into further halves, until the atomic units of the array is reached and further division is not possible.</li>
                    <ul>
                        <li>[38, 27, 43, 3] [9, 82, 10] -&gt; [38, 27] [43,3] [9, 82] [10]</li>
                        <li>[38, 27] [43,3] [9, 82] [10] -&gt; [38] [27] [43] [3] [9] [82] [10]</li>
                    </ul>
                <li>After dividing the array into the smallest possible units, start merging the elements again based on the comparison of the size of the elements</li>
                <li>Firstly, compare the element for each array and then combine them into another array in a sorted manner.</li>
                    <ul>
                        <li>[38] [27] [43] [3] [9] [82] [10] -&gt; [27, 38] [3, 43] [9, 82] [10]</li>
                    </ul>
                <li>After the final merging, the array looks like this:</li>
                    <ul>
                        <li>[27, 38] [3, 43] [9, 82] [10] -&gt; [3, 27, 38, 43] [9, 10, 82]</li>
                        <li>[3, 27, 38, 43] [9, 10, 82] -&gt; [3, 9, 10, 27, 38, 43, 82]</li>   
                    </ul>
            </ol>

            <h3>Pros and Cons of Merge Sort</h3>
            <table className="pros-cons">
                <tr>
                    <th>Pros</th>
                    <th>Cons</th>
                </tr>
                <tr>
                    <td>It is quicker for larger arrays because it doesn't go through the whole array several times.</td>
                    <td>Slower comparative to the other sort algorithms for smaller data sets and marginally slower than quick sort in practice</td>
                </tr>
                <tr>
                    <td>Stable sorting algorithm</td>
                    <td>Goes through the whole process even if the array is sorted</td>
                </tr>
                <tr>
                    <td>𝑂(𝑛𝑙𝑜𝑔𝑛) worst case asymptotic complexity.</td>
                    <td>It uses more memory space to store the sub elements of the initial split array.</td>
                    
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
                    <td>O(n*log n)</td>
                    <td>O(n*log n)</td>
                    <td>O(n*log n)</td>
                </tr>
            </table>

        </div>
    )
}

export default SelectionInfo