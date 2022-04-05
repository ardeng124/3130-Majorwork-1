import { Text, StyleSheet, View, Image } from "react-native"
import React, { Component } from "react"
import AppScreen from "../components/AppScreen"
import AppTextInput from "../components/AppTextField"
import Constants from "expo-constants"
import AppText from "../components/AppText"
import { Formik } from 'formik';
import AppButton from "../components/AppButton"
import * as Yup from 'yup';
import * as auth from "../config/auth"



const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        name: Yup.string().required().max(32).label("Name"),
        password:  Yup.string().required().min(5).label("Password"),
    }
);

export default function SignupScreen({ navigation }) {
    return (
        <AppScreen>
            <Image
                style={styles.image}
                source={require("../assets/logo1.png")}
            />
            <AppText style={styles.heading}>Create New Account</AppText>

            <Formik initialValues={{email: "", name:"", password: "",}}
                onSubmit = {(values, {resetForm})=> {
                    if(!auth.validateUser(values)) {
                        auth.createNewUser(values)
                        navigation.navigate("AccountScreen")
                        resetForm()
                    }else {
                        resetForm()
                        alert("User already exists")
                    }
                 
                    }}
                validationSchema = {schema}
            >
                {({values, handleChange, handleSubmit, errors, setFieldTouched})=> (
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
                    icon="badge-account" 
                    placeholder="Full Name" 
                    value={values.name}
                    onBlur = {() => setFieldTouched("name")}
                    onChangeText = {handleChange("name")}

                    />
                <AppText style = {styles.errorText}> {errors.name}</AppText>

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

                <AppButton style = {{marginTop:25}} onPress={handleSubmit} title="Create account" />
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
        marginTop: 20,
        fontSize: 40,
        alignSelf: "center",
        marginBottom:40
    },
    errorText:{
        color:"red",
        fontSize:17
    },

})
