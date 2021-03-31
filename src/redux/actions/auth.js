import { reject } from 'lodash';
import {LOGIN, SIGNUP,OTP_RECIEVE, OTP_VARIFY} from '../../config/urls';
import { MobileOTP } from '../../Screen';
import {apiPost, setUserData} from "../../utils/utils";
import store from '../store';
import types from '../types';
const {dispatch}=store;


export function saveUserData(data){

  dispatch({
    type:types.LOGIN,
    payload:data
  })
  console.log(data,"gggggggggggg")
}



export function login(data = {}) {
  return new Promise((resolve,reject)=>{
    apiPost(LOGIN, data).then(res =>{
      setUserData(res.data).then(suc=>{
        // saveUserData(res.data);
       })
       console.log(JSON.stringify(res.data)+"asyncStorage")
       resolve(res)
    })
    .catch(error=>{
      reject(error);
    })
  })
  
}

export function signUp(data = {}){
  return new Promise((resovle,reject)=>
  {
    apiPost(SIGNUP, data).then(res=>{
      // setUserData(res.data);
      resovle(res)
    }).catch(error=>
    {
  reject(error)
    })
  })
}

export function mobileOtpVerification(data = {}){
  return new Promise((resovle,reject)=>
  {
    apiPost(OTP_RECIEVE, data).then(res=>{
      // setUserData(res.data);
      resovle(res)
    }).catch(error=>
    {
  reject(error)
    })
  })
}

export function otpVerification(data = {}){
  return new Promise((resovle,reject)=>
  {
    apiPost(OTP_VARIFY, data).then(res=>{
      setUserData(res.data).then((suc)=>{
        saveUserData(res.data)
      });
      resovle(res)
    }).catch(error=>
    {
  reject(error)
    })
  })
}

export function logout () {
  dispatch({
    type:types.LOGOUT,
    payload:null
  })
}