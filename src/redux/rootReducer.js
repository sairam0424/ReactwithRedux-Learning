import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer"; // corrected import
import {userReducer} from "./user/userReducer"; // replace useReducer with the correct userReducer import

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer, // use the correct userReducer here
});

export default rootReducer;
