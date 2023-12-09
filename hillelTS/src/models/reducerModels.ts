import {CounterTypes} from "../enums/reducerEnums.ts";

export interface CounterModel {
    counter: number;
}

export interface CounterAction {
    type: CounterTypes;
    payload?: number;
}

export interface CounterContextModel {
    state: CounterModel,
    onIncrement(): void,
    onIncrementByValue(value: number): void,
    onDecrement(): void,
    onReset(): void
}