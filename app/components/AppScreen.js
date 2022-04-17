import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AppColours from '../config/AppColours'
//imported here to set the height of the view to the statusbar height
import Constants from "expo-constants"

// app screen:
// the default app screen component used on every screen with padding, view height, and colour all pre defined for simplicity
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