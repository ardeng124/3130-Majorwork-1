import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import React from 'react'
import AppColors from '../config/AppColours';
import AppText from './AppText';
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Swipeable from 'react-native-gesture-handler/Swipeable';

//app list image:
// returns a gesture root view that contains a swipable component
// this contains a touchable highlight that allows the user to swipe left and right for use in a flat list
export default function AppListImage({title,date,category, image, icon, onPress, onSwipeLeft, onSwipeRight}) {
  return (
      //gesture root view enables swipe gestures to work, without it they have no effect
      <GestureHandlerRootView>
          <Swipeable renderRightActions={onSwipeLeft} renderLeftActions={onSwipeRight} overshootLeft={false} overshootRight={false}>
              <TouchableHighlight
                  onPress={onPress}
                  underlayColor={AppColors.listItemBackgroundColour}
              >
                  <View style={styles.container}>
                      {icon}
                      {image && <Image source={image} style={styles.image} />}
                      <View style={styles.containerText}>
                          <AppText style={styles.text}>{date}</AppText>
                          <AppText style={styles.titleText}> {title} </AppText>
                          <AppText style={styles.text}>{category}</AppText>
                      </View>
                  </View>
              </TouchableHighlight>
          </Swipeable>
      </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:10,
        padding:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        backgroundColor:"#a3cddc"
        
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