import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
import { CardReducer } from "./CardReducer";
export const rootReducer = combineReducers({ ProductReducer, CardReducer });
