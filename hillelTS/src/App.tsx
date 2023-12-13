import React, {BaseSyntheticEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "./redux/slices/counterSlice.ts";
import {RootState} from "@reduxjs/toolkit/query";

function App(): React.JSX.Element {
    const dispatch = useDispatch();
    const counter: number = useSelector((state: RootState) => state.counter.value);
    const [incrementValue, setIncrementValue] = useState<number>(0);

    const handleIncrementValueChange = (e: BaseSyntheticEvent) => {
        setIncrementValue(e.target.value);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(actions.increment())}>Increment</button>
            <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
            <button onClick={() => dispatch(actions.reset())}>Reset</button>
            <div>
                <input type='number' placeholder='Value' value={incrementValue} onChange={handleIncrementValueChange} />
                <button onClick={() => dispatch(actions.incrementByValue(Number(incrementValue)))}>Increment by value</button>

            </div>
        </div>
    )
}

export default App
