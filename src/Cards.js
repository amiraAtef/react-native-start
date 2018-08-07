import React, { Component } from 'react'
import { Select, Option } from 'react-native-select-lists';
import Draggable from 'react-native-draggable';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform,
    TextInput
  } from 'react-native';

  import Successstory from './Successstory'
export default class Cards extends Component {
    constructor(){
        super()

    }

state={
currentcomponent:0
}
choosen=(value,text,e)=>{
    console.log(value,text)
    this.popupDialog.dismiss();
this.setState({currentcomponent:value})   
       }      
  render() {
   
let SuccessStory=null
let provideProduct=null
let provideService=null
console.log(this.state.currentcomponent)
if (this.state.currentcomponent==1)
{
    alert("koko")
    console.log("koko")
    SuccessStory=<Successstory/>
}
console.log(this.props.navigation)
    const slideAnimation = new SlideAnimation({
        slideFrom: 'bottom',
      });
        
    return (
        <View>
  {SuccessStory}
        <PopupDialog 
        height={200}
        dialogTitle={<Text style={{fontWeight: 'bold',
        fontSize: 26,}}>Please choose one</Text>}
    ref={(popupDialog) => {
        popupDialog.show()
    this.popupDialog = popupDialog;
 
}}
    >
<Select caret="down" selectTextStyle={{fontWeight: 'bold',   fontSize: 16,}} listHeight={200} last={true} onSelect={(value,text)=>{
    this.choosen(text,value)

}} >
  <Option  value={1}>Success Story</Option>
  <Option value={2}>Provide Service</Option>
  <Option value={3}>Provide Product</Option>
</Select>
</PopupDialog>
</View>
    )

}}
 