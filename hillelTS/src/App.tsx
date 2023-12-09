import React, {BaseSyntheticEvent, useContext, useState} from "react";
import {CounterContext} from "./contexts/CounterContext.tsx";
import {CounterContextModel} from "./models/reducerModels.ts";

function App(): React.JSX.Element {

    const [incrementValue, setIncrementValue] = useState<number>(0);

    const handleIncrementValueChange = (e: BaseSyntheticEvent) => {
        setIncrementValue(e.target.value);
    };

    const {state, onIncrement, onIncrementByValue, onDecrement, onReset } = useContext<CounterContextModel>(CounterContext);

    return (
        <>
            <div>
                <h1>Counter value: {state.counter}</h1>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onReset}>Reset</button>
                <div>
                    <input type='number' placeholder='Value' value={incrementValue} onChange={handleIncrementValueChange} />
                    <button onClick={() => onIncrementByValue(incrementValue)}>Increment by value</button>

                </div>
            </div>
        </>
    )
}

export default App
