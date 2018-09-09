
import React, { Component } from 'react'
import {Text,View
,
Image,
StyleSheet
} from 'react-native';


export default class ImageElement extends Component {
  render() {
    console.log("this.props.imgsource",this.props.imgsource)
    return (
   <Image source={this.props.imgsource} style={StyleSheet.image}></Image>
    )
  }
}


const style = StyleSheet.create({
    image:{
        flex:1,
        alignSelf:'stretch',
  

    }
})