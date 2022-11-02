import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Button,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    StatusBar,
    AsyncStorage,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
const NewPost = ({ navigation, route }) => {
    const [text, OnChangeText] = React.useState('');
    const SaveArticle = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            alert('Wasa Saved Successfully');
        } catch (e) {
            console.log(e);
        }
        navigation.navigate('ViewPosts', { name: 'V2' })
    };

    const submitPost = () => (
        SaveArticle(value, text)
    );
    let data2 = [{ value: "Weather", }, { value: "Agriculture", }, { value: "School", }];
    const [value, setValue] = React.useState(null);
    const [isFocus, SetIsFocus] = React.useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Please Enter the Details of your Post . then Click on Save
                </Text>
            </View>
            <Text style={styles.fieldcaption}> Category : </Text>
            <Dropdown
                label="my dropdown"
                labelField="value"
                valueField="value"
                palaceHolder="Category"
                value={value}
                data={data2}
                onFocus={() => SetIsFocus(true)}
                onBlur={() => SetIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    SetIsFocus(false);
                }}
                
            />
            <Text style={styles.fieldcaption}> Story : </Text>
            <TextInput
                style={styles.input}
                onChangeText={OnChangeText}
                value={text}
                palaceHolder="Your Story"
                keyboardType="Text"
            />
            <TouchableOpacity style={styles.button} title="" onPress={submitPost}>
                <Text>submit Post</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor:'#e4c4c4', marginHorizontal: 16 },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10 , color: "black" },
    title: { fontSize: 30, color: 'green' ,marginBottom: 20 },
    button: { alignItems: 'center', backgroundColor: 'blue', padding: 10 },
    fieldcaption: { marginTop: 20, color: 'green',fontSize: 20, fontSize: 20, fontWeight: 'bold' },
});
export default NewPost;
