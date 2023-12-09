import {CounterTypes} from "../enums/reducerEnums.ts";
import {CounterAction} from "../models/reducerModels.ts";

export const increment = (): CounterAction => {
    return {type: CounterTypes.INCREMENT}
}

export const decrement = (): CounterAction => {
    return {type: CounterTypes.DECREMENT}
}

export const reset = (): CounterAction => {
    return {type: CounterTypes.RESET}
}

export const incrementByValue = (value: number): CounterAction => {
    return {type: CounterTypes.INCREMENT_BY_VALUE, payload: value}
}