import React from 'react';
import {SectionList, StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';
// Send Post Request
const getAdvice = () => {
  axios
    .get('https://api.adviceslip.com/advice')
    .then(response => {
      // handle success
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};
