import React from "react";
import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
import { Link } from "react-router-dom";

const SelectionInfo = () => {

    const block = () => {
        function merge(arr, l, m, r) {
        let n1 = m - l + 1;
        let n2 = r - m;
    
        // Create temp arrays
        let L = new Array(n1);
        let R = new Array(n2);
    
        // Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (let j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
    
        // Merge the temp arrays back into arr[l..r]
    
        // Initial index of first subarray
        let i = 0;
    
        // Initial index of second subarray
        let j = 0;
    
        // Initial index of merged subarray
        let k = l;
    
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
    
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
    
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    
    // l is for left index and r is
    // right index of the sub-array
    // of arr to be sorted */
    function mergeSort(arr,l, r){
        if(l>=r){
            return;//returns recursively
        }
        let m =l+ parseInt((r-l)/2);
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }
    
        let arr = [ 12, 11, 13, 5, 6, 7 ];
        let arr_size = arr.length;
    
        mergeSort(arr, 0, arr_size - 1);
    }

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

            <h3>Merge Sort Example Code</h3>
            <CodeBlock 
            text={block}
            language={'javascript'}
            theme={tomorrowNightBlue}
            />

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