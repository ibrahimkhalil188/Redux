
// import for create store

const { createStore } = require("redux")

//Defining constants

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

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

// reducer

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                count: state.count + 1
            }
        }
        case DECREMENT: {
            return {
                count: state.count - 1
            }
        }
        case RESET: {
            return {
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

