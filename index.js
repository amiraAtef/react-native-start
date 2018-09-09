// import TabNavigator from './App';
import React , {Component} from 'react'
import { AppRegistry, StyleSheet,Text,View } from 'react-native';
import{Navigator}from 'react-native-deprecated-custom-components'
import {
  DrawerNavigator,DrawerItems
} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './src/Reducers/store'
import Config from './src/APPComponents';
import Login from './src/Login'
import ProfilePage from './src/UserProfile'
import Home from './src/Home'
import Cards from './src/Cards'
import Gallery from './src/GALLARY'
import Signup from './src/Signup'
import Calender from './src/Calender'
import Details from './src/ShowDetails'
import Meteor from 'react-native-meteor';
 Meteor.connect('ws://localhost:3000/websocket');

// export const AppNavigator = StackNavigator(Config.navigation);
const App = DrawerNavigator({
  Login: { screen: Login },
  Signup:{screen: Signup},
  Home: { screen: Home },
  profile :{screen:ProfilePage},
  Nuggets:{screen:Cards},
  Gallery:{screen:Gallery},
Calender:{screen:Calender},
Details:{screen:Details}

},
{
contentComponent:customDrawerComponent});

const customDrawerComponent=(this.props)=(

<DrawerItems {...this.props} />
)
export default class index extends Component {
  render() {
    return (
<Provider store={store}>
<App/>
        </Provider>
    )
  }
}


AppRegistry.registerComponent('MobileApp', () => index );
