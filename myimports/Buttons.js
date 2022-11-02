/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, SafeAreaView, Text, StyleSheet, Alert } from 'react-native';
const Buttons = () => {
    return (
        <SafeAreaView>
            <Button title="Hello" onPress={()=>Alert.alert('Hello There Mr.Arabow')}
            color="blue" />
    </SafeAreaView>
    );
};
    export default Buttons;
