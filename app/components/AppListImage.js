import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import React from 'react'
import AppColors from '../config/AppColours';
import AppText from './AppText';

import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function AppListImage({title,date,category, image, icon, onPress, onSwipeLeft, onSwipeRight}) {
  return (
    <Swipeable renderRightActions={onSwipeLeft} renderLeftActions={onSwipeRight}>
        <TouchableHighlight onPress={onPress} underlayColor={AppColors.listItemBackgroundColour}>
            <View style = {styles.container}>
                {icon}
                {image && <Image source={image} style={styles.image}/>}
                <View style = {styles.containerText}>
                    <AppText style = {styles.text}>{date}</AppText>
                    <AppText style={styles.titleText}> {title} </AppText>
                    <AppText style = {styles.text}>{category}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        
    },
    text:{
        padding:5,
        fontSize:18
    },
    containerText:{
        marginLeft:10,
        flexDirection:"column"
    },
    titleText:{
        padding:5,
        marginLeft:40,
        flexWrap:"wrap",
        fontWeight:'bold'
    },
    image:{
        marginLeft: 5,
        height: 100,
        width: '35%',
        borderRadius:10
    },
})