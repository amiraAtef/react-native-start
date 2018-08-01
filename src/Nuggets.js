import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content } from './GALLARY'
import Draggable from 'react-native-draggable';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Interactable from 'react-native-interactable';

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
import { SideMenu, List } from 'react-native-elements'
import ImageGallery from './GALLARY'
// import Interactable from 'react-native-interactable';
export default class Nuggets extends Component {
  constructor(props) {
    super(props);

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
    const slideAnimation = new SlideAnimation({
      slideFrom: 'bottom',
    });
    return (
      <View style={styles.container}>
        <Draggable renderSize={150} reverse={false} renderShape='image' offsetX={0} offsetY={0} imageSource={this.state.ImageSource} />

        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={styles.ImageContainer}>
            <Icon name="upload" size={30} color="#900" />

          </View>
        </TouchableOpacity>
        <Draggable>
        <Interactable.View
  horizontalOnly={true}
  snapPoints={[{x: 0}, {x: -200}]}
  onSnap={this.onDrawerSnap}>
        <TextInput
style={styles.Quote}
          multiline={true}
          numberOfLines={4}
          // onChangeText={(text) => this.setState({ text })}
        />
        </Interactable.View>

        </Draggable>
        <Button
          title="Show Gallery"
          onPress={() => {
            this.popupDialog.show();
          }}
        />
        <PopupDialog style={styles.ImageContainer}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}

        >
          <View>
            {/* <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={styles.ImageContainer}>
            <Icon name="upload" size={30} color="#900" />

          </View>
        </TouchableOpacity>  */}
            {/* <Draggable renderSize={150} reverse={false} renderShape='image' offsetX={0} offsetY={0} imageSource={this.state.ImageSource} /> */}

          </View>

          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: (Platform.OS === 'android') ? 20 : 0
          }} >
            < ImageGallery style={styles.ImageContainer} />

            <Button title="Close"
              onPress={() => {
                this.popupDialog.dismiss();
              }}
              style={styles.bottomView}
              icon={
                <Icon
                  name='Close'
                  size={15}
                  color='white'
                />}
            />

          </View >
        </PopupDialog>
      </View>

    )
  }
  // onDrawerSnap(event) {
  //   const snapPointId = event.nativeEvent.id;
  //   console.log(`drawer state is ${snapPointId}`);
  // }
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