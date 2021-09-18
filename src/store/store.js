import {combineReducers, createStore} from "redux";
import {itemsReducer} from "./itemsReducer";


const rootReducer = combineReducers({
    items: itemsReducer,
})

export const store = createStore(rootReducer)

store.subscribe(()=>{

})