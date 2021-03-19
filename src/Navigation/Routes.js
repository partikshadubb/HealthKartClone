import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import MainStack from '../Navigation/MainStack';
import AuthStack from '../Navigation/AuthStack';

const Stack=createStackNavigator();


export default function(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
            {AuthStack()}
            {MainStack()}
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}
