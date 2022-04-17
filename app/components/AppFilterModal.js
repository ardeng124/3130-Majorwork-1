import { StyleSheet, Button, Modal,View } from 'react-native'
import React, { useState } from "react"
import AppButton from './AppButton'
import { FlatList } from "react-native"
import AppModalItem from './AppModalItem'
import AppColours from '../config/AppColours'

//App filter modal:
// returns a modal specifically for use in the memories screen as the list of memory filter selection
// the modal contains a butotn to open, a flat list with all the data passed in, and a close button

export default function AppFilterModal({data, placeholder ,onSelectItem, selectedItem}) {
    const [modalVisible, setVisible] = useState(false)
    //creates a set of all categories, a set is used to prevent any duplicates
    var categoriesList = new Set()
    for (let i in data) {
        categoriesList.add(data[i].category)
    }
    //when categories is set to NONE the memories screen does not filter anything
    categoriesList.add('NONE')
  return (
      <>
              <AppButton
                  title= {selectedItem? placeholder+": "+selectedItem: placeholder}
                  onPress={() => setVisible(true)}
              ></AppButton>
              <Modal visible={modalVisible} animationType={"slide"}>
                 < View style={styles.modalStyle}>
                  <FlatList
                    numColumns={3}
                    data={Array.from(categoriesList)}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <AppModalItem
                        title={item}
                        onPress={() =>{
                            setVisible(false);
                            onSelectItem(item)
                        }}
                        />
                        )}
                  />
                        <Button title="close" onPress={() => setVisible(false)} />
          </View>
              </Modal>
      </>
  )
}

const styles = StyleSheet.create({
    modalStyle:{
        backgroundColor:AppColours.cardColour,
        flex:1
    }
})