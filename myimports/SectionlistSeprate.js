/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput,View, SafeAreaView, Searchbar, Keyboard, SectionList, Alert, TouchableOpacity, Image } from 'react-native';

// const MyComponent = () => {
//     const [searchQuery, setSearchQuery] = React.useState('');
  
//     const onChangeSearch = query => setSearchQuery(query);
  
//     return (
//       <Searchbar
//         placeholder="Search"
//         onChangeText={onChangeSearch}
//         value={searchQuery}
//       />
//     );
//   };
  

const showAlert = (msg) => {
    Alert.alert(msg);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'red',

    },
    header: {
        ppaddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        backgroundColor: 'rgba(247,247,247,1.0)',
        color: 'red',
    },
    title: {
        fontSize: 20,
        color: 'blue',
    },
    subtitle: {
        fontSize: 18,
        color: 'green',
        fontStyle: 'normal',
    },
    item: {
        padding: 10,
        fontSize: 18,
        color: 'blue',
        backgroundColor: '#CECECE',
        flexDirection: 'row',
    },

    myimage: {
        height: 200,
        width: '40%',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 3

    },
    txt: {
        flexDirection: 'column',
        padding: 10,
        color: 'black',
    },
});
const DATA = [
    {
        title: 'Electronics',
        data: [
            { 'name': 'Lenovo ThinkBook', 'image': 'https://picsum.photos/id/1/200/300', 'price': '$200' },
            { 'name': 'HP Pavilion Series', 'image': 'https://picsum.photos/id/2/200/300', 'price': '$150' },
            { 'name': 'Microsoft Surface Book 2 15', 'image': 'https://picsum.photos/id/3/200/300', 'price': '$90' },
        ],
    },
    // {
    //     title: 'Books',
    //     data: ['The Art of Writing', 'Poor Dad Rich Dad', 'Fried Secrets of the Millionaire Mind '],
    //     img_path: './assets/camerone.jpg',
    // },
    // {
    //     title: 'Everything Else',
    //     data: ['Surveillance Cameras', 'Mini HD 1080P White LED ', 'Nikon D D3000 10.2MP'],
    //     img_path: './assets/camerone.jpg',
    // },
    // {
    //     title: 'Fishing',
    //     data: ['Savage Gear 3D River Roach', 'Hooks'],
    //     img_path: './assets/camerone.jpg',
    // },
];
const Item = ({ title, image, price }) => {
    return (
        <View style={styles.item}>

            <Image style={styles.myimage} source={
                {
                    uri: '' + image
                }
            } />
            <View style={styles.txt}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{price}</Text>
                <TouchableOpacity style={styles.subtitle} onPress={() => showAlert('Buy IT Now')} color="#2196F3">
                    <Text style={styles.txt}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const SectionListOther = () => (

    <SafeAreaView styles={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item.name} image={item.image} price={item.price} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title} </Text>
            )} />

    </SafeAreaView>
);

export default SectionListOther;
