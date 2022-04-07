import { Text, StyleSheet, View, Image } from "react-native"
import React, { Component } from "react"
import AppText from "../components/AppText"
import AppButton from "../components/AppButton"
import AppScreen from "../components/AppScreen"
import DataManager from "../config/DataManager"
import BackButton from "../components/BackButton"

data = DataManager.getInstance()
export default function AccountScreen({navigation,route}) {
    return (
        <AppScreen>

            <BackButton text="Log out" navigation={navigation} backScreen="WelcomeScreen"/>
            <AppText style={styles.heading}> Welcome {data.getCurrentUser().name} </AppText>
        {/* <AppButton onPress={navigation.navigate("Memories")} title="View memories" /> */}
        </AppScreen>

    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 50,
        fontSize: 40,
        alignSelf: "center",
        marginBottom:40
    },
})
