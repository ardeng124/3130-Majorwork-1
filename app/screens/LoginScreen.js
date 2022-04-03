import { Text, StyleSheet, View, Image } from "react-native"
import React, { Component } from "react"
import AppScreen from "../components/AppScreen"
import AppTextInput from "../components/AppTextField"
import Constants from "expo-constants"
import AppText from "../components/AppText"

export default function LoginScreen({ navigation }) {
    return (
        <AppScreen>
            <Image
                style={styles.image}
                source={require("../assets/logo1.png")}
            />
            <AppText style={styles.heading}>Login</AppText>
            <AppTextInput icon="account" placeholder="Username" />
            <AppTextInput icon="key" placeholder="Password" />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: Constants.statusBarHeight,
        alignSelf: "center",
        width: 100,
        height: 102,
    },
    heading: {
        marginTop: 50,
        fontSize: 40,
        alignSelf: "center",
        marginBottom:40
    },
})
