import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
 
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, amend} from './countAction2';
// import { store } from "./Store2";
//  import { Provider } from "react-redux";
 
export default function Home() { 
  const dispatch = useDispatch();
 
  const count = useSelector((store) => store.data.count);
  const aText = useSelector((store) => store.data.text);
  const [text, onChangeText] = React.useState("" + aText);
  
 
  const handleIncrement = () => { 
    dispatch(increment());
  };
 
  const handleDecrement = () => {
    dispatch(decrement());
  };
 
  const handleAmend = () => {
    dispatch(amend(text));
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Counter App</Text>
      <Text style={styles.counter_text}>{count}</Text>
 
      <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
        <Text style={styles.btn_text}> Increment </Text>
      </TouchableOpacity>
 
      <TouchableOpacity
        onPress={handleDecrement}
        style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
        <Text style={styles.btn_text}> Decrement </Text>
      </TouchableOpacity>

      <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Some text" keyboardType="text" />
      <TouchableOpacity
        onPress={handleAmend}
        style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
        <Text style={styles.btn_text}> Amend </Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
    color: '#aaf'
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#cdf',
  },
  input: { height: 40, margin: 12, borderWidth: 1, padding: 10, 
    color: '#abf'},

});