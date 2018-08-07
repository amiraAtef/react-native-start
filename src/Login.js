import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground, TextInput, TouchableOpacity, AsyncStorage,
} from 'react-native';

export class Login extends Component {
  render() {

    const { navigate } = this.props.navigation;

    return(<View style={styles.container}>
      <ImageBackground source={require('./img/WelcomeBG.jpg')} style={styles.BGImage} >
        <View style={styles.content}>
          <Text style={styles.Logo} >Manage Your Content</Text>
          <View style={styles.inputContainer}>
          <TextInput underlineColorAndroid='transparent' style={styles.input } placeholder='username'>
          </TextInput>
          <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input } placeholder='Password'>
          </TextInput>
<TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
<Text style={styles.buttonText}   onPress={() =>this.props.navigation.navigate('Home', { name: 'Jane' })}
>
Login
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={this.SignUp} style={styles.buttonContainer}>
<Text style={styles.buttonText}>
SignUp
</Text>
</TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
    )}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  BGImage: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'

  },
  content: {
    alignItems: 'center'
  },
  Logo: {
    color: 'white',
    fontSize: 40
    ,
    fontStyle: 'italic',
    fontWeight:'bold',
    textShadowColor :'#252525',
    textShadowOffset:{width:2,height:2},
    textShadowRadius:15,
    marginBottom :20
  },
  inputContainer:{
    margin:20,
    marginBottom:0,
    padding:20,
    paddingBottom:10,
    alignSelf:'stretch',
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'rgba(255,255,255,0.2)'
  },
  input:{
    fontSize:16,
    height:40,
    padding:10,
    marginBottom:10,
    backgroundColor:'rgba(255,255,255,1)'



  },
  buttonContainer:{
    alignSelf:'stretch',
    margin:20,
    padding:20,
    backgroundColor:'yellow',
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'rgb(240,230,140)'


  }
  ,
  buttonText:{
    fontSize:16,
    fontWeight:'bold',
textAlign:'center'
  }
})