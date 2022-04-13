import { StyleSheet, Button, Modal,View } from 'react-native'
import React, { useState } from "react"
import AppButton from './AppButton'
import { FlatList } from "react-native"
import AppText from './AppText'
import AppModalItem from './AppModalItem'
import AppColours from '../config/AppColours'

export default function AppFilterModal({data, placeholder ,onSelectItem, selectedItem}) {
    const [modalVisible, setVisible] = useState(false)
    var categoriesList = new Set()
    for (let i in data) {
        categoriesList.add(data[i].category)
    }
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