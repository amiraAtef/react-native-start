import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
ScrollView
} from 'react-native';
import { SearchBar } from 'react-native-elements'

import {Header} from 'react-native-elements'
import Friends from './Friends'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from './Menu'
import Posts from './Posts'
export default class Home extends Component {

  constructor(props){
    super(props);
this.state={
    MenuPressed:false,
    HomePressed:true
}


  }
    render() {
        let sideList=null
        let homeList=null
        let notificationsList=null

        if(this.state.MenuPressed==true)
        {
            sideList=<Menu/>
        }
        if(this.state.HomePressed==true)
        {
             homeList=<Posts/>

        }

        return(
            <ScrollView>
                <SearchBar
  lightTheme
//   onChangeText={someMethod}
//   onClearText={someMethod}
  icon={{ type: 'font-awesome', name: 'search' }}
  placeholder='Type Here...' />
                <Header>
 <Icon name="home" size={30} color="#900"   onPress={()=>this.setState({HomePressed:true,MenuPressed:false})}/>
<Icon name="people" size={30} color="#900" />
<Icon name="notifications" size={30} color="#900" />
<Icon name="menu" size={30} color="#900"  onPress={()=>this.setState({MenuPressed:true,HomePressed:false})}/>
</Header>
{sideList}
{homeList}
      </ScrollView>
        )}
}

