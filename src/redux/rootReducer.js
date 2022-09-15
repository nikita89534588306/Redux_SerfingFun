import {combineReducers} from 'redux';
import { likeReducer } from './likesReducer';

export const rootReducer = combineReducers({
    likes: likeReducer,
})