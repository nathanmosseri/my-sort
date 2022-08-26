import React from "react";
import { CodeBlock, tomorrowNightBlue } from "react-code-blocks";
import { Link } from "react-router-dom";
import './info.css'


const QuickInfo = () => {

    const block = () => {
        function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    /* This function takes last element as pivot, places
    the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
    to left of pivot and all greater elements to right
    of pivot */
    function partition(arr, low, high) {
    
        // pivot
        let pivot = arr[high];
    
        // Index of smaller element and
        // indicates the right position
        // of pivot found so far
        let i = (low - 1);
    
        for (let j = low; j <= high - 1; j++) {
    
            // If current element is smaller 
            // than the pivot
            if (arr[j] < pivot) {
    
                // Increment index of 
                // smaller element
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return (i + 1);
    }
    
    /* The main function that implements QuickSort
            arr[] --> Array to be sorted,
            low --> Starting index,
            high --> Ending index
    */
    function quickSort(arr, low, high) {
        if (low < high) {
    
            // pi is partitioning index, arr[p]
            // is now at right place 
            let pi = partition(arr, low, high);
    
            // Separately sort elements before
            // partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    let arr = [10, 7, 8, 9, 1, 5];
    let n = arr.length;
    
    quickSort(arr, 0, n - 1);    
    }

    return (
        <div className="info">
            <Link className="backButton" to='/'>Back</Link>
            <h1 className="sort-info-title">Quick Sort Info</h1>
            <img src="https://cdn-images-1.medium.com/max/600/1*YBBPKTeYJs1eI_4hEhntIg.png" alt="Quick Sort Graph" />
            <h3>Summary</h3>
            <p className="sort-info-paragraph">
                Quicksort is a popular sorting algorithm that is often faster 
                in practice compared to other sorting algorithms. It utilizes a 
                divide-and-conquer strategy to quickly sort data items by dividing
                a large array into two smaller arrays. It was developed by 
                Charles Antony Richard Hoare (commonly known as C.A.R. Hoare or 
                Tony Hoare) in 1960 for a project on machine translation for the 
                National Physical Laboratory.
            </p>
            <p>
                Quicksort is an algorithm used to quickly sort items within an 
                array no matter how big the array is. It is quite scalable and
                works relatively well for small and large data sets, and is easy
                to implement with little time complexity. It does this through a
                divide-and-conquer method that divides a single large array into 
                two smaller ones and then repeats this process for all created 
                arrays until the sort is complete.The quicksort algorithm is 
                performed as follows: A pivot point is chosen from the array. 
                The array is reordered so that all values smaller than the pivot 
                are moved before it and all values larger than the pivot are moved 
                after it, with values equaling the pivot going either way. When 
                this is done, the pivot is in its final position. The above step 
                is repeated for each subarray of smaller values as well as done 
                separately for the subarray with greater values. This is repeated 
                until the entire array is sorted.
            </p>

            <h3>Quick Sort Example Code</h3>
            <CodeBlock 
            text={block}
            language={'javascript'}
            theme={tomorrowNightBlue}
            />

            <h3>How Quick Sort Passes Through an Array</h3>
            <p>Consider the array arr = [10, 80, 30, 90, 40, 50, 70]</p>
            <ol>
                <li>Indexes:  0   1   2   3   4   5   6 </li>
                <li>low = 0, high =  6, pivot = arr[h] = 70</li>
                <li>Initialize index of smaller element, i = -1</li>
                <li>Traverse elements from j = low to high-1</li>
                    <ul>
                        <li>j = 0: Since arr[j] &#60;= pivot, do i++ and swap(arr[i], arr[j])</li>
                        <li>i = 0 </li>
                    </ul>
                <li> No change as i and j are same</li>
                    <ul>
                        <li>arr = [10, 80, 30, 90, 40, 50, 70]</li>
                    </ul>
                <li>j = 1: Since arr[j] &gt; pivot, do nothing</li>
                <li>j = 2 : Since arr[j] &#60;= pivot, do i++ and swap(arr[i], arr[j])</li>
                <li>i = 1</li>
                <li>We swap 80 and 30 </li>
                    <ul>
                        <li>[10, <strong>80</strong>, <strong>30</strong>, 90, 40, 50, 70] -&gt; [10, <strong>30</strong>, <strong>80</strong>, 90, 40, 50, 70]</li>
                    </ul>
                <li>j = 3 : Since arr[j] &gt; pivot, do nothing // No change in i and arr[]</li>
                <li>j = 4 : Since arr[j] &#60;= pivot, do i++ and swap(arr[i], arr[j])</li>
                <li>i = 2</li>
                <li>80 and 40 Swapped</li>
                    <ul>
                        <li>[10, 30, <strong>80</strong>, 90, <strong>40</strong>, 50, 70] -&gt; [10, 30, <strong>40</strong>, 90, <strong>80</strong>, 50, 70]</li>
                    </ul>
                <li>j = 5 : Since arr[j] &#60;= pivot, do i++ and swap arr[i] with arr[j] </li>
                <li>i = 3 </li>
                <li>90 and 50 Swapped </li>
                    <ul>
                        <li>[10, 30, 40, <strong>90</strong>, 80, <strong>50</strong>, 70] -&gt; [10, 30, 40, <strong>50</strong>, 80, <strong>90</strong>, 70] </li>
                    </ul>
                <li>We come out of loop because j is now equal to high-1.</li>
                <li>Finally we place pivot at correct position by swapping arr[i+1] and arr[high] (or pivot) </li>
                <li>80 and 70 Swapped </li>
                    <ul>
                        <li>[10, 30, 40, 50, <strong>80</strong>, 90, <strong>70</strong>] -&gt; [10, 30, 40, 50, <strong>70</strong>, 90, <strong>80</strong>] </li>
                    </ul>
                <li>Now 70 is at its correct place. All elements smaller than 70 are before it and all elements greater than 70 are after it.</li>
                <li>Since quick sort is a recursive function, we call the partition function again at left and right partitions</li>
                <li>Again call function at right part and swap 80 and 90</li>
                    <ul>
                        <li>[10, 30, 40, 50, 70, <strong>90</strong>, <strong>80</strong>] -&gt; [10, 30, 40, 50, 70, <strong>80</strong>, <strong>90</strong>]</li>
                    </ul>
                <li>Array is now sorted</li>
                    <ul>
                        <li>arr = [10, 30, 40, 50, 70, 80, 90]</li>
                    </ul>
            </ol>

            <h3>Pros and Cons of Merge Sort</h3>
            <table className="pros-cons">
                <tr>
                    <th>Pros</th>
                    <th>Cons</th>
                </tr>
                <tr>
                    <td>The quick sort is regarded as the best sorting algorithm.</td>
                    <td>The slight disadvantage of quick sort is that its worst-case performance is similar to average performances of the bubble, insertion or selections sorts.</td>
                </tr>
                <tr>
                    <td>It is able to deal well with a huge list of items.</td>
                    <td>If the list is already sorted than bubble sort is much more efficient than quick sort</td>
                </tr>
                <tr>
                    <td>Because it sorts in place, no additional storage is required as well</td>
                    <td>If the sorting element is integers then radix sort is more efficient than quick sort.</td>
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
                    <td>O(n log n)</td>
                    <td>O(n log n)</td>
                    <td>O(n²)</td>
                </tr>
            </table>

        </div>
    )
}

export default QuickInfo