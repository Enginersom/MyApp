import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, StyleSheet, SafeAreaView, Text, View} from 'react-native';
const Navigationone = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screenone">
        <Stack.Screen
          name="Screenone"
          component={Screenone}
          options={{title: 'Screen 1'}}
        />

        <Stack.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={{
            title: 'Screen 2',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTinColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            statusBarColor: 'red',
          }}
          initialParams={{colors: 'blue'}}
        />

        <Stack.Screen
          name="ScreenThree"
          component={ScreenThree}
          options={{title: 'Screen 3'}}
          initialParams={{colors: 'green', textColor: '#FFF'}}
        />

        <Stack.Screen
          name="Screenfour"
          component={Screenfour}
          options={{title: 'Screen 4'}}
          initialParams={{colors: 'blue', textColor: '#FFF'}}
        />

        <Stack.Screen
          name="Screenfive"
          component={Screenfour}
          options={{title: 'Screen 5'}}
          initialParams={{colors: 'black', textColor: '#fff'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Screenone = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="Go to Screen 2"
          color="blue"
          onPress={() => navigation.navigate('Screenfour', {color: 'blue'})}
        />

        <Button
          title="Go to Screen 3"
          color="green"
          onPress={() =>
            navigation.navigate('ScreenThree', {color: 'green', size: '20'})
          }
        />

        <Button
          title="Go to Screen 4"
          color="green"
          onPress={() =>
            navigation.navigate('Screenfour', {color: 'green', size: '20'})
          }
        />

        <Button
          title="Go to Screen 5"
          color="black"
          onPress={() =>
            navigation.navigate('Screenfive', {color: 'black', size: '20'})
          }
        />
      </View>
    </SafeAreaView>
  );
};
const ScreenTwo = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text2}>
          this is screen is color {route.params.colors}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const ScreenThree = ({route, navigation}) => {
  //---------------------
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: route.params.colors},
      headerTintColor: route.params.textColor,
    });
  }, [navigation, route]);
  return (
    <SafeAreaView>
      <View sstyle={styles.container}>
        <Text style={styles.text3}>
          this is screen is color {route.params.colors}
        </Text>
      </View>
    </SafeAreaView>
  );
};

//--------------------

const Screenfour = ({route, navigation}) => {
  //---------------------
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: route.params.colors},
      headerTintColor: route.params.textColor,
    });
  }, [navigation, route]);
  //---------------------
  return (
    <SafeAreaView>
      <View sstyle={styles.container}>
        <Text style={styles.text3}>
          this is screen is color {route.params.colors}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const Screenfive = ({route, navigation}) => {
  //---------------------
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: route.params.colors},
      headerTintColor: route.params.textColor,
    });
  }, [navigation, route]);
  //---------------------
  return (
    <SafeAreaView>
      <View sstyle={styles.container}>
        <Text style={styles.text3}>
          this is screen is color {route.params.colors}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    color: '#000',
  },
  text2: {
    fontSize: 20,
    color: '#000',
  },
  text3: {
    fontSize: 20,
    color: '#000',
  },
  text4: {
    fontSize: 20,
    color: 'yellow',
  },
  text5: {
    fontSize: 20,
    color: 'yellow',
  },
});

export default Navigationone;
