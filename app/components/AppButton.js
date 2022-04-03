import { Text, StyleSheet, View } from "react-native"
import React from "react"
import { TouchableOpacity } from "react-native"
import AppText from "./AppText"
import AppColours from "../config/AppColours"

export default function AppButton({ title, onPress, ...otherprops }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, otherprops.style]}>
        
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20
    },
    button:{
        justifyContent:"center",
        alignSelf:'center',
        alignItems:"center",
        width:"50%",
        paddingLeft:10,
        paddingRight:10,
        paddingVertical:8,
        backgroundColor: AppColours.buttonColour,
        borderRadius:10,
    }
})
