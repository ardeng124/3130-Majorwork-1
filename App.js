import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./app/navigation/StackNavigator"
import MemoriesScreen from "./app/screens/MemoriesScreen"

export default function App() {
    return (
        
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
