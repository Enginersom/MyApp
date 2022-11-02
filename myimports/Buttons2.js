/* eslint-disable prettier/prettier */
/* Buttons*/
import React from 'react';
import { Button, StyleSheet, Alert, View } from 'react-native';

const Buttons2 = () => {
    const showAlert = (msg) => {
        Alert.alert(msg);
    };
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Button onPress={() => showAlert('Button1')} title="button1" color="#2196F3" />
            </View>

            <View style={styles.view}>
                <Button onPress={() => showAlert('Button2')} title="button2" color="#2196F3" />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    view: {
        margin: 55,
        width: 100,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default Buttons2;
