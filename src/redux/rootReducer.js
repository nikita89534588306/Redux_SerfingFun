import {combineReducers} from 'redux';
import { likeReducer } from './likesReducer';
const a = 1;
export const rootReducer = combineReducers({
    likes: likeReducer,
})