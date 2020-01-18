import {combineReducers} from 'redux'
import CityReducer from "./CityReducer";

export const rootReducer = combineReducers({city: CityReducer})