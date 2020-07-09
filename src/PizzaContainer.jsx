import React, { Component, useState } from "react";
import Pizza from './Pizza'

function PizzaContainer()  {
    const PIZZA_SLICES = 8;
    const [count, setCount] = useState(0);
    const [slices, setSlices] = useState(0);
    const [result, setResult] = useState(0);

    const countHandler = event =>{
        setCount(event.target.value);
    }

    const slicesHandler = event =>{
        setSlices(event.target.value);
    }

    const resetHandler = event =>{
        setCount(0);
        setSlices(0);
        setResult(0);
    }

    const calculateHandler = event =>{
        let operation = Math.round((count * slices) / PIZZA_SLICES);
        setResult(operation);
    }

    return (
        <>
            <Pizza count={count} slices={slices} countHandler={countHandler} slicesHandler={slicesHandler}
            result={result} resetHandler={resetHandler} calculateHandler={calculateHandler}/>
        </>
    )
}

export default PizzaContainer;