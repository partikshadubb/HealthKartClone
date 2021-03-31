import {darkThemeColor} from '../../styles/colors';

import types from '../types';

const initialState ={
    // themeColor: {newThemeColor:"#00bfbf"}
    themeColor: "#00bfbf"
}

const themeReducer =(state=initialState , action)=>{
    switch(action.type){
        case types.SWITCH_THEME:{
            
           
            if (action.payload == "red") {
                return{...state, themeColor : "#00bfbf"}
            }else{
                return{...state, themeColor : "red"}
            }
        }

        default:
            return state;
    }
}
export default themeReducer;