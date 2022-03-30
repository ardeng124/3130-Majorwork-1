import { Text, StyleSheet, View, Image } from "react-native"
import React, { Component } from "react"
import AppColours from "../config/AppColours"
import AppScreen from '../components/AppScreen'
import Constants from "expo-constants"
import AppText from "../components/AppText"

export default function WelcomeScreen() {
    return (
        <AppScreen style = {styles.container}>
            <Image
            style ={styles.image}
            source = {require("../assets/logo1.png")}
            />
            <AppText styles ={styles.heading}>Welcome</AppText>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: Constants.statusBarHeight,
        alignSelf: "center",
        width: 153,
        height: 155,
    },
    heading:{
        fontSize:40,
        alignSelf:'center'
    }
})
