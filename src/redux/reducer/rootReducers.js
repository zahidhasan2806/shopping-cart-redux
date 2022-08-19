import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    shoppingCart: productReducer,
});

export default rootReducer;