import React from "react"
import { View, StyleSheet, TextInput } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from "./AppText"
import AppColours from "../config/AppColours"



export default function AppTextInput({icon, ...otherprops}) {
    return (
        <View style = {styles.container}>
            {icon && <MaterialCommunityIcons name = {icon} size ={25}/>}
            <TextInput 
            style = {styles.TextInput}{...otherprops}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        backgroundColor: AppColours.inputColour,
        padding:10,
        borderRadius:10,
        flexDirection:"row",
        borderWidth:1,
    },
    TextInput:{
        fontSize:20,
        fontFamily:"Roboto",
        flex:1,
        marginLeft:20
    }
})