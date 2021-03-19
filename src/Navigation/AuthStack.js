import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Signup,
  LandingPage,
  MainPage,
  HomePage,
  DetailPage,
  Cart,
} from "../Screen";
import navigationStrings from "../constants/navigationStrings";
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.LANDING_PAGE}
        component={LandingPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.SIGNUP}
        component={Signup}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.HOMEPAGE}
        component={HomePage}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.DETAIL_PAGE}
        component={DetailPage}
      />
      
     
    </React.Fragment>
  );
}

export default AuthStack;
