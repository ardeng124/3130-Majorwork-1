import { Text, StyleSheet, View, Image } from "react-native"
import React, { Component } from "react"
import AppColours from "../config/AppColours"
import AppScreen from '../components/AppScreen'
import Constants from "expo-constants"
import AppText from "../components/AppText"
import AppButton from "../components/AppButton"

export default function WelcomeScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/logo1.png")}
            />
            <AppText style={styles.heading}>Welcome</AppText>

            <AppButton
                title={"Login"}
                onPress={() => navigation.navigate("LoginScreen")}
                style={{ marginTop: 100 }}
            />

            <AppButton
                title={"Sign up"}
                onPress={() => navigation.navigate("SignupScreen")}
                style={{ marginTop: 80 }}
            />
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
        marginTop:50,
        fontSize:40,
        alignSelf:'center',
    },

})
