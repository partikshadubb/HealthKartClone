import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';
import  { AllUsers, Charts, Chats, Generator, NotificationsScreen}  from '../Screen';
import DrawerContent from '../Component/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
   
      <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>} >
        <Drawer.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
        <Drawer.Screen name={navigationStrings.CHARTS} component={Charts} />
        <Drawer.Screen name={navigationStrings.NOTIFICATIONS} component={NotificationsScreen} />
        <Drawer.Screen name={navigationStrings.GENERATOR} component={Generator} />
        <Drawer.Screen name={navigationStrings.ALL_USERS} component={AllUsers} />

      </Drawer.Navigator>
   
  );
}