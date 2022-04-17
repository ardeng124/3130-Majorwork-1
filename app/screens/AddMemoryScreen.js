import { StyleSheet, Text, View, Image, Alert} from 'react-native'
import {React, useState, useEffect} from 'react'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextField'
import AppButton from '../components/AppButton'
import DataManager from '../config/DataManager';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native'
data = DataManager.getInstance()

// the add memory screen, allows the user to add items to the memories list
export default function AddMemoryScreen({route, navigation}) {

    //States 
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState("");
    const [date, setDate]=useState("");
    const [category, setCategory] = useState("");

    const [titleError, setTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [dateError, setDateError] = useState("");
    const [imageError, setImageError] = useState("");

    //Image picker async function
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();


        if (pickerResult.cancelled === true) {
            return;
        }
        var image = ({ localUri: pickerResult.uri });
        image = (image.localUri)
        setSelectedImage(image)
    }
    //Handle submit: creates a new memory object with the values and updates the datamanager instance
    const handleSubmit = () => {
        if(errorChecking()) {
           var newMemory = {
                id: data.getNewID(),
                email: data.getUserEmail(),
                title: title,
                date: date,
                category: category,
                image: {
                    uri: selectedImage,
                },
            }
            data.createNewMemory(newMemory)
            setTitle("")
            setCategory("")
            setDate("")
            setSelectedImage(null)
            Alert.alert(
                "Sucess!",
                "Memory created, refresh to see changes",
                [
                    {
                        text: "Ok",
                        
                    },
                ],
                {
                    cancelable: true,
                }
            )
            navigation.navigate('Memories')
    }
}
    //Error checking: makes sure the lengths of each field are correct
    const errorChecking = () => {
        if(title.length>0) {
            setTitleError(title.length<15 ? "" : "Title too long")
        } else {
            setTitleError("Please enter a title")
        }
        if(category.length>0) {
            setCategoryError(category.length<13 ? "": "Category too long")
        } else {
            setCategoryError("Please enter a category")
        }
        if(date.length>0) {
            setDateError(date.length>6 || date.length<10? "" : "Enter date with correct format")
        } else {
            setDateError("Please enter a date")
        }
        setImageError(selectedImage? "" : "Please choose an image")

        //return either true or false based off whether or not any errors occurred
        return((titleError =="")&& (categoryError =="")&& (categoryError =="")&& (selectedImage)? true: false)

    }
// main content
return(
    <AppScreen>
    <></>

    <AppText style={styles.heading}>
        Create new memory
    </AppText>
        <TouchableOpacity onPress = { () => {
            openImagePickerAsync()
            }} style = {styles.buttonUpload}>
            <View>
            <Image
                style={styles.image}
                source={{uri: selectedImage}}
            />
            </View>
        </TouchableOpacity>
        {imageError.length>0? <AppText style = {styles.errorText}>{imageError}</AppText> :<></>}

        <AppTextInput
            placeholder={"Title"}
            onChangeText={(inputText) => setTitle(inputText)}
            value={title}
            />
            {titleError.length>0? <AppText style = {styles.errorText}>{titleError}</AppText> :<></>}
        <AppTextInput
            placeholder={"Category"}
            onChangeText={(inputText) => setCategory(inputText)}
            value={category}
            />
            {categoryError.length>0? <AppText style = {styles.errorText}>{categoryError}</AppText> :<></>}

        <AppTextInput
            placeholder={"Date"}
            onChangeText={(inputText) => setDate(inputText)}
            value={date}
            />
            {dateError.length>0? <AppText style = {styles.errorText}>{dateError}</AppText> :<></>}

        <AppButton
            title="Create memory"
            icon="pencil"
            onPress={handleSubmit}
        />

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
        width:340,
        height:230,
        alignSelf:'center',
        // aspectRatio:1,
        resizeMode:'contain',
        borderRadius:5
    },
    errorText:{
        color:"red",
        fontSize:17,

    },
    buttonUpload:{
        marginTop:15,
        marginBottom:15,
        padding:5,
        width:350,
        height:250,
        alignSelf:'center',
        backgroundColor:"#c1f6f7",
        alignItems:'center'
    }
})