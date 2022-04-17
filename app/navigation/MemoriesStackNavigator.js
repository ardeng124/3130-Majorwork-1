import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


import MemoriesScreen from "../screens/MemoriesScreen"
import EditMemories from "../screens/EditMemories"


const Stack = createNativeStackNavigator()

export default function MemoriesStackNavigator(props) { 
    return (
         <Stack.Navigator
            initialRouteName="MemoriesScreen"
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Memories Screen" component={MemoriesScreen}/>
                <Stack.Screen name="Edit memories" component={EditMemories}/>
        </Stack.Navigator>
    )
}
