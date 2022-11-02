/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text>Our Frist Program Layout in React</Text>
            </View>
            <View style={styles.subContainer}>
                <Text>Maalin Wanagsan Akhyaarta</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0000',
        margin: 6,
        borderWidth: 12,
        borderColor: 'black',
        justifyContent: 'flex-start',
        flexDirection:'column',
    
    },
    subContainer: {
        flex: 1,
        borderRadius:100/2,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 10,
        margin: 5,
        borderColor: '#800000',
    },
});
