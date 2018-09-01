import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Select, Option } from 'react-native-select-lists';
import Draggable from 'react-native-draggable';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import ImagePicker from 'react-native-image-picker';
import { Card, ListItem, Button , Rating  } from 'react-native-elements'
import Interactable from 'react-native-interactable';
import Holder from 'react-native-draggable-holder'
// import ReactFileReader from 'react-file-reader';
// import { connect } from 'react-redux';

import Meteor, { withTracker, MeteorListView , } from 'react-native-meteor';

import ReactNative, { 
    AppRegistry,
    findNodeHandle,
    StyleSheet,
    UIManager,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform,
    TextInput
  } from 'react-native';
 export default class SucessStory extends Component {
    constructor(){
        super()
        this.Measure = this.Measure.bind(this);
    }
    state = {

        ImageSource: null,
        isOpen: false,
        Type:"",
        URL:"",
        text:"",
        positionImage:{
          x:0,
          y:0
        },
        postionText:{
          x:0,
          y:0 
        }
      };
     onDrawerSnap(event) {
  console.log( "drawer state is ",event.nativeEvent)
  //  const x = event.nativeEvent.contentOffset.x;
  // console.log(`drawer state is ${ y},,${x}`);
}
onDragEvent(event){
  console.log(event)
 console.log( event.nativeEvent.targetSnapPointId)
}
      selectPhotoTapped() {
        alert("in")

        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          cameraType: 'front',
          mediaType: 'mixed',
          allowEditing: true,
          storageOptions: {
            skipBackup: true,
            cameraRoll: true
          },
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
    console.log("source",source)
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
    
              ImageSource: source
    
            });
          }
        });
      }
      // handleFiles = (files) => {
      //   console.log("image",files.base64)
      // }
      Measure=()=>
      {
        alert("Koko")
        this.refs.Quote .measure((x,y,width,height)=>{
      console.log("x",x)
      console.log("y",y)
      
      
        })
        // const handle = findNodeHandle(this.refs.Quote);
        // console.log(handle)
        // UIManager.measureInWindow(
        //   handle,x,y, 
        //   (e) => {console.error(e)}, 
        //   (x, y, w, h) => {
        //     console.log('offset', x, y, w, h);
        //   });
      }
           
componentDidMount()
{

  // setTimeout(this.Measure(),1000)
}
 render() {
    
        // setTimeout(this.Measure(),1000)

        const { navigate } = this.props.navigation;

        console.log(this.props.navigation)

       const addNugget=()=>
        {
 this.Measure()
          alert("add")
      console.log("Props dtory",this.props)    
        let NuggetDB ={
          Type:this.props.Nuggettype,
          URL:this.state.ImageSource,
          text:this.state.text,
          postionImage:{
            x:this.state.positionImage.x,
            y:this.state.positionImage.y
          },
          postionText:{
            x:this.state.postionText.x,
            y:this.state.postionText.y
          }
  
        }
  
        console.log("ObjClient",NuggetDB)
          Meteor.call('addNuggets',NuggetDB)
  
          this.props.navigation.navigate('Home',NuggetDB)
        }
        return (
            <View>

    <Icon name="upload" size={30} color="#900" onPress={this.selectPhotoTapped.bind(this)}/>
    <View
ref="Quote"
>
<Holder   reverse={false} >
 <TextInput
 onLayout={event => {
  const layout = event.nativeEvent.layout;
  console.log('height:', layout.height);
  console.log('width:', layout.width);
  console.log('x:', layout.x);
  console.log('y:', layout.y);
}}

style={styles.Quote}
          multiline={true}
        onChangeText={(text) => this.setState({ text })}
        />
</Holder>

  {/* <View style={styles.ImageContainer}> */}
   </View> 



  <View style={styles.container} >
<Button style={styles.btn} title="Choose From Gallery"  onPress={()=>{
this.props.navigation.navigate('Gallery', { name: 'Jane' })
}}/>
<Button style={styles.btn} title="Back"
onPress={
  ()=>  this.props.navigation.navigate('Home', { name: 'Jane' })

}/>
<Button  style={styles.btn} title="Save" onPress={this.Measure}/>
</View>

                <Draggable  renderSize={150} reverse={false} renderShape='image' offsetX={0} offsetY={0} imageSource={this.state.ImageSource} />

</View>
)
}
}
// const mapDispatchersToProps = (dispatcher) => {
//   return {
//     isDbClicked: (DBclick) => dispatcher({ type: 'dbClicked', value: DBclick }),
// }}

// const mapStateToProps = (state) => {
//   return {

//       ...state.app

//   }
// }

// export default connect(mapStateToProps, mapDispatchersToProps)(SucessStory);
const styles = StyleSheet.create({

container: {
flex: 1,
flexDirection: 'row',
backgroundColor: '#FFF8E1',
flexWrap:'wrap'
},

ImageContainer: {
borderRadius: 10,
width: 80,
height: 80,
borderWidth: 1,
alignItems: 'center',
backgroundColor: '#337DFF',
borderColor: '#fff',
fontStyle: 'italic',
fontWeight: 'bold',
fontSize: 16,

textShadowColor: '#252525',
textShadowOffset: { width: 2, height: 2 },
textShadowRadius: 15,
},
bottomView: {

width: '100%',
height: 50,
backgroundColor: '#FF9800',
justifyContent: 'center',
alignItems: 'center',
position: 'absolute',
bottom: 0
},
Quote: {
fontStyle: 'italic',
fontWeight: 'bold',
borderColor: 'black',
fontSize: 16,
borderWidth: 5,
height: 50,
width:150,
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


}
});