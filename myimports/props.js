import React from 'react';
import {Text, View} from 'react-native';
const Greeting = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};
const lotOfgreeting = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
      <Greeting name="Abdisatar" />
      <Greeting name="Jinow" />
      <Greeting name="Diiriye" />
    </View>
  );
}
export default lotOfgreeting;
