/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const flex = () => {

    return (
        <View style={[styles.maincontainer, {
            //Try Setting FlexDirection to Row
            flexDirection: "column",
        }]}>

            <View style={[styles.subcontainer, { flex: 3, backgroundColor: "red" }]}>
                <Text style={styles.textelements}>height : 5'7" </Text>
                <Text style={[styles.textelements, { alignSelf: "stretch" }]}> color: brown </Text>
            </View>
            <View style={{ flex: 2, backgroundColor: "darkorange" }}>
                <Text style={[styles.textelements, {
                    position: "absolute", bottom: 10,
                    right: 10
                }]}> height : 5'7" </Text>
                <Text style={styles.textelements}> color: brown </Text>
                <View style={{ flex: 1, backgroundColor: "green" }}>
                    <Text style={[styles.textelements, { flex: 1 }]}>color :brown </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
       // marginTop: 50, 
       // marginLeft: 10, 
       // marginRight: 5, 
        //marginBottom: 7,
        flex: 1,
        margin:6,
       // borderTopWidth: 12,
        borderRightWidth: 12,
        // borderBottomWidth: 5,
         // borderLeftWidth: 1,
        borderEndColor: 'blue',
        padding: 20,
        justifyContent:'flex-start',
        backgroundColor: "#FFF",
        

    },

    subcontainer: {
        //justifyContent: "space-evenly",
        flex: 1,
        justifyContent :'flex-end',
        flexDirection: "column",
        alignItems: "center",
        borderWidth:10,
        margin :5,
        borderColor: "#808000"
    },
    textelements: {
        borderColor: "blue",
        borderWidth: 5,
    }
});
export default flex;










