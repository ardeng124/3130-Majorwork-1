import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from './AppText'
import AppColours from '../config/AppColours'

// app filter modal item:
// returns a touchable opacity for use in the modals
// used in the app filter modal 
export default function AppModalItem({ title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons name="shape" size={50} />
            <AppText style = {{fontSize:17}}>{title}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "31%",
        alignItems: "center",
        padding:8,
        backgroundColor:AppColours.tabBarColour,
        borderRadius:4,
        margin:5,
        marginTop:20
    },
})