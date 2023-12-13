import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})