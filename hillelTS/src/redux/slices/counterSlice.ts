import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CounterState} from "../../models/reduxModels.ts";

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state: CounterState) => {
            state.value = state.value + 1;
        },
        decrement: (state: CounterState) => {
            state.value = state.value - 1;
        },
        reset: (state: CounterState) => {
            state.value = 0;
        },
        incrementByValue: (state: CounterState, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        }
    }
});

export default counterSlice.reducer;
export const { increment, decrement, reset, incrementByValue } = counterSlice.actions;