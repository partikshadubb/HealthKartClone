import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile, LatestDeals, Search} from '../Screen/index';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import {color} from 'react-native-reanimated';
import imagePath from '../constants/imagePath';
import { connect } from 'react-redux';

const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  const {themeColor}= props
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: themeColor ,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 25, width: 25, tintColor: focused ? themeColor: (colors.darkGrey) }}
                source={imagePath.shoppingBag}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Latest Deals"
        component={LatestDeals}
        options={{
          tabBarLabel: 'Consult',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 21, width: 21,tintColor: focused ? themeColor : (colors.darkGrey) }}
                source={imagePath.consultImage}
              />
            );
          },
        }}
      />

<Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 22, width: 22,tintColor: focused ? themeColor: (colors.darkGrey) }}
                source={imagePath.search}
              />
            );
          },
        }}
      />


      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 23, width: 23, tintColor: focused ? themeColor: (colors.darkGrey) }}
                source={imagePath.cart}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 22, width: 22,tintColor: focused ? themeColor: (colors.darkGrey) }}
                source={imagePath.profile}
              />
            );
          },
        }}
      />

    </Tab.Navigator>
  );
}

const mapStateToProps = state =>{
  return(
    {
    themeColor:state.themeReducer.themeColor

    }
  )
}

export default connect(mapStateToProps)(TabRoutes);
