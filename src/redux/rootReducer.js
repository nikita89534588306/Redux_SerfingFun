import {combineReducers} from 'redux';
import { likeReducer } from './likesReducer';
import { inputReducer } from "./inputReducer"

export const rootReducer = combineReducers({
    likes: likeReducer,
    inputReducer: inputReducer,
})