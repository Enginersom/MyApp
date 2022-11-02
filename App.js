/* eslint-disable prettier/prettier */
/******** import React from 'react'; ***********////
// import React from 'react';
// import Navigationone from './myimports/Navigationone';
// const App = () => {
//     return (
//     <Navigationone/>
//      );
//     }
// export default App;




/////////////////////////////////////////////////////////
// import React from 'react';
// import TodoList from './myimports/TodoList';
// const App = () => {
// return (
//  <TodoList/>
//  );
//  }
// export default App;
/////////////////////////////////////////////////////////








///////////import React from 'react';
// ////////////////////////////import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Button, StyleSheet, SafeAreaView, Text, View } from 'react-native';
// const App = () => {
//     const Stack = createStackNavigator();
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Screenone">
//                 <Stack.Screen name="Screenone" component={Screenone}
//                     options={{ title: 'Screen 1' }} />

//                 <Stack.Screen name="ScreenTwo" component={ScreenTwo}
//                     options={{
//                         title: 'Screen 2', headerStyle: {
//                             backgroundColor: 'blue'
//                         }, headerTinColor: '#fff', headerTitleStyle: {
//                             fontWeight: 'bold'
//                         }, statusBarColor: 'red'
//                     }} initialParams={{ colors: 'blue' }} />


//                 <Stack.Screen name="ScreenThree" component={ScreenThree}
//                     options={{ title: 'Screen 3' }} initialParams={{ colors: 'green', textColor: '#FFF' }} />


//                 <Stack.Screen name="Screenfour" component={Screenfour}
//                     options={{ title: 'Screen 4' }} initialParams={{ colors: 'blue', textColor: '#FFF' }} />


//                 <Stack.Screen name="Screenfive" component={Screenfour}
//                     options={{ title: 'Screen 5' }} initialParams={{ colors: 'black', textColor: '#fff' }} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// const Screenone = ({ route, navigation }) => {
//     return (
//         <SafeAreaView>
//             <View style={styles.container}>
//                 <Button
//                     title="Go to Screen 2"
//                     color="blue"
//                     onPress={() => navigation.navigate("Screenfour", { color: 'blue' })} />

//                 <Button
//                     title="Go to Screen 3"
//                     color="green"
//                     onPress={() => navigation.navigate('ScreenThree', { color: 'green', size: '20' })} />



//                 <Button
//                     title="Go to Screen 4"
//                     color="green"
//                     onPress={() => navigation.navigate('Screenfour', { color: 'green', size: '20' })} />

// <Button
//                     title="Go to Screen 5"
//                     color="black"
//                     onPress={() => navigation.navigate('Screenfive', { color: 'black', size: '20' })} />
//             </View>
//         </SafeAreaView>

//     );
// };
// const ScreenTwo = ({ route, navigation }) => {
//     return (
//         <SafeAreaView>
//             <View style={styles.container}>
//                 <Text style={styles.text2}>
//                     this is screen is color {route.params.colors}
//                 </Text>
//             </View>
//         </SafeAreaView>
//     );
// };
// const ScreenThree = ({ route, navigation }) => {
//     //---------------------
//     React.useLayoutEffect(() => {
//         navigation.setOptions({
//             headerStyle: { backgroundColor: route.params.colors },
//             headerTintColor: route.params.textColor
//         });
//     },
//         [navigation, route]);
//     return (
//         <SafeAreaView>
//             <View sstyle={styles.container}>
//                 <Text style={styles.text3}>
//                     this is screen is color {route.params.colors}
//                 </Text>

//             </View>
//         </SafeAreaView>

//     );
// }

// //--------------------

// const Screenfour = ({ route, navigation }) => {
//     //---------------------
//     React.useLayoutEffect(() => {
//         navigation.setOptions({
//             headerStyle: { backgroundColor: route.params.colors },
//             headerTintColor: route.params.textColor
//         });
//     },
//         [navigation, route]);
//     //---------------------
//     return (
//         <SafeAreaView>
//             <View sstyle={styles.container}>
//                 <Text style={styles.text3}>
//                     this is screen is color {route.params.colors}
//                 </Text>

//             </View>
//         </SafeAreaView>

//     );
// };

