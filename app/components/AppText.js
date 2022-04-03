import { Text, StyleSheet, View } from "react-native"
import React from "react"

export default function AppText({ style, children }) {
    return (
        <Text style = {[styles.text,style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontFamily:"Roboto"
    }
})
