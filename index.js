// import TabNavigator from './App';
import React , {Component} from 'react'
import { AppRegistry, StyleSheet,Text,View } from 'react-native';
import{Navigator}from 'react-native-deprecated-custom-components'
import {
  DrawerNavigator,
} from 'react-navigation';
import Config from './src/APPComponents';
import {Login} from './src/Login'
import ProfilePage from './src/UserProfile'
import Home from './src/Home'
import Cards from './src/Cards'
// export const AppNavigator = StackNavigator(Config.navigation);
const App = DrawerNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  profile :{screen:ProfilePage},
  Nuggets:{screen:Cards}

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
