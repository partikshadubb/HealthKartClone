import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from  "../Navigation/TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { AllUsers, Charts, Chats, Generator, ImageScreen, MobileOTP, NotificationsScreen } from "../Screen";
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
<Stack.Screen
      name={navigationStrings.IMAGE_SCREEN}
      options={{
        headerShown:false
      }}
      component={ImageScreen}
    />
<Stack.Screen
      name={navigationStrings.GENERATOR}
      options={{
        headerShown:false
      }}
      component={Generator}
    />
    <Stack.Screen
      name={navigationStrings.CHATS}
      options={{
        headerShown:false
      }}
      component={Chats}
    />
    <Stack.Screen
      name={navigationStrings.ALL_USERS}
      options={{
        headerShown:false
      }}
      component={AllUsers}
    />
      </>
  )
}