/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Alert} from 'react-native';
const Contact = ({navigation}) => {
  const [formName, setformName] = useState('Enter Name');
  const [formEmail, setformEmail] = useState('Enter Email');
  const [formPhoneNumber, setformPhoneNumber] = useState('Enter Phone Number');
  const [formMessage, setformMessage] = useState(
    'Let us know what on your Mind'
);

  const submit = () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert('Please Enter Infomation in All required Fields');
    } else {
      Alert.alert(`Thank You ${formName}`);
    //   navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>
    Name: *required</Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={name => setformName(name)}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>
      Email : *required
      </Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={email => setformEmail(email)}
        value={formEmail}
        selectTextOnFocus={true}
        />
        <TextInput
        style={styles.txtInput}
        onChangeText={phone => setformPhoneNumber(phone)}
        value={formPhoneNumber}
        selectTextOnFocus={true}
        />
        <Text style={styles.labels}>
      Message : *required
      </Text>
      <TextInput
        style={styles.multtxtinput}
        onChangeText={message => setformMessage(message)}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
        />
        <Button 
        title='Contact Us'
        color='#0000ff'
        onPress={submit}
        />
        
    </View>
  );
};
const styles=StyleSheet.create({
    form:{
alignItems:'center',
flexDirection:'column',
padding:18,
    },
    txtInput: {
        borderWidth:1,
        fontFamily:'Ubuntu-Regular',
        width:'80%',
        paddingBottom:15,
    },
    multtxtinput:{
        borderWidth:1,
        fontFamily:'Ubuntu-regular',
        width:'90%',
        height:120,
        marginBottom:50
    },
    labels : {
        fontFamily:'Ubuntu-regular'
    },
});
export default Contact;


