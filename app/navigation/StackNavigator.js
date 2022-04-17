import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import AccountScreen from "../screens/AccountScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import TabNavigator from "./TabNavigator"


const Stack = createNativeStackNavigator()

export default function AppNavigator(props) {  
    return (
         <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="SignupScreen" component={SignupScreen}/>
                <Stack.Screen name="TabNavigator" component={TabNavigator}/>

        </Stack.Navigator>
    )
}
