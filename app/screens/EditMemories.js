import { StyleSheet, Text, View, Image, Alert} from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextField'
import AppButton from '../components/AppButton'
import DataManager from '../config/DataManager';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BackButton from '../components/BackButton'

data = DataManager.getInstance()

const schema = Yup.object().shape(
    {
        title: Yup.string().min(1).max(15),
        category:  Yup.string().min(1).max(13),
    }
);
export default function EditMemories({navigation, route}) {
if(route.params.item !== 'none') {
  var handleDelete = ()=> {
    data.deleteMemory(route.params.item.id)
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
    navigation.navigate("Memories Screen")

  }
  
    return (
        <AppScreen>
            <BackButton text="Back" navigation={navigation} backScreen="Memories Screen"/>

            <AppText style={styles.heading}>
                {route && route.params.item.title}
            </AppText>
            <Image
                style={styles.image}
                source={route && route.params.item.image}
            />
            <Formik
                initialValues={{ title: "", category: "" }}
                onSubmit={(values, { resetForm }) => {
                    resetForm()
                    data.updateMemory({
                        id: route.params.item.id,
                        email: route.params.item.email,
                        title: values.title || route.params.item.title,
                        date: route.params.item.date,
                        category:
                            values.category || route.params.item.category,
                        image: route.params.item.image,
                    }, route.params.item)
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
                    navigation.navigate("Memories Screen")
                }
            }
                validationSchema = {schema}

            >
                {({ values, handleChange, handleSubmit, errors, setFieldTouched}) => (
                    <>
                        <AppTextInput
                            placeholder={route && route.params.item.title}
                            onChangeText={handleChange("title")}
                            value={values.title}
                            onBlur = {() => setFieldTouched("title")}
                            />
                        <AppText style = {styles.errorText}> {errors.title}</AppText> 
                        <AppTextInput
                            placeholder={route && route.params.item.category}
                            onChangeText={handleChange("category")}
                            value={values.category}
                            onBlur = {() => setFieldTouched("category")}
                            />
                        <AppText style = {styles.errorText}> {errors.category}</AppText> 
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
  },
  errorText:{
    color:"red",
    fontSize:17
}
})