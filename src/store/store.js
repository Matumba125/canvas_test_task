import {combineReducers, createStore} from "redux";
import {itemsReducer} from "./itemsReducer";
import {loadState, saveState} from "./localStotage";


const rootReducer = combineReducers({
    items: itemsReducer,
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        items: store.getState().items
    })
})