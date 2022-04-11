import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextField'
import AppButton from '../components/AppButton'
import DataManager from '../config/DataManager';
import { Formik } from 'formik';

data = DataManager.getInstance()
export default function EditMemories({navigation, route}) {
  const handleUpdate = (id,values) => {
    data.updateMemory(id, values)
  }
  return (

    
   <AppScreen>
      <AppText style = {styles.heading}> {route && route.params.message.title}</AppText>
      <Image style = {styles.image} source={route && route.params.message.image}/>
      <Formik initialValues={{title: "", category: ""}}
                onSubmit = {(values, {resetForm})=> {
                  resetForm()
                    data.updateMemory(route.params.message.id, {
                      id: route.params.message.id,
                      email: route.params.message.email,
                      title:values.category,
                      date:route.params.message.date,
                      category:values.category || route.params.message.category,
                      image: route.params.message.image,
                    } )
                  }}
            >
                {({values, handleChange, handleSubmit, errors,})=> (
                <>
                  <AppTextInput placeholder={route.params.message.title} ></AppTextInput>
                  <AppTextInput placeholder={route.params.message.category} ></AppTextInput>
                  <AppButton title = "Update memory" icon="pencil" onPress={handleSubmit}/>
                  <AppButton title = "Delete memory" icon="trash-can" style = {{marginTop:15}}/>
                </>
                )}

            </Formik>


   </AppScreen>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontWeight:"100",
    alignSelf:'center',
    marginTop:10,
    fontSize:25
  },
  image:{
    padding:5,
    width:350,
    height:300,
    alignSelf:'center',
    // aspectRatio:1,
    resizeMode:'contain',
    borderRadius:5
  }
})