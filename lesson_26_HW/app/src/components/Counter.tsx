import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    const double = () => {
        setCount(count * 2);
    };

    return (
        <div>
            <h3 > {count} </h3 >
            <button onClick={decrement} style={{ marginRight: '5px' }}>-</button>
            <button onClick={increment} style={{ marginRight: '5px' }}>+</button>
            <button onClick={reset} style={{ marginRight: '5px' }}>0</button>
            <button onClick={double}>x2</button>
        </div>
    );
}
