/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: '#7B7979',
    marginTop: 20,
    marginBottom: 20,
    color : 'blue',
    height: 10,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderBottomColor: 'red',
    borderBottomWidth: 30,
  },
});
  class App4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  // this.checkAge is passed as the callback to setState
  updateAge = value => {
    this.setState({ age: value }, this.checkAge);
  };

  checkAge = () => {
    const { age } = this.state;
    if (age !== 0 && age >= 21) {
      alert('You Are MARIED');
      // Make API call to /beer
    } else {
      alert('Fadhiga ka kac!!!');

      // Throw error 404, beer not found
    }
  };

  render() {
    const { age } = this.state;
    return (
      <View>
        <Text>Drinking Age Checker {age}</Text>
        <TextInput style={styles.inputs} onChangeText={(text) => this.updateAge(text)} value={age}
         placeholder="Enter user age" />
        <Button 
          title="Check Age Limit"
          onPress={e => this.checkAge()}
        />
      </View>
    );
  }
}

export default App4;
