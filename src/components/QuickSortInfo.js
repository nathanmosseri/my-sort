import React from "react";
import { Link } from "react-router-dom";

const QuickSortInfo = () => {
    return (
        <div className="info">
            <Link to='/'>Back</Link>
            <h1 className="sort-info-title">Quick Sort Info</h1>
            <img src="https://cdn-images-1.medium.com/max/600/1*YBBPKTeYJs1eI_4hEhntIg.png" />
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

            <table className="info-table">
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
                    <td>If the sorting element is integers than radix sort is more efficient than quick sort.</td>
                </tr>
            </table>

        </div>
    )
}

export default QuickSortInfo