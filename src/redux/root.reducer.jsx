

import { combineReducers } from "redux";
import listReducer from "./list/list.reducer"

 const rootReducer = combineReducers({
    list :listReducer
})

export default rootReducer

