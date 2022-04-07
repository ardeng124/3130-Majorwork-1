import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';
import AppScreen from '../components/AppScreen'
import AppListImage from '../components/AppListImage'
import { FlatList } from 'react-native'
import AppColours from '../config/AppColours'
import { TouchableOpacity } from 'react-native-web'

    import {MaterialCommunityIcons} from '@expo/vector-icons';
import DataManager from '../config/DataManager';

data = DataManager.getInstance()


export default function MemoriesScreen() {

    var memories = data.getMemories(data.getCurrentUser().email)

    const handleDelete = (itemToDelete) => {
        data.deleteMemory(itemToDelete.id)
        memories = data.getMemories(data.getCurrentUser().email)

    }

  return (
    <AppScreen>
        <FlatList
            data={memories}
            renderItem ={({item}) => 
            <AppListImage
                title={item.title}
                date={item.date}
                category={item.category}

                image={item.image}
                onPress={()=>console.log(item)}
                onRefresh = {() =>  memories = data.getMemories(data.getCurrentUser().email)}
                onSwipeLeft = {() => {
                    <View style = {styles.deleteItemView}>
                        <TouchableOpacity onPress = {handleDelete(item)}>
                            <MaterialCommunityIcons name={"trash-can"} size={60}/>
                        </TouchableOpacity>
                    </View>} }
                onSwipeRight = {() => {
                    <View style = {styles.deleteItemView}>
                        <TouchableOpacity onPress = {handleDelete(item)}>
                            <MaterialCommunityIcons name={"trash-can"} size={60}/>
                        </TouchableOpacity>
                    </View>} }
            />}
        />
        
    </AppScreen>
  )
}

const styles = StyleSheet.create({
    deleteItemView:{
        width:70,
        backgroundColor:AppColours.buttonColour,
    }
})