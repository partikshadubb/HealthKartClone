//import liraries
import React, { Component,Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigation/Routes';
import FlashMessage from 'react-native-flash-message'
import {Provider} from 'react-redux'
import store from './src/redux/store';
import {getUserData} from '././src/utils/utils'

// create a component
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLogged:false
    }
  }
  componentDidMount()
  {
    getUserData().then((res)=>
    {
     if(res)
     {
       this.setState({isLogged:true})
     }
    })
  }

  render(){
    const {isLogged}=this.state
    return(
      
      <Provider store={store}>
      <Routes isLogged={isLogged}/>
      <FlashMessage position="top"/>
      </Provider>
    )
  }
}




//make this component available to the app


export default App;
