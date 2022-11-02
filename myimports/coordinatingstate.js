/* eslint-disable prettier/prettier */
import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, View,Text, YellowBox } from 'react-native';
const styles = StyleSheet.create({
  txt: {
  backgroundColor: 'white',
  textAlign:'center',
  color: 'green',
  textAlignVertical: 'top',
  textDecorationStyle : 'dashed',
  fontStyle : 'italic',
  fontWeight : '900',
  textShadowColor: 'blue',


  },
});
class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = (colorName) => {
    this.setState({color: colorName});
  };
  render() {
    return (
      <View>
        <Text>My {this.state.brand}</Text>
        <Text>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </Text>
        <Button style={styles.button} title="Change to yellow" onPress={() => this.changeColor("yellow")} />
<Text style={styles.txt}>Mudane Maalin Wanaagsan </Text>
        <Button title="Change to blue" onPress={() => this.changeColor("blue")}/>
      </View>
    );
  }
}
export default Car;
