import {View,Text,StyleSheet,SafeAreaView,Button, Alert,} from 'react-native';
const App2 = () => {
  return <PersonComponent />;
};
//countComponent
const PersonComponent = () => {
  const [person, setPerson] = useState({ first_name: 'Marwan',surname: 'Abdisatar',Year: '1998',
  });

  return (
    <SafeAreaView>
      <View style={styles.text}>
        <Text style={styles.text}>
          Name: {person.first_name} {person.surname}
          {person.Year}
        </Text>

        <Button
          title="change name"
          color="black"
          onPress={() =>
            setPerson(person1 => {
              return {...person1, first_name: 'Khalid'};
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};
const generateColor = () => {
  let randomColorString = '#';
  const arrayOfColorFunctions = '0123456789abcdef';
  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
  }
  return randomColorString;
};
const styles = StyleSheet.create({
  text: {
    color: generateColor(),
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App2;
