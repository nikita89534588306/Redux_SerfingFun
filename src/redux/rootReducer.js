import {combineReducers} from 'redux';
import { likeReducer } from './likesReducer';
import { inputReducer } from "./inputReducer"
import { commentsReducer } from "./commentsReducer"

export const rootReducer = combineReducers({
    likes: likeReducer,
    inputReducer: inputReducer,
    commentsReducer : commentsReducer,
})