import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppColours from '../config/AppColours'
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function TabIcon({size, name}) {
    return (
        <View style={{width: size, height: size, borderRadius: size/2, alignItems:"center", justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} size={size*0.6}/>
        </View>
    )
}
 
const styles = StyleSheet.create({
   
})