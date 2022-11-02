/* eslint-disable prettier/prettier */
/* Buttons*/
import React from 'react';
import { Button, StyleSheet, Alert, View,TouchableOpacity, Text } from 'react-native';

const TouchableOpacity1 = () => {
     showAlert = (msg) => {
        Alert.alert(msg);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.view} onPress={() => showAlert('Opacity A')} color="#2196F3">
            <Text style={styles.text}>
                Opacity A
            </Text>
            </TouchableOpacity>
                <TouchableOpacity style={styles.view} onPress={() => showAlert('Opacity B')} color="#2196F3">
                <Text style={styles.text}>
                    Opacity B
                </Text>
            </TouchableOpacity>
        </View >
    )
};
const styles = StyleSheet.create({
    view: {
        margin: 5,
        width: 100,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        Color: "#FFFF00",
        fontSize: 20,
        fontweight: "bold",
        textAlign: "center"
    }
})
export default TouchableOpacity1;
