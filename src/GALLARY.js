
import React, { Component } from 'react'
import {
  Text, View
  ,ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,ImageBackground,
StyleSheet,TouchableOpacity,Image,  ImageEditor,  ImageStore,
AsyncStorage,


} from 'react-native';
 import ImageElement from './ImageElement'
 import { connect } from 'react-redux';
//  import   base64Img  from 'base64-img'
// import {NativeModules} from 'react-native-image-to-base64'

class ImageGallery extends Component {

constructor(){
 
  super()
  // base64Img.base64('./img/1.jpg',(err, data)=>{

  //   console.log(data)
  //   if(err)
  //   {
  //     console.log(err)
  //   }
  // })
}

state={
  modalVisible:false,
  pictureBase64:"",
modalImage:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
Images:[
 { image:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350"},
 { image:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350"},
 { image:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350"},
]
}

setModelVisible( visible, item){
  console.log("item",item)
  console.log("img", item.image)

  console.log("img", this.state.Images)
  this.setState({
    modalImage:item.image
    
  })

  this.setState({
    modalVisable:visible
  })
}



submit=()=>{
  this.modalVisable(false)
  this.props.SetImage(this.state.modalImage)
  console.log("imgstore",this.props.app.image)
  console.log("nuggettype", this.props.nuggetType)
  this.props.navigation.navigate( this.props.nuggetType, { name: 'Jane' })
  
}
  render() {

    let images = this.state.Images.map((item)=>{
      console.log(item.image)
return  (<TouchableWithoutFeedback  key={item}  onPress={()=>this.setModelVisible( true, item)}>

<View>
<ImageElement  imgsource={item.image} />
</View>
</TouchableWithoutFeedback>)
    })
    return (

  //  <ScrollView >
<View>
<Modal
  presentationStyle="pageSheet"
  animationType="slide"
  transparent={false}
  visible={this.state.modalVisible}
  onRequestClose={() => {
    alert('Modal has been closed.');
  }}
>
{console.log("here",this.state.modalImage)}
<Image source={this.state.modalImage}/>

<TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress={() => {
                  this.submit()
                }}>Submit</Text>
              </TouchableOpacity>
  </Modal>
  {images}

  </View>

//  </ScrollView> 
    )
  }
}
const mapStateToProps = (state) => {
  return {

    ...state

  }
}
const mapDispatchersToProps = (dispatcher) => {
  return {
    SetImage: (img) => dispatcher({ type: 'ChooseImage', value: img }),
}}
export default connect(mapStateToProps, mapDispatchersToProps)(ImageGallery);

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
    height:(Dimensions.get('window').height/4)-12,
    width:(Dimensions.get('window').width/4)-12,
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
  },
  BGImage: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'

  },
})
