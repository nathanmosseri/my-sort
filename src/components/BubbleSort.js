import React from "react";
import { useParams } from "react-router-dom";

const BubbleSort = () => {

    const { algoId } = useParams()

    return (
        <p>{algoId}</p>
    )
}

export default BubbleSort