// const Screenfive = ({ route, navigation }) => {
//     //---------------------
//     React.useLayoutEffect(() => {
//         navigation.setOptions({
//             headerStyle: { backgroundColor: route.params.colors },
//             headerTintColor: route.params.textColor
//         });
//     },
//         [navigation, route]);
//     //---------------------
//     return (
//         <SafeAreaView>
//             <View sstyle={styles.container}>
//                 <Text style={styles.text3}>
//                     this is screen is color {route.params.colors}
//                 </Text>

//             </View>
//         </SafeAreaView>

//     );
// };

// const styles = StyleSheet.create({
//     text1: {
//         fontSize: 20,
//         color: "#000"
//     },
//     text2: {
//         fontSize: 20,
//         color: "#000"
//     },
//     text3: {
//         fontSize: 20,
//         color: "#000"
//     },
//     text4: {
//         fontSize: 20,
//         color: "yellow"
//     },
//     text5: {
//         fontSize: 20,
//         color: "yellow"
//     },
// });

// export default App;
/////////////////////////////////////////////////////////////////////////////////

// import { View, Text, Button, StyleSheet } from 'react-native';
//import Buttons2 from './myimports/Buttons2';
// import TouchableOpacity1 from './myimports/TouchableOpacity';
// // In App.js in a new project
// import 'react-native-gesture-handler';
// import React, {useState} from 'react';
// import App5 from './myimports/Reducersprogram';

// const App = () => {
//   return (
//     <App5 />
//   )
// }

// export default App;


// /////import Contact from './myimports/Contact';
// import { Button, StyleSheet, Alert, View,TouchableOpacity, Text } from 'react-native';
// import AppNavigation from './myimports/navigation';

// const App = () => {
//   return (
//     //<Contact/>
//     <AppNavigation />
//   );
// //   )
// }
//  export default App;


// import React from "react";
// import { Text , View} from 'react-native';
// import Layout2 from './myimports/Layout2';

// const HelloWorldApp =()=> {
//  return (
// <View
// style={ {
//  flex:1,
// justifyContent:"center",
//  alignItems:"center"
//   }
// }>
//   <Text> HEllo Abdisatar //////////////</Text>
//  </View>
// );
//  }

//  export default Layout2;









//import App4 from './myimports/callbackprogram';
//import Car from './myimports/coordinatingstate';

// const App = () => {
//   return (
//     <Car />
//   )
// }

// export default App;






// const App = () => {
//   return (
//     <App4 />
//   )
// }

// export default App;




//import App from './myimports/coutprogram';
//import App from './myimports/personprogram';
//import App from './myimports/colorexample';
//import coutprogram from './myimports/coutprogram';

// import { SafeAreaView,scrollview} from 'react-native';


//import lotOfgreeting from './myimports/lotOfgreeting';
//import Child from './components/child';
//export default Child;
//////////////////////////////////////////MMMMMMMMMMM
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createStackNavigator } from '@react-navigation/native-stack';
import FlatListBasics from './myimports/AppFlatlist';
import SectionListBasics from './myimports/SectionList';
import SectionListOther from './myimports/SectionlistSeprate';
import Viewpost from './myimports/Viewpost';
//import countAction2 from './myimports/countAction2';
//import countReducer2 from './myimports/countReducer2';
import HomeLoader from './myimports/homeLoader';

//import coordinatingstate from './myimports/coordinatingstate';
import NewPost from './myimports/Createpost';
import {Provider } from 'react-redux';
const Stack = createNativeStackNavigator();

function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="SectionListBasics">
            <Stack.Screen name="SectionListBasics" component={SectionListBasics} />
            <Stack.Screen name="FlatListBasics" component={FlatListBasics} />
            <Stack.Screen name="SectionListOther" component={SectionListOther} />
            <Stack.Screen name="NewPost" component={NewPost} />
            <Stack.Screen name="Viewpost" component={Viewpost} />
           <Stack.Screen name="Home" component={HomeLoader} />
         
         </Stack.Navigator>
      </NavigationContainer>
   );
}
const stack = createNativeStackNavigator();
export default App;


//import React, { Component } from 'react';

// class App3 extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//          data: 'www.somalitradeshow.com'
//       }
//     this.handleEvent = this.handleEvent.bind(this);
//   }
//   handleEvent(){
//     console.log(this.props);
//   }
//   render() {
//     return (
//       <div className="App">
//     <h2>React Constructor Example</h2>
//     <input type ="text" value={this.state.data} />
//         <button onClick={this.handleEvent}>Please Click</button>
//       </div>
//     );
//   }
// }
// export default App;



