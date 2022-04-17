import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeTab = createBottomTabNavigator();

import AccountScreen from '../screens/AccountScreen';
import TabIcon from '../components/TabIcon';
import AppColours from '../config/AppColours';
import AddMemoryScreen from '../screens/AddMemoryScreen';
import MemoriesStackNavigator from './MemoriesStackNavigator';



const TabNavigator = () => ( 
    <HomeTab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, tabBarActiveBackgroundColor:AppColours.tabBarColour, tabBarInactiveBackgroundColor:AppColours.tabBarColour}}>
        <HomeTab.Screen name="Home" component={AccountScreen} options={{tabBarIcon: () =><TabIcon size = {50} name ="home" />}}/>
        <HomeTab.Screen name="Memories" component={MemoriesStackNavigator} initialRouteName={"Memories"} options={{tabBarIcon: () =><TabIcon size = {50} name ="format-list-bulleted" />}}/>
        <HomeTab.Screen name="Add Memories" component={AddMemoryScreen} initialParams={{message:"none"}} options={{tabBarIcon: () =><TabIcon size = {50} name ="content-save-edit" />}}/>
    </HomeTab.Navigator>
)

export default TabNavigator;