import { Text, StyleSheet, View } from "react-native"
import React from "react"
import { TouchableOpacity } from "react-native"
import AppText from "./AppText"
import AppColours from "../config/AppColours"
import { MaterialCommunityIcons } from "@expo/vector-icons"

//app button:
// returns a touchable opacity element with a pre defined set of styles that match with the applications theme
// input parameters are the title, onpress function, icon, and others
export default function AppButton({ title, onPress, icon, ...otherprops }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, otherprops.style]}>
        
            <AppText style={styles.text}>{title}</AppText>
            {icon && <MaterialCommunityIcons name = {icon} size = {25}/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        marginRight:10
    },
    button:{
        justifyContent:"center",
        alignSelf:'center',
        alignItems:"center",
        width:"55%",
        paddingLeft:10,
        paddingRight:10,
        paddingVertical:8,
        backgroundColor: AppColours.buttonColour,
        borderRadius:10,
        flexDirection:'row',
        margin:5
    }
})
