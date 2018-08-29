import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground, TextInput, TouchableOpacity, AsyncStorage,
} from 'react-native';
// import Jimp from 'jimp/es';

// Jimp.read('./img/2.jpg')
//   .then(image => {
//     // do stuff with the image

//     console.log(image)
//   })
//   .catch(err => {
//     console.log(err)
//     // handle an exception
//   });
// var file = './img.2.jpg'
// var reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onload = function () {
//   console.log("loadedImgag",reader.result);
// };
import RNFS from 'react-native-fs';

import Meteor, { withTracker, MeteorListView , } from 'react-native-meteor';
Meteor.connect('ws://localhost:3000//websocket');
 class Login extends Component {


  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: ""
    }
  }

  login = () => {
    let email = this.state.email
    let password = this.state.password

    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        console.log(err)
      }
    });
    let currentUser = Meteor.subscribe('myuser');
    console.log("currentUser", Meteor.user())
console.log(this.props.currentUser)
    if(this.props.currentUser)
    {
      this.props.navigation.navigate('Home', { name: 'Jane' })

    }


  }


  render() {
    // url='./img/2.jpg'
    //   const filename = url.split('/').pop();
    //   // feel free to change main path according to your requirements
    // var path=`${RNFS.DocumentDirectoryPath}/${filename}`;
    // console.log("lolo",path)
    // // RNFS.DocumentDirectoryPath='https://drive.google.com/open?id=1sBaVZXdtYwzmeyIUfNrbTtQ8Q67OsBNW'
    // // console.log("path",RNFS.DocumentDirectoryPath)
    // RNFS.readDir('https://drive.google.com/open?id=1sBaVZXdtYwzmeyIUfNrbTtQ8Q67OsBNW') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    //   .then((result) => {
    //     console.log('GOT RESULT', result);
     
    //     // stat the first file
    //     return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //   })
    //   .then((statResult) => {
    //     if (statResult[0].isFile()) {
    //       // if we have a file, read it
    //       return RNFS.readFile(statResult[1], 'utf8');
    //     }
     
    //     return 'no file';
    //   })
    //   .then((contents) => {
    //     // log the file contents
    //     console.log(contents);
    //   })
    //   .catch((err) => {
    //     console.log(err.message, err.code);
    //   });

    const { navigate } = this.props.navigation;

    return (<View style={styles.container}>
      <ImageBackground source={require('./img/WelcomeBG.jpg')} style={styles.BGImage} >
        <View style={styles.content}>
          <Text style={styles.Logo} >Manage Your Content</Text>
          <View style={styles.inputContainer}>
            <TextInput underlineColorAndroid='transparent'
              onChangeText={(value) => this.setState({ email: value })}

              style={styles.input} placeholder='email'>
            </TextInput>
            <TextInput
  ref= {(el) => { this.password = el; }}

              underlineColorAndroid='transparent' style={styles.input}
              onChangeText={(password) => this.setState({password})}
secureTextEntry={true}
              value={this.state.password}
              placeholder='Password'
            >
            </TextInput>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}

                onPress={this.login}
              >
                Login
</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('Signup', { name: 'Jane' })} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                SignUp
</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
    )
  }
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
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    marginBottom: 20
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'



  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgb(240,230,140)'


  }
  ,
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
export default withTracker(props=>{//---------->changed 
  const handel = Meteor.subscribe('myuser')
  return {
    currentUser: Meteor.user(),
      listLoading: !handel.ready(),
  }
})(Login)