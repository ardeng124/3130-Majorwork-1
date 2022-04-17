import { StyleSheet, Button, View, Modal, Image } from "react-native"
import React, {useState} from 'react';
import AppScreen from '../components/AppScreen'
import AppListImage from '../components/AppListImage'
import { FlatList } from 'react-native'
import AppColours from '../config/AppColours'
import { TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import DataManager from '../config/DataManager';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppFilterModal from "../components/AppFilterModal";

data = DataManager.getInstance()


export default function MemoriesScreen({navigation}) {

    const[category, setCategory] = useState('NONE');
    var initialMemories = data.getMemories(data.getCurrentUser().email)
    
    const[refreshing, setRefreshing] = useState(false);
    const[memories, setMemories] = useState(initialMemories);
    const[modalVisible, setVisible] = useState(false)

    const[currentItem, setCurrentItem] = useState("")

    const handleRefresh = () => {
        data = DataManager.getInstance()
        initialMemories = data.getMemories(data.getCurrentUser().email)
        if(category != "NONE") {
            initialMemories = initialMemories.filter(item => item.category == category)
        }
        console.log(initialMemories)
        setMemories(initialMemories)
    }
    const handleDelete = (itemToDelete) => {
        data.deleteMemory(itemToDelete.id)
        initialMemories = data.getMemories(data.getCurrentUser().email)
        setMemories(initialMemories)
    }
    const handlePress = (item) => {
        // navigation.navigate("Edit Memories", {message:item})
        setCurrentItem(item)
        setVisible(true)
    }
    const handleEdit = (item) => {
        navigation.navigate("Edit memories", {item:item})
    }
  return (
      <>
          <AppScreen>
              <AppText style={styles.heading}>Your memories</AppText>
              <FlatList
                  data={memories}
                  refreshing={refreshing}
                  onRefresh={() => handleRefresh()}
                  renderItem={({ item }) => (
                      <AppListImage
                          title={item.title}
                          date={item.date}
                          category={item.category}
                          image={item.image}
                          onPress={() => handlePress(item)}
                          onSwipeLeft={() => (
                              <View style={styles.deleteItemView}>
                                  <TouchableOpacity
                                      onPress={() => handleDelete(item)}
                                  >
                                      <MaterialCommunityIcons
                                          name={"trash-can"}
                                          size={60}
                                      />
                                  </TouchableOpacity>
                              </View>
                          )}
                          onSwipeRight={() => (
                              <View style={styles.editItemView}>
                                  <TouchableOpacity
                                      onPress={() => handleEdit(item)}
                                  >
                                      <MaterialCommunityIcons
                                          name={"pencil"}
                                          size={60}
                                      />
                                  </TouchableOpacity>
                              </View>
                          )}
                      />
                  )}
              />

              <AppFilterModal
                  placeholder={"Filter by"}
                  data={data.getMemories(data.getCurrentUser().email)}
                  selectedItem={category}
                  onSelectItem={(item) => {
                      setCategory(item)
                      handleRefresh()
                  }}
              />

              <Modal visible={modalVisible} animationType={'fade'}>
                  < View style={styles.modalStyle}>
                    <Image style = {styles.modalImage} source = {currentItem.image} />
                    <AppText style = {styles.modalHeading}>{currentItem.title}</AppText>
                    <AppText style={{alignSelf:'center', padding:5}}>{currentItem.date}</AppText>
                  </View>
                  <Button title="close" onPress={() => setVisible(false)} />
              </Modal>
          </AppScreen>
      </>
  )
}

const styles = StyleSheet.create({
    deleteItemView: {
        width: 80,
        backgroundColor: "#b53f55",
        justifyContent: "center",
        alignItems: "center",

        marginTop: 5,
        marginBottom: 10,
    },
    editItemView: {
        width: 80,
        backgroundColor: AppColours.buttonColour,
        justifyContent: "center",
        alignItems: "center",

        marginTop: 5,
        marginBottom: 10,
    },
    listItem: {
        margin: 5,
    },
    heading: {
        marginTop: 10,
        fontSize: 25,
        alignSelf: "center",
        marginBottom: 20,
        fontWeight: "100",
    },
    modalStyle: {
        backgroundColor: AppColours.cardColour,
        flex: 1,
    },
    modalImage:{
        flex:0.8,
        resizeMode:"contain"
    },
    modalHeading:{
        fontSize:25, 
        alignSelf:'center', 
        padding:5,
        fontWeight:'bold'
    }
})