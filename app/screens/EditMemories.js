import { StyleSheet, Text, View, Image, Alert} from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextField'
import AppButton from '../components/AppButton'
import DataManager from '../config/DataManager';
import { Formik } from 'formik';

data = DataManager.getInstance()
export default function EditMemories({navigation, route}) {

if(route.params.message !== 'none') {
  var handleDelete = ()=> {
    data.deleteMemory(route.params.message.id)
    Alert.alert(
        "Sucess!",
        "Memory deleted, refresh to see changes",
        [
            {
                text: "Ok",
                
            },
        ],
        {
            cancelable: true,
        }
    )
  }
  
    return (
        <AppScreen>
            <></>

            <AppText style={styles.heading}>
                {route && route.params.message.title}
            </AppText>
            <Image
                style={styles.image}
                source={route && route.params.message.image}
            />
            <Formik
                initialValues={{ title: "", category: "" }}
                onSubmit={(values, { resetForm }) => {
                    resetForm()
                    data.updateMemory({
                        id: route.params.message.id,
                        email: route.params.message.email,
                        title: values.title || route.params.message.title,
                        date: route.params.message.date,
                        category:
                            values.category || route.params.message.category,
                        image: route.params.message.image,
                    }, route.params.message)
                    Alert.alert(
                        "Sucess!",
                        "Memory updated, refresh to see changes",
                        [
                            {
                                text: "Ok",
                            },
                        ],
                        {
                            cancelable: true,
                        }
                    )
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            placeholder={route && route.params.message.title}
                            onChangeText={handleChange("title")}
                            value={values.title}
                        ></AppTextInput>
                        <AppTextInput
                            placeholder={route && route.params.message.category}
                            onChangeText={handleChange("category")}
                            value={values.category}
                        ></AppTextInput>
                        <AppButton
                            title="Update memory"
                            icon="pencil"
                            onPress={handleSubmit}
                        />
                        <AppButton
                            title="Delete memory"
                            icon="trash-can"
                            style={{ marginTop: 15 }}
                            onPress={handleDelete}
                        />
                    </>
                )}
            </Formik>
        </AppScreen>
    )
  
} else {
  Alert.alert(
      "Oops!",
      "You have to choose a memory first before editing",
      [
        {
          text: "Choose a memory",
          onPress: () => navigation.navigate("Memories"),
        },
      ],
      {
        cancelable: false,
      }
  )
  
}
  return( null
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