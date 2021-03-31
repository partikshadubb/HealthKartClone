//import liraries
import React, { Component,Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigation/Routes';
import FlashMessage from 'react-native-flash-message'
import {Provider} from 'react-redux'
import store from './src/redux/store';
import {getUserData} from '././src/utils/utils'
import actions from './src/redux/actions';
import types from './src/redux/types';
import SplashScreen from 'react-native-splash-screen'
// create a component
class App extends Component {
  constructor(props){
    super(props);
    this.state={
     
    }
  }
  componentDidMount()
  {
    getUserData().then((res)=>
    {
      actions.saveUserData(res);
      setTimeout(()=>{
        SplashScreen.hide()
      },3000)
     console.log(res,"in app .....................")
    //  this.setState({userData:userInfo})
    })
   
    
  }

  render(){
    return(
      
      <Provider store={store}>
      <Routes />
      <FlashMessage position="top"/>
      </Provider>
    )
  }
}




//make this component available to the app


export default App;
