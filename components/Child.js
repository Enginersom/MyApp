
import React from 'react';
import Greeting from "./Parents"
export default const Greeting= () => {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name="Abdisatar" />
        <Greeting name="Jinow" />
        <Greeting name="Diiriye" />
      </View>
    );
  }