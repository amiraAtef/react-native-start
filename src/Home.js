import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView, TouchableOpacity
} from 'react-native';
import { SearchBar } from 'react-native-elements'
import { Header } from 'react-native-elements'
import Friends from './Friends'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from './Menu'
import Posts from './Posts'
import Meteor from 'react-native-meteor';
import { Nuggets } from './Collection/index'
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MenuPressed: false,
      HomePressed: true
    }

  }



  render() {
    let NuggetList = Nuggets.find()
 
    const { navigate } = this.props.navigation;
    let sideList = null
    let homeList = null
    let notificationsList = null

    if (this.state.MenuPressed == true) {
      sideList = <Menu  navigation={this.props.navigation} />
    }
    if (this.state.HomePressed == true) {
      homeList = <Posts UserType={Meteor.user().profile.UserType} NuggetsData={NuggetList} navigation={this.props.navigation} />

    }

    return (
      <ScrollView>
        <SearchBar
          lightTheme
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Type Here...' />
        <Header style={{ backgroundColor: "#80ffaa" }}>
          <Icon name="home" size={30} color="#900" onPress={() => this.setState({ HomePressed: true, MenuPressed: false })} />
          <Icon name="people" size={30} color="#900" />
          <Icon name="notifications" size={30} color="#900" />
          <Icon name="menu" size={30} color="#900" onPress={() => this.setState({ MenuPressed: true, HomePressed: false })} />
        </Header>
        {sideList}
        {homeList}
      </ScrollView>
    )
  }
}