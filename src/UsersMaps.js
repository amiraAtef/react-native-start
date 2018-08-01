import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native'
import MapView from 'react-native-maps'
const UsersMaps= props=>{
return(

    <View style={styles.mapContainer}>

        <MapView style={styles.map}/>
    </View>
)
}

const styles=StyleSheet.create({

    mapContainer:{
        width:"100%",
        hight:200
    },
    map:{
width:"100%",
hight:"100%"
    }
})