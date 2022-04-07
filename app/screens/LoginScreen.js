import { Text, StyleSheet, View, Image } from "react-native"
import React, { Component } from "react"
import AppScreen from "../components/AppScreen"
import AppTextInput from "../components/AppTextField"
import Constants from "expo-constants"
import AppText from "../components/AppText"
import { Formik } from 'formik';
import AppButton from "../components/AppButton"
import * as Yup from 'yup';
import DataManager from "../config/DataManager"
import BackButton from "../components/BackButton"

data = DataManager.getInstance()



const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password:  Yup.string().required().min(5).label("Password"),
    }
);

export default function LoginScreen({ navigation }) {
    return (
        <AppScreen>
            <BackButton text="Back" navigation={navigation} backScreen="WelcomeScreen"/>
            <Image
                style={styles.image}
                source={require("../assets/logo1.png")}
            />
            <AppText style={styles.heading}>Login</AppText>

            <Formik initialValues={{email: "", password: "",}}
                onSubmit = {(values, {resetForm})=> {
                    if(data.validateUser(values)) {
                        resetForm()
                        data.setUser(values.email)
                        navigation.navigate("TabNavigator", {
                            screen: "Home",
                            params:{
                                screen:"Home",
                                params:{ 
                                    userName:data.getUser(values.email).name
                                },
                            }
                        })
                    }else { 
                        resetForm()
                        alert("Login details invalid")
                    }
                 
                    }}
                validationSchema = {schema}
            >
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                <>

                <AppTextInput 
                    icon="account" 
                    placeholder="Email Address" 
                    value={values.email}
                    textContentType="emailAddress"
                    onBlur = {() => setFieldTouched("email")}
                    onChangeText = {handleChange("email")}
                    />
                <AppText style = {styles.errorText}> {errors.email}</AppText>
                <AppTextInput 
                    icon="key" 
                    placeholder="Password" 
                    autoCorrect={false}
                    textContentType="password"
                    secureTextEntry
                    value={values.password}
                    onBlur = {() => setFieldTouched("password") }
                    onChangeText = {handleChange("password")}
                    />
                <AppText style = {styles.errorText}> {errors.password}</AppText>

                <AppButton onPress={handleSubmit} title="Login" />
                </>
                )}

            </Formik>
            
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: Constants.statusBarHeight,
        alignSelf: "center",
        width: 100,
        height: 102,
    },
    heading: {
        marginTop: 50,
        fontSize: 40,
        alignSelf: "center",
        marginBottom:40
    },
    errorText:{
        color:"red",
        fontSize:17
    }
})
