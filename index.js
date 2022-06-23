//state
//action
//reducer
//store

import { StoreCreator } from "redux"

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

const counterState = {
    count: 0
}

const increment = () => {
    type: INCREMENT
}
const decrement = () => {
    type: DECREMENT
}
const reset = () => {
    type: RESET
}

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT: {
            count: state.count + 1
        }
        case DECREMENT: {
            count: state.count - 1
        }
        case DECREMENT: {
            count: 0
        }
        default: return state
    }
}

const store = configureStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment())