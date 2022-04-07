 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { TouchableOpacity } from 'react-native'
import AppText from './AppText'
import AppColours from '../config/AppColours'
import {MaterialCommunityIcons} from '@expo/vector-icons';
 
 export default function BackButton({text, navigation, backScreen}) {
   return (
       <TouchableOpacity onPress={() => navigation.navigate(backScreen)}>
            <View style = {{flexDirection:"row"}}>
                <MaterialCommunityIcons name={"arrow-left"} size={30} color={"#4b4273"}/>
                <AppText style = {{color:"#4b4273"}}>{text}</AppText>
            </View>
     </TouchableOpacity>
   )
 }
 
 const styles = StyleSheet.create({})