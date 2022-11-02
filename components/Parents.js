import React from 'react';
import {Text, View} from 'react-native';
import Greeting from "./Parents"
export default Greeting = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};
