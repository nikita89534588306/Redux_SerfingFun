import { INC, DEC } from "./types"
const initialState = {valueLikes:0}

export const likeReducer = (state=initialState, action) => {
    
    switch(action.type){
        case INC  :   return { ...state, valueLikes: state.valueLikes + 1 }
        case DEC  :   return { ...state, valueLikes: state.valueLikes - 1 }

        default: return state;
    }
}