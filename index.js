// import TabNavigator from './App';
import React , {Component} from 'react'
import { AppRegistry, StyleSheet,Text,View } from 'react-native';
import{Navigator}from 'react-native-deprecated-custom-components'
import {
  DrawerNavigator,
} from 'react-navigation';
import Config from './src/APPComponents';
import Login from './src/Login'
import ProfilePage from './src/UserProfile'
import Home from './src/Home'
import Cards from './src/Cards'
import Gallery from './src/GALLARY'
import Signup from './src/Signup'
import Calender from './src/Calender'
import Meteor from 'react-native-meteor'; Meteor.connect('ws://localhost:3000/websocket');
// export const AppNavigator = StackNavigator(Config.navigation);
const App = DrawerNavigator({
  Login: { screen: Login },
  Signup:{screen: Signup},
  Home: { screen: Home },
  profile :{screen:ProfilePage},
  Nuggets:{screen:Cards},
  Gallery:{screen:Gallery},
Calender:{screen:Calender}

});
export default App;

// export default class ContentLogin extends Component {
//    constructor(){
//      super()

//    }
//   render() {
   
//     return (
//   <Navigator initialRoute ={{id:'Login'}} renderScene ={this.navigatorRenderScene} />
//     )
//   }
//   navigatorRenderScene=(route,navigator)=>
//   {
//       _navigator = navigator
//       switch(route.id)
//       {
//           case'Login':
//           return (<Login navigator={navigator}/>)
//       }
//   }
// }


AppRegistry.registerComponent('MobileApp', () => App);
