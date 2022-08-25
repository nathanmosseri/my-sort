import React from "react";
import { Link } from "react-router-dom";

const BubbleInfo = () => {
    return (
        <div className="algo-info">
            <Link to='/' className="back-button">Back</Link>
            <h1 className='info-header'>Bubble Sort</h1>
        </div>
    )
}

export default BubbleInfo