import React, { Component } from 'react'
import ReactNative, { 
    AppRegistry,
    findNodeHandle,
    StyleSheet,
    UIManager,
    ScrollView,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform,
    TextInput
  } from 'react-native';

  import Holder from 'react-native-draggable-holder'
import { Button } from 'react-native-elements';

export default class ShowDetails extends Component {
    state = {

        ImageSource: null,
        isOpen: false,
        Type:"",
        URL:"",
        text:"",
        postionImage:{
          x:0,
          y:0
        },
        postionText:{
          x:0,
          y:0 
        }
      };

      Measure=()=>
      {
      
        this.refs.Quote .measure((x,y,width,height, px , py)=>{
          console.log("width",width)
          console.log("height",height)
          this.setState(prevState => ({
            postionText: {
                ...prevState.postionText,
                x: px,
                y:py
            }
        }))
      console.log("x text ",x, px)
      console.log("y text ",y, py)
      
    
      
        })
  
      }
  render() {
     MeasureImage=()=>
  {
    // alert("Koko2")

    this.refs.image.measure((x,y,width,height, px , py)=>{
      console.log("x image ",x, px)
      console.log("y image ",y, py)
      this.setState(prevState => ({
        postionImage: {
            ...prevState.postionImage,
            x: px,
            y:py
        }
    }))
    })

  }
     console.log("this.props", this.props)
     console.log("this.props.navigation.state.PositionImage.x",this.props.navigation.state.params.PositionImage.x)
     console.log("Text",this.props.navigation.state.params.Text)
    return (
   <View>
<Button  style={styles.btn} title="Back to Home" onPress={() =>{this.props.navigation.navigate('Home')}}/> 

  {/* <AndroidBackButton
        onPress={() =>{this.props.navigation.navigate('Home')}}
         /> */}
         <View style={{width:'100%' ,height:150}} >

<Holder offsetX={this.props.navigation.state.params.PositionText.x}
offsetY={this.props.navigation.state.params.PositionText.y}
 pressDragRelease={this.Measure}  reverse={false} >

<TextInput
 ref="Quote"
 style={styles.Quote}
           multiline={true}
         onChangeText={(text) => this.setState({ text })}
         value={this.props.navigation.state.params.Text}
/>
</Holder> 
</View>
<View style={{width:'100%' ,height:150}} >


{/* <Text style={{ fontWeight:'bold', fontSize:20, backgroundColor='#03A9F4',  fontFamily='Lato',marginTop: 300}}  onPress={() =>{this.props.navigation.navigate('Home')}}> Back to Home</Text> */}

<Holder  offsetX={this.props.navigation.state.params.PositionImage.x} offsetY={this.props.navigation.state.params.PositionImage.y} reverse={false}  pressDragRelease={MeasureImage} renderShape="image"imageSource={null} >
  <Image  style={{width:300,height:300}} ref="image" source={this.props.navigation.state.params.URL.uri} />
</Holder>
</View  >


{/* <Button

          backgroundColor='#03A9F4'
          fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title={"Back to Home"}
        
            /> */}

       </View>
    )
  }
}
const styles = StyleSheet.create({
Quote: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderColor: 'black',
    fontSize: 16,
    borderWidth: 5,
    height: 100,
    width:300,
    borderRadius: 10,
    
    },
    btn:{
      color: 'white',
      flexWrap: 'wrap', 
      flexDirection:'row',
        fontSize: 16,
        justifyContent: 'center',
     alignItems: 'center',
     borderWidth: 5,
     borderRadius: 10,
     marginTop:'90%'
     
     }
  })