import types from "../types";

const initialState={
    cartList: [],
    price:0,
    user:[],

}


export default function (state=initialState,action) {
    let total = 0
    let money = 0;
    
    switch (action.type) {
      
        case types.ADD_LIST:
            console.log(action.payload,"in reducer")
            let newList = [...state.cartList, action.payload]
            for (let i = 0; i < newList.length; i++) {
                console.log(total,newList[i].reducedPrice ,"totalprice")
                total = total + newList[i].reducedPrice           
            }
       return{
           ...state,
           cartList : newList,
           price: total
       }



       case types.DELETE_LIST:
        let newObject =[...state.cartList];
        console.log(action.payload,"homeList")
        let items = newObject.filter(item=>item.id !== action.payload);  
              return{
            ...state,
            cartList : items,
           
        }



       case types.INCREMENT:
        let newArray = [...state.cartList];
     

    
      const index = newArray.findIndex((item) => item.id == action.payload);
      let obj = newArray[index];
      
      obj.quantity = obj.quantity+1


      for(let i = 0; i < newArray.length; i++){
          money += newArray[i].reducedPrice * newArray[i].quantity
      }
      console.log(money,"this is new money")
    

      console.log(newArray,"priceceeeee")

     

      return {
        ...state,
        cartList: newArray,
          price:money
      };
    
      case types.DECREMENT:
        let newDecrementArray = [...state.cartList];
     

    
      const decrementIndex = newDecrementArray.findIndex((item) => item.id == action.payload);
      let obj1 = newDecrementArray[decrementIndex];
      
      obj1.quantity =  obj1.quantity-1


      for(let i = 0; i < newDecrementArray.length; i++){
          money += newDecrementArray[i].reducedPrice * newDecrementArray[i].quantity
      }
      console.log(money,"this is new money")
    

      console.log(newDecrementArray,"priceceeeee")

     

      return {
        ...state,
        cartList: newDecrementArray,
          price:money
      };
    

    
    
    case types.INFINITE_LIST:{
    console.log(action.payload,"infinite")
    
                return {
                    ...state,
                user:[...state.user,...action.payload]
                }
            }
        default:{
            return {...state}
        }

    } 
        
    }



