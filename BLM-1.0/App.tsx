/****************** GENERAL IMPORTS ******************/
/*****************************************************/

import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  Button,
  Modal,
  Alert,
  Pressable, 
  SafeAreaView
} from 'react-native';

import {Component} from 'react';

//Import the useBLE file we made
import useBLE from "./useBLE";
import DeviceModal from './DeviceConnectionModal';

/***************** GLOBAL VARIABLES ******************/
/*****************************************************/


/***************** UI-BASED FUNCTIONS ****************/
/*****************************************************/



/***************** MAIN APP FUNCTION *****************/

export default function App() {
  
  //Parameters returned from useBLE
  const {
    requestPermissions,
    scanForPeripherals,
    // allDevices,
    // connectToDevice,
    // connectedDevice,
    // boardLockData,
    // disconnectFromDevice,
  } = useBLE();

  //Variables used to control the modal/popups
  const [isModalVisible, setModalVisible] = useState<boolean>(false);


  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setModalVisible(true);
  };
  
  return (
    <SafeAreaView style={styles.general}>
      <View style={styles.logo}>
        <Image 
          style={{width: 350}}
          resizeMode="contain"
          source={require("./assets/BoardLock_In_Board_Empty.png")}
        />
      </View>

      <View style={styles.randomSpace}></View>




      <View style={styles.buttonBackground}>
        <TouchableOpacity onPress={openModal} style={styles.button}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            {"Pair Device"}
          </Text>
        </TouchableOpacity>
      </View>
      
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => hideModal()}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={() => {}}
        devices={[]}
      />  */}



    </SafeAreaView>

  );
};


/********************   STYLES   *********************/
/*****************************************************/

//'styles' is an object  and 'container' is a property
const styles = StyleSheet.create({
  
  //Similar to CSS but not CSS

  general: {
    flex: (1), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    flex: (5), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonBackground: {
    flex: (4), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
  }, 

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(151, 151, 151)',
    paddingHorizontal: 30,
    paddingVertical: 10
  }, 

  randomSpace: {
    flex: (10), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
  }, 






  

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});


/*********************   NOTES   *********************/
/*****************************************************/

/*
      <View style={styles.buttonBackground}>
        <TouchableOpacity style={styles.button} onPress={() => alert("You pressed a useless button.")}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Useless Button</Text> 
        </TouchableOpacity>
      </View>

      <View style={styles.buttonBackground}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Button pressed.")}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Press For Fun</Text> 
        </TouchableOpacity>
      </View>

      <Text onPress={handlePress}>BoardLock</Text>

      <Button 
        title="Button"
        color="black" 
        onPress={() => alert("You pressed a useless button.")}
      />

      
      <TouchableOpacity onPress={() => console.log("Logo pressed.")}>
        <Image 
          style={{width: 350}}
          resizeMode="contain"
          source={require("./assets/BoardLock_In_Board_Empty.png")}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
      */
