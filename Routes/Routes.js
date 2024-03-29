import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login } from '../Screen/Login';
import { Home } from '../Screen/Home';
const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
 <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
        </NavigationContainer>
    )
}