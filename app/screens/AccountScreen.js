import { Text, StyleSheet, View, Image } from "react-native"
import React, { Component } from "react"
import AppText from "../components/AppText"
import AppButton from "../components/AppButton"
import AppScreen from "../components/AppScreen"
import DataManager from "../config/DataManager"
import BackButton from "../components/BackButton"
import AppCard from "../components/AppCard"

data = DataManager.getInstance()
export default function AccountScreen({navigation ,route}) {
    return (
        <AppScreen>
            <BackButton
                text="Log out"
                navigation={navigation}
                backScreen="WelcomeScreen"
            />
            <AppText style={styles.heading}>
                Welcome {data.getCurrentUser().name}
            </AppText>
            <AppCard
                title={data.getCurrentUser().name}
                subtitle={data.getCurrentUser().email}
                image={require("../assets/account.png")}
            />
            <AppButton
                onPress={() => {
                    navigation.navigate("Memories")
                }}
                title="View memories"
                style={{ marginTop: 60 }}
            />
            <AppButton
                onPress={() => {
                    navigation.navigate("Edit Memories")
                }}
                title="Edit memories"
                style={{ marginTop: 60 }}
            />
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
