// import TabNavigator from './App';
import React , {Component} from 'react'
import { AppRegistry, StyleSheet,Text,View } from 'react-native';
import{Navigator}from 'react-native-deprecated-custom-components'
// import { StackNavigator } from 'react-navigation';
import Config from './src/APPComponents';
import {Login} from './src/Login'
// export const AppNavigator = StackNavigator(Config.navigation);

export default class ContentLogin extends Component {
   constructor(){
     super()

   }
  render() {
   
    return (
  <Navigator initialRoute ={{id:'Login'}} renderScene ={this.navigatorRenderScene} />
    )
  }
  navigatorRenderScene=(route,navigator)=>
  {
      _navigator = navigator
      switch(route.id)
      {
          case'Login':
          return (<Login navigator={navigator}/>)
      }
  }
}


AppRegistry.registerComponent('MobileApp', () => Config);
