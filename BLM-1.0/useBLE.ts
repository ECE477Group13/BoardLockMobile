/* disable bitwise operations on eslint */

import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";
import * as ExpoDevice from "expo-device"

//Interface in TypseScript in like a struct/creating a type
interface BluetoothLowEnergyAPI {
    requestPermissions(): Promise<boolean>; //Promise -> look into more
    scanForPeripherals(): void;
}

/*     funct name : return type      */
function useBLE(): BluetoothLowEnergyAPI {

    //useMemo is used for optimization...
    const bleManager = useMemo(() => new BleManager(), []); 

    //State to keep track of devices
    const [allDevices, setAllDevices] = useState<Device[]>([]);

    //Special method to request permissions for Android on API level 31
    const requestAndroidAPI31Permissions = async () => {
        const bluetoothScanPermissions = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            {
                title: "Scan Permission",
                message: "This application requires Bluetooth scanning",
                buttonPositive: "Accept",
            }
        );
        const bluetoothConnectPermissions = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            {
                title: "Bluetooth Connection Permission",
                message: "This application requires Bluetooth connection",
                buttonPositive: "Accept",
            }
        );
        const bluetoothFineLocationPermissions = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message: "This application requires fine location",
                buttonPositive: "Accept",
            }
        );

        //Return if all permissions were accepted or not
        return (
            bluetoothScanPermissions === "granted" &&
            bluetoothConnectPermissions === "granted" &&
            bluetoothFineLocationPermissions === "granted"
        );
    };

    //General Android permission requests
    const requestPermissions = async () => {
        //Check if device is Android
        if(Platform.OS === "android") {
            //Check if Android is API level 31 or higher
            if((ExpoDevice.platformApiLevel ?? -1) < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "Bluetooth requires location",
                        buttonPositive: "Accept",
                    }
                );

                //Check if permission granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;

            //Android device is below API level 31    
            } else {
                const isAndroid31PermissionGranted = await requestAndroidAPI31Permissions();
                return isAndroid31PermissionGranted;
            }
        } else {
            return true; //Not sure if this should be true
        }
    };

    const scanForPeripherals = () => {};

    return {
        scanForPeripherals,
        requestPermissions,
    };
}

//Make this file available in App.tsx
export default useBLE;