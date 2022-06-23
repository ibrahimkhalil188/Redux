
// import for create store

const { createStore } = require("redux")

//Defining constants

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
//initial state of counter

const counterState = {
    count: 0
}


// action and action type 

const increment = () => {
    return {
        type: INCREMENT
    }
}
const decrement = () => {
    return {
        type: DECREMENT
    }
}
const reset = () => {
    return {
        type: RESET
    }
}

// use case of payload. it update the value by providing value.
const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

// reducer

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case INCREMENT_BY_VALUE: {
            return {
                ...state,
                count: state.count + action.payload
            }
        }
        case RESET: {
            return {
                ...state,
                count: 0
            }
        }
        default: return state
    }
}

// create a store

const store = createStore(counterReducer)

// subscribe the store

store.subscribe(() => {
    console.log(store.getState())
})

//dispatch the store or click event or button in real life 

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(reset())
store.dispatch(incrementByValue(5))

