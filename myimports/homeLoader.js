import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
 
import { store } from "./Store2";
import Home from "./Home2";
 import { Provider } from "react-redux";

 
export default function HomeLoader() { 
 return (
    <Provider store={store}>
        <Home/>
        </Provider>
 );
}
