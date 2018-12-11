import { createStore, combineReducers } from "redux";


const FIRST_ACTION = 'store/FIRST_ACTION'
const INC = 'store/INC'
const DEC = 'store/DEC'

const INITIAL_STATE = {
    firstAction: false
}

const C_INITIAL_STATE = {
    counter: 0
}

export const firstAction = () => ({
    type: FIRST_ACTION
})

export const incAction = () => ({
    type: INC
})

export const decAction = () => ({
    type: DEC
})


const firstActionReducerName = (state = INITIAL_STATE, action) => {
    if (action.type === FIRST_ACTION) {
        return {
            ...state,
            firstAction: true
        }
    }

    return state
}

const counterReducerName = (state = C_INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }

}


const reducer = combineReducers({   ///zbiera reducery
    firstActionReducerName,
    counterReducerName
})



export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)




store.dispatch({ type: FIRST_ACTION }) //akcja wyslana do reducera z palca 
store.dispatch({ type: FIRST_ACTION }) //akcja wyslana do reducera, 
store.dispatch(firstAction()) //akcja wyslana przy pomocy action creatora

window.dispatchFirstAction = () => store.dispatch({ type: FIRST_ACTION })
window.dispatchFirstAction = () => store.dispatch({ type: FIRST_ACTION })
window.dispatchFirstAction = () => store.dispatch({ type: FIRST_ACTION })
window.dispatchFirstAction = () => store.dispatch({ type: FIRST_ACTION })
window.dispatchFirstAction = () => store.dispatch({ type: FIRST_ACTION })

window.dispatchIncAction=()=>store.dispatch(incAction())
window.dispatchDecAction=()=>store.dispatch(decAction())