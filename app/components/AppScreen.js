import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AppColours from '../config/AppColours'
  import Constants from "expo-constants"

export default function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles.paddingView}>{children}</View>
        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: AppColours.backgroundColour,
    },
    paddingView: {
        flex: 1,
        padding: 5,
        backgroundColor: AppColours.backgroundColour,
    },
})