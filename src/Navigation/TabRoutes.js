import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile, LatestDeals} from '../Screen/index';
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
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 22, width: 22, tintColor: focused ? themeColor: (colors.darkGrey) }}
                source={{
                  uri:
                    'https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png',
                }}
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
                source={{
                  uri: 'https://static.thenounproject.com/png/1367727-200.png',
                }}
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
