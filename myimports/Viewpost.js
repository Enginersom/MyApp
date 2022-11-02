import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { AsyncStorage } from 'react-native';

const Viewpost = ({ navigation, route }) => {
    const [XtempArr, setArrayItems] = React.useState([]);
    const tempArr = [];
    tempArr.push(["" , ""]);

    const getAllArticles = async () => {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    let item = [];
                    item[0] = store[i][0];
                    item[1] = store[i][1];
                    tempArr.push(item);
                });
            });
        });
    };
    getAllArticles();
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.fieldcaption}>All posts</Text>
                <FlatList
                    data={tempArr}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item[0]}</Text>
                            <Text>{item[1]}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        backgroundColor : 'black'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    fieldcaption: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Viewpost;


