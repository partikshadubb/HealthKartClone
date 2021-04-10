import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from  "../Navigation/TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import {  Chats, ImageScreen,DetailPage } from "../Screen";
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
      name={navigationStrings.IMAGE_SCREEN}
      options={{
        headerShown:false
      }}
      component={ImageScreen}
    />

    <Stack.Screen
      name={navigationStrings.CHATS}
      options={{
        headerShown:false
      }}
      component={Chats}
    />
    <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.DETAIL_PAGE}
        component={DetailPage}
      />
      </>
  )
}