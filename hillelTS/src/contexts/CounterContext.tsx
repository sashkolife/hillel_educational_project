import React, {createContext, ReactNode, useReducer} from "react";
import * as actionCreators from "../actionCreators/actionCreators.ts";
import {CounterAction, CounterContextModel, CounterModel} from "../models/reducerModels.ts";
import {CounterTypes} from "../enums/reducerEnums.ts";

export const CounterContext: React.Context<CounterContextModel> = createContext<CounterContextModel>({} as CounterContextModel);

interface Props {
    children: ReactNode
}

export const CounterProvider = ({children}: Props) => {

    const initialState: CounterModel = {
        counter: 0
    };

    const reducer = (store: CounterModel, action: CounterAction): CounterModel => {
        const {type, payload} = action;
        switch (type) {
            case CounterTypes.INCREMENT:
                return {...store, counter: store.counter + 1};
            case CounterTypes.INCREMENT_BY_VALUE:
                return {...store, counter: store.counter + Number(payload)};
            case CounterTypes.DECREMENT:
                return {...store, counter: store.counter - 1};
            case CounterTypes.RESET:
                return {...store, counter: 0};
            default:
                return store;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch(actionCreators.increment());
    };

    const handleIncrementByValue = (value: number) => {
        dispatch(actionCreators.incrementByValue(value));
    };

    const handleDecrement = () => {
        dispatch(actionCreators.decrement());
    };

    const handleReset = () => {
        dispatch(actionCreators.reset());
    };


    const providerValue: CounterContextModel = {
        state,
        onIncrement: handleIncrement,
        onIncrementByValue: handleIncrementByValue,
        onDecrement: handleDecrement,
        onReset: handleReset
    };

    return (
        <CounterContext.Provider value={providerValue}>
            {children}
        </CounterContext.Provider>
    );
}