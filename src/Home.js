import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
ScrollView
} from 'react-native';
import {Header} from 'react-native-elements'
import Friends from './Friends'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from './Menu'
export default class Home extends Component {

  constructor(props){
    super(props);
this.state={
    MenuPressed:false
}


  }
    render() {
        let sideList=null
        if(this.state.MenuPressed==true)
        {
            sideList=<Menu/>
        }
        return(
            <ScrollView>
                <Header>
 <Icon name="home" size={30} color="#900" />
<Icon name="people" size={30} color="#900" />
<Icon name="notifications" size={30} color="#900" />
<Icon name="menu" size={30} color="#900"  onPress={()=>this.setState({MenuPressed:true})}/>
</Header>
{sideList}
      </ScrollView>
        )}
}

