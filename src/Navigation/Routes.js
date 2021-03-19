import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import MainStack from '../Navigation/MainStack';
import AuthStack from '../Navigation/AuthStack';
import {connect,useSelector} from 'react-redux'
const Stack=createStackNavigator();


 function Routes(){
    const userData = useSelector(state => state.auth.userData);
    console.log(userData,"in Routes")
    return(
        <NavigationContainer>
            <Stack.Navigator>
            {!userData && AuthStack()}
        {MainStack()}
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps=state=>{

    return(
      {
        userData:state
      }
    )
  }
  
  export default connect(mapStateToProps)(Routes)