// import {Text , View } from 'react-native';

// const HelloWorldApp = () => {
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 justifyConstent: "Center",
//                 alignItems: "Center"
//             } >
//                 <Text> Hello , world!</Text>
// </View>
// )
// }
//export default FlatListBasics;
//export default SectionListBasics;
//export default SectionListOther;
// import React from 'react';
// import {Text, View} from 'react-native';
// const Greeting = (props) => {
//   return (
//     <View style={{alignItems: 'center'}}>
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// };
// export default Lgreeting= () => {
//   return (
//     <View style={{alignItems: 'center', top: 50}}>
//       <Greeting name="Abdisatar" />
//       <Greeting name="Jinow" />
//       <Greeting name="Diiriye" />
//     </View>
//   );
// }




///////////////////////////////////////////////////////////////////////////
// import React from "react";
//  import Lists2 from './myimports/List2';

// const App = () => {
//   return (
//    <Lists2/>
//   )
//  }

// export default App;
////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ActivityIndicator,
//   FlatList,
// } from "react-native";

// // get data from this URL!
// const movieURL = "https://reactnative.dev/movies.json";

// const App = () => {
//   // managing state with 'useState'
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [title, setTitle] = useState([]);
//   const [description, setDescription] = useState([]);

//   // similar to 'componentDidMount', gets called once
//   useEffect(() => {
//     fetch(movieURL)
//       .then((response) => response.json()) // get response, convert to json
//       .then((json) => {
//         setData(json.movies);
//         setTitle(json.title);
//         setDescription(json.description);
//       })
//       .catch((error) => alert(error)) // display errors
//       .finally(() => setLoading(false)); // change loading state
//   }, []);

//   // Also get call asynchronous function
//   async function getMoviesAsync() {
//     try {
//       let response = await fetch(movieURL);
//       let json = await response.json();
//       setData(json.movies);
//       setTitle(json.title);
//       setDescription(json.description);
//       setLoading(false);
//     } catch (error) {
//       alert(error);
//     }
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* While fetching show the indicator, else show response*/}
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <View>
//           {/* Title from URL */}
//           <Text style={styles.title}>{title}</Text>
//           {/* Display each movie */}
//           <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
//           <FlatList
//             data={data}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <View style={{ paddingBottom: 10 }}>
//                 <Text style={styles.movieText}>
//                   {item.id}. {item.title}, {item.releaseYear}
//                 </Text>
//               </View>
//             )}
//           />
//           {/* Show the description */}
//           <Text style={styles.description}>{description}</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 48,
//   },
//   movieText: {
//     fontSize: 26,
//     fontWeight: "200",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//   },
//   description: {
//     textAlign: "center",
//     marginBottom: 18,
//     fontWeight: "200",
//     color: "green",
//   },
// });

// export default App;


// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { createDrawerNavigator }
// 		from '@react-navigation/drawer';
// import { NavigationContainer }
// 		from '@react-navigation/native';

// function HomeScreen() {
// return (
// 	<View style={{ flex: 1, alignItems: 'center',
// 				justifyContent: 'center' }}>
// 		<Text>Home page</Text>
// 	</View>
// );
// }

// function NotificationsScreen() {
// return (
// 	<View style={{ flex: 1, alignItems: 'center',
// 				justifyContent: 'center' }}>
// 	<Text>Notifications Page</Text>
// 	</View>
// );
// }

// function AboutScreen() {
// return (
// 	<View style={{ flex: 1, alignItems: 'center',
// 				justifyContent: 'center' }}>
// 	<Text>About Page</Text>
// 	</View>
// );
// }
// const Drawer = createDrawerNavigator();

// export default function App() {
// return (
// 	<NavigationContainer>
// 	<Drawer.Navigator initialRouteName="Home">
// 		<Drawer.Screen name="Home" component={HomeScreen} />
// 		<Drawer.Screen name="Notifications"
// 					component={NotificationsScreen} />
// 		<Drawer.Screen name="About" component={AboutScreen} />
// 	</Drawer.Navigator>
// 	</NavigationContainer>
// );
// }
