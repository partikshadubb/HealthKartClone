import types from '../types';
import store from '../store';

const{dispatch}=store;
export function switchTheme(newColor)  {
    console.log(newColor,"action")
    dispatch({
      type: types.SWITCH_THEME,
        payload: newColor
    
    })
  }
  
