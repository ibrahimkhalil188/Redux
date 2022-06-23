
const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const thunk = require("redux-thunk").default

// define const
const GET_TO_DO_REQUEST = "GET_TO_DO_REQUEST"
const GET_TO_DO_SUCCESS = "GET_TO_DO_SUCCESS"
const GET_TO_DO_FAILED = "GET_TO_DO_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos"

//state
const todoState = {
    isLoading: false,
    todo: [],
    error: ""
}

//action

const todoGetRequest = () => {
    return {
        type: GET_TO_DO_REQUEST
    }
}
const todoGetRequestSuccess = (todo) => {
    return {
        type: GET_TO_DO_SUCCESS,
        payload: todo
    }
}

const todoGetRequestFailed = (error) => {
    return {
        type: GET_TO_DO_FAILED,
        payload: error
    }
}

// reducer

const todoReducer = (state = todoState, action) => {
    switch (action.type) {
        case GET_TO_DO_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_TO_DO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                todo: action.payload
            }
        }
        case GET_TO_DO_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        default: return state
    }
}

// async function

const fetchDate = () => {
    return (dispatch) => {
        dispatch(todoGetRequest())
        axios.get(API_URL)
            .then(res => {
                const todos = res.data
                const todo = todos.map(t => t.title)
                dispatch(todoGetRequestSuccess(todo))
            })
            .catch(error => {
                dispatch(todoGetRequestFailed(error.message))
            })
    }
}


const store = createStore(todoReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchDate())