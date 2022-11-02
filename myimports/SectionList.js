/* eslint-disable prettier/prettier */
import React from 'react';
import { SectionList, StyleSheet, Text, View,Button } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        color:'yellow',
    },
    SectionHeader: {
        ppaddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        backgroundColor: 'rgba(247,247,247,1.0)',
        color: "red",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});
const SectionListBasics = ({navigation}) => {
    return (
        <View style={styles.container}>
<Button title='SectionList'  onPress={()=>navigation.navigate("SectionListOther")}/>
<Button title='Flat'  onPress={()=>navigation.navigate("FlatListBasics")}/>
<Button title='NewPost'  onPress={()=>navigation.navigate("NewPost")}/>
<Button title='Viewpost'  onPress={()=>navigation.navigate("Viewpost")}/>
<Button title='Home Page'  onPress={()=>navigation.navigate("Home")}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
<Button
  title="Go to Details... again"
  onPress={() => navigation.push('SectionListOther')}

/>



            <SectionList
                sections={[
                    { title: 'D', data: ['Dadud', 'Fratuun', 'Daahir'] },
                    { title: 'J', data: ['Halima', 'Miski', 'Imran', 'Abdishakur', 'Ali', 'Hashim'] },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.SectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => 'basicListEntry-${item.title'} />
        </View>
    );
}
export default SectionListBasics;


