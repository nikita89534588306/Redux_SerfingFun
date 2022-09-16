import { INPUT_TXT} from "./types"
const initialState = {text:""}

export const inputReducer = (state=initialState, action) => {
    console.log("input text Reducer > ", action)
    switch(action.type){
        case INPUT_TXT  :   return { ...state, text:action.text }

        default: return state;
    }
}