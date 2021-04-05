import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from  "../Navigation/TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { Charts, MobileOTP, NotificationsScreen } from "../Screen";
import DrawerNavigation from "./DrawerNavigation";
const Stack=createStackNavigator();
export default function(){


  return(
    <>
    <Stack.Screen
      name={navigationStrings.DRAWER}
      options={{
        headerShown:false
      }}
      component={DrawerNavigation}
    />
    <Stack.Screen
      name={navigationStrings.CHARTS}
      options={{
        headerShown:false
      }}
      component={Charts}
    />
     <Stack.Screen
      name={navigationStrings.NOTIFICATIONS}
      options={{
        headerShown:false
      }}
      component={NotificationsScreen}
    />
      </>
  )
}