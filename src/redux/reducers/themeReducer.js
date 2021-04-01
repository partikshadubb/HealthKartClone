import {darkThemeColor} from '../../styles/colors';

import types from '../types';

const initialState ={
    themeColor: "#00bfbf"
}

const themeReducer =(state=initialState , action)=>{
    switch(action.type){
        case types.SWITCH_THEME:{
            
           const newTheme = action.payload
           console.log(newTheme,"reducer")
            return{
                ...state,themeColor:newTheme
            }
        }

        default:
            return state;
    }
}
export default themeReducer;

