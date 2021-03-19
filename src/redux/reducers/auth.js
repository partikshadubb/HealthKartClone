import types from "../types";

const initialState={
    userData:{
        name:"Pawan Kumar"
    }
}


export default function (state=initialState,action) {
    

    switch (action.type){

        case types.LOGIN:{
            const userData={...action.payload}


            return {...state,userData}
        }
    

        default:{
            return {...state}
        }

       }
        
}