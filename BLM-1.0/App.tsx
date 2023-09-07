/****************** GENERAL IMPORTS ******************/
/*****************************************************/

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  //Text, 
  View 
  //Image,
  //TouchableOpacity,
  //Button 
} from 'react-native';

/***************** GLOBAL VARIABLES ******************/
/*****************************************************/


/***************** UI-BASED FUNCTIONS ****************/
/*****************************************************/

function _Alert_UI( ) {

}

function _Bluetooth_UI( ) {
  
}

function _Threat_UI( ) {
  
}

function _Locked_UI( ) {
  
}

function _Track_UI( ) {

}

/***************** BACKEND FUNCTIONS *****************/
/*****************************************************/

function _Alert_Funct( ) {
  return false;
}

function _Bluetooth_Funct( ) {
  return false;
}

function _Threat_Funct( ) {
  return false;
}

function _Locked_Funct( ) {
  return false;
}

function _Track_Funct( ) {
  return false;
}

/***************** MAIN APP FUNCTION *****************/
/*****************************************************/

export default function App() {
  
  //Declare and define variable
  let x = 1;

  //Logging function... only use for debugging. Comment out ottherwise.
  console.log("BoardLockMobile running...");
 
  //Random function
  const handlePress = () => console.log("Text pressed.");

  return (   
   
    <View style={styles.alert_bluetooth}>

    </View>
       

  );
}

/********************   STYLES   *********************/
/*****************************************************/

//'styles' is an object  and 'container' is a property
const styles = StyleSheet.create({
  
  //Similar to CSS but not CSS

  alert_bluetooth: {
    flex: (1), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    flex: (1), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(80, 125, 115)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  page: {
    flex: (1), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  threat: {
    flex: (2/10), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(80, 125, 115)',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  locked: {
    flex: (2/10), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  track: {
    flex: (2/10), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(80, 125, 115)',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  settings: {
    flex: (1/10), //Flexible to fill 100% of the available screen space
    backgroundColor: 'rgb(107, 107, 107)',
    alignItems: 'center',
    justifyContent: 'center',
  } 
});

/*********************   NOTES   *********************/
/*****************************************************/

/*
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
