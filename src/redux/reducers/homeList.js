import types from "../types";

const initialState={
    cartList: [],
}


export default function (state=initialState,action) {
    

    switch (action.type) {
      
        case types.ADD_LIST:
       return{
           ...state,
           cartList : [...state.cartList,action.payload.object]
       }

        default:{
            return {...state}
        }

       }
        
}