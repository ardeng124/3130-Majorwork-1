import { Text, StyleSheet, View } from "react-native"
import React, { Component } from "react"
import { SafeAreaView } from "react-native"
import AppColours from "../config/AppColours"
import Constants from "expo-constants"

export default function AppText({ children, style }) {
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
