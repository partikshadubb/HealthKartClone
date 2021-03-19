import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart, HomePage, Profile, LatestDeals } from "../Screen/index";
import navigationStrings from "../constants/navigationStrings";

const Tab = createBottomTabNavigator();

function TabRoutes({ Navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e0436c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
       
        }}
      />
      <Tab.Screen
        name="Latest Deals"
        component={LatestDeals}
        options={{
          tabBarLabel: "Categories",
        
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
      
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
      
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
