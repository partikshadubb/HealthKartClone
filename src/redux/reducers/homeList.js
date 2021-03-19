import types from "../types";

const initialState={
    cartList: [],
}


export default function (state=initialState,action) {
    

    switch (action.type) {
      
        case types.ADD_LIST:
            console.log(action.payload.item,"in actinreducer")
       return{
           ...state,
           cartList : [...state.cartList,action.payload.item]
       }

        default:{
            return {...state}
        }

       }
        
}