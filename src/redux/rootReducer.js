
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
// import iceCreamReducer from "./iceCream/iceCreamReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer
