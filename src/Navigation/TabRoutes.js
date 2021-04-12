import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile, LatestDeals, Search, Charts} from '../Screen/index';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import {color} from 'react-native-reanimated';
import imagePath from '../constants/imagePath';
import { connect } from 'react-redux';
import strings from '../constants/lang';

const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  const {themeColor}= props
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: themeColor ,
      }}>
      <Tab.Screen
        name={navigationStrings.HOMEPAGE}
        component={HomePage}
        options={{
          tabBarLabel:strings.SHOP,
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
        name={navigationStrings.LATEST_DEALS}
        component={LatestDeals}
        options={{
          tabBarLabel:strings.CONSULT,
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
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarLabel:strings.SEARCH,
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
        name={navigationStrings.CART}
        component={Cart}
        options={{
          tabBarLabel:strings.CART,
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
        name={navigationStrings.POFILE}
        component={Profile}
        options={{
          tabBarLabel:strings.PROFILE,
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
