import React from 'react'
import {Button}from 'react-native'

export const FetchLocation=props=>{
return(
    <Button title="Get Location" onPress={props.onGetLocation}  />
)
}