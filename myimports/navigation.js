/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Contact from './Contact';
import Home from './home';

export default function AppNavigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}