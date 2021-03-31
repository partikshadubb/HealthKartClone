import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from  "../Navigation/TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { MobileOTP } from "../Screen";
const Stack=createStackNavigator();
export default function(){


  return(
    <>
    <Stack.Screen
      name={navigationStrings.TAB_ROUTES}
      options={{
        headerShown:false
      }}
      component={TabRoutes}
    />
    
      </>
  )
}