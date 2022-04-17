import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import AppText from './AppText'
import AppColours from '../config/AppColours'

//App card:
// returns a card component with pre defined styles and layout
// input paramters are the title text, subtitle, and images
export default function AppCard({title, subtitle, image, ...otherprops}) {
  return (
      <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.textView}>
              <AppText style={{ fontWeight: "bold" }}>{title}</AppText>
              <AppText style={{ fontWeight: "100" }}>{subtitle}</AppText>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColours.cardColour,
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        marginBottom:20,
        width:"95%",
        alignSelf:'center'
    },
    image:{
        height:80,
        width:80
    },
    textView:{
        marginLeft:30
    }
})