import React from "react";
import { StyleSheet, Text, View } from "react-native";



const Head = () => {

    return(
        <View style={Styles.headerContainer}>
            <Text style={Styles.HeaderText} >
                Shopping List
            </Text>
        </View>
    )

};


const Styles = StyleSheet.create({
    headerContainer:{
        flex:.1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        marginBottom:10
    },
    HeaderText:{
        fontSize:20

    }
})


export default Head;