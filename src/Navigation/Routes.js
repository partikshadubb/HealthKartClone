import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import AuthStack from '../Navigation/AuthStack';
import {connect} from 'react-redux'
import MainStack from './MainStack';
// import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const Stack=createStackNavigator();


 function Routes(props){
 const {userData}=props
 console.log(props.userData.accessToken,"in routes")

    return(
        <NavigationContainer>
            <Stack.Navigator>
        {!!userData.accessToken?MainStack():AuthStack()}
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps=state=>{

    return(
      {
        userData:state.auth.userData
      }
    )
  }
  
  export default connect(mapStateToProps)(Routes)