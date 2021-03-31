// import {apiDelete, apiGet, apiPost, apiPut} from '../../utils/utils';
// import {LOGIN} from '../../config/urls';

// export function getUserProfile(query) {
//   return apiGet(LOGIN + query);
// }

import { reject } from 'lodash';
import {INFINITE_LIST, LOGIN, SIGNUP} from '../../config/urls';
import {apiPost, setUserData} from "../../utils/utils";
import store from '../store';
import types from '../types';
const {dispatch}=store;


export function addList(item)  {
  // console.log(item,"in actions")
  dispatch({
    type: types.ADD_LIST,
      payload: item
  
  })
      

}

export function  increment(id){
  // console.log(id,"increment")
  dispatch({
    type:types.INCREMENT,
    payload:id
  })
  
}


export function  decrement(id){
  // console.log(id,"increment")
  dispatch({
    type:types.DECREMENT,
    payload:id
  })
  
}

export function  deleteList(id){
  console.log(id,"delte")
  dispatch({
    type:types.DELETE_LIST,
    payload:id
  })
  
}

export function infiniteScroll(data ={}){
  return new Promise((resovle,reject)=>
  {
    apiPost(INFINITE_LIST, data).then(res=>{
      resovle(res)
      console.log(res.data,"inAction Infinite")
      
     dispatch({
       type:types.INFINITE_LIST,
       payload:res.data
     })
     
     
    }).catch(error=>
    {
  reject(error)
    })
  })
}

  