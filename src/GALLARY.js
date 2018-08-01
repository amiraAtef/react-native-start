
import React, { Component } from 'react'
import {
  Text, View
  ,ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
StyleSheet

} from 'react-native';
 import ImageElement from './ImageElement'

export default class ImageGallery extends Component {

state={
modalVisable:false,
modalImage: require('./img/1.jpg'),
Images:[
  require('./img/2.jpg'),
  require('./img/3.jpg'),
  require('./img/4.jpg'),
]
}
setModelVisible(visible , imageKey){
  this.setState({
    modalImage: this.state.Images[imageKey]
  })
  this.setState({
    modalVisable:visible
  })
}
getImage(){
  return this.state.modalImage;
}
  render() {

    let images = this.state.Images.map((val,key)=>{
return  (<TouchableWithoutFeedback  key={key}  onPress={()=>this.setModelVisible(true , key)}>

<View style={StyleSheet.imageWrap}>
<ImageElement  imgsource={val}/>
</View>
</TouchableWithoutFeedback>)
    })
    return (

   <ScrollView >
{images}
 </ScrollView> 
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
flexWrap:'wrap',
backgroundColor:'#eee'
  },
  imageWrap:{
    justifyContent: 'center',
    alignItems: 'center',
    margin:2,
    height:(Dimensions.get('window').height/8)-12,
    width:(Dimensions.get('window').width/8)-12,
    backgroundColor:'#fff'



  },
  modal:{
    flex:1,
    height:(Dimensions.get('window').height),
    width:(Dimensions.get('window').width),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:'blue'
  }
})