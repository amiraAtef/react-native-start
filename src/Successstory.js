import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Select, Option } from 'react-native-select-lists';
import Draggable from 'react-native-draggable';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import ImagePicker from 'react-native-image-picker';
import { Card, ListItem, Button , Rating  } from 'react-native-elements'

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
export default class SucessStory extends Component {
    constructor(){
        super()

    }
    state = {

        ImageSource: null,
        isOpen: false
      };
    
      selectPhotoTapped() {
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
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
    
              ImageSource: source
    
            });
          }
        });
      }

      render() {
        const { navigate } = this.props.navigation;

        console.log(this.props.navigation)
        return (
            <View>
<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
  <View style={styles.ImageContainer}>
    <Icon name="upload" size={30} color="#900" />
  </View>
</TouchableOpacity>
<Button title="Choose From Gallery"  onPress={()=>{
this.props.navigation.navigate('Gallery', { name: 'Jane' })
}}/>
<Button title="Back"
onPress={
  ()=>  this.props.navigation.navigate('Home', { name: 'Jane' })

}/>
<Button title="Save" onPress={
  ()=>  this.props.navigation.navigate('Home', { name: 'Jane' })

}/>

                <Draggable renderSize={150} reverse={false} renderShape='image' offsetX={0} offsetY={0} imageSource={this.state.ImageSource} />

</View>
)
}
}
const styles = StyleSheet.create({

container: {
flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start', alignItems: 'flex-start',
backgroundColor: '#FFF8E1',

},

ImageContainer: {
borderRadius: 10,
width: 80,
height: 80,
borderWidth: 1,
justifyContent: 'center',
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

}
});