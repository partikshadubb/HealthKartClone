// import {apiDelete, apiGet, apiPost, apiPut} from '../../utils/utils';
// import {LOGIN} from '../../config/urls';

// export function getUserProfile(query) {
//   return apiGet(LOGIN + query);
// }

import { reject } from 'lodash';
import {INFINITE_LIST, LOGIN, SEARCH, SIGNUP} from '../../config/urls';
import {apiGet, apiPost, setUserData} from "../../utils/utils";
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



export function search(search){
  let searchUrl = SEARCH + `?name=${search}`
 return apiGet(searchUrl)
}
  
export function userLocation(latitude,longitude){
  let locationUrl = SEARCH + `?coordinates=["${longitude}","${latitude}"]`
 return apiGet(locationUrl)
}
  