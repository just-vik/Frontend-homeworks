import React, { useState } from 'react';


export default function StepCounter() {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(1);
    const increment = () => {
        setCount(count + step);
    };
    const decrement = () => {
        setCount(count - step);
    };
    const updStep = (newStep: string) => {
        setStep(+newStep);
    };

    return (
        <div>
            <h3 > {count} </h3 >
            <input type="number" value={step} onChange={(event) => updStep((event.target.value))} style={{ marginRight: '5px' }} />
            <button onClick={decrement} style={{ marginRight: '5px' }}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

