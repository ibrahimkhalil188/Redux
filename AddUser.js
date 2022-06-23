
const { createStore } = require("redux")


const ADD_USER = "ADD_USER"

const user = {

    user: ["ibrahim"],
    count: 0
}

const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const addUserReducer = (state = user, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                user: [...state.user, action.payload],
                count: state.count + 1
            }
        }
        default: return state
    }
}


const store = createStore(addUserReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUser("Rohim"))
store.dispatch(addUser("korim"))