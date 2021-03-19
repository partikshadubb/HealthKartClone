//import liraries
import React, { Component,Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigation/Routes';
import FlashMessage from 'react-native-flash-message'
import {Provider} from 'react-redux'
import store from './src/redux/store';
// create a component
class App extends Component {
 
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
