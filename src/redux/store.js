import { createStore } from 'redux';


const initialState = {likes:12}
const reducer = (state=initialState, action) => {

    switch(action.type){
        case "INC"  :   return { ...state, likes: state.likes + 1 }
        case "DEC"  :   return { ...state, likes: state.likes - 1 }
        
        default: return state;
    }

}
const store = createStore(reducer/*mainReducer*/);
export default store;