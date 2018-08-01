import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {TabNavigator}from 'react-navigation'
// import SortableGrid from 'react-native-sortable-grid'
// import {FetchLocation} from './src/FetchLocation'
import {FetchLocation} from './src/FetchLocation'
// import ActionBar from 'react-native-action-bar';
// import Tabs from 'react-native-tabs';
import Draggable from 'react-native-draggable';
import {Calender} from './src/Calender'
import Nuggets from './src/Nuggets'
import {Login} from './src/Login'
import  Settings from './src/Settings'
import ProfilePage from './src/UserProfile'
// // import{BestGrid} from './src/Gallery'
// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//       'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//       'Shake or press menu button for dev menu',
// });

// export default class Example extends Component {

//   constructor(props){
//     super(props);
//     this.state = {page:'second'};
//   }
//     render() {
//       var self = this;
//       return(
//       <View style={styles.container}>
      
//     </View>

//               )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#F5FCCC',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#3333',
//         marginBottom: 5,
//     },
// });

class Homescreen extends React.Component{
    render(){
        return(
            <View>
<Text>Home</Text>
                </View>
        )
    }
}
class Settingsscreen extends React.Component{
    render(){
        return(
            <View>
<Text>Settings</Text>
                </View>
        )
    }
}

export default TabNavigator({
    Login:{screen:Login},
    ProfilePage:{screen:ProfilePage},
    Calender:{screen:Calender},Nuggets:{screen:Nuggets}


})