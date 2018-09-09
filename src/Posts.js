import React, { Component } from 'react'
import { Card, ListItem, Button, Rating } from 'react-native-elements'
import Meteor, { withTracker, MeteorListView, } from 'react-native-meteor';
import { Nuggets } from './Collection/index'

import { connect } from 'react-redux';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const users = Meteor.collection('users')
class Posts extends Component {
  render() {
    console.log(Nuggets)
    const Nuggetslist = Nuggets.find()

    let Title = ""
    let ICON = ""
    if (Meteor.user().UserType == "Customer") {
      Title = 'Book NOW'
      ICON = 'schedule'
    }
    else {
      Title = 'Endorse'
      ICON = 'verified-user'
    }
  



let Nuggets = Nuggetslist.map((Nugget) => {
  console.log("Nuggetelement", Nugget)
  let Provider = users.findOne({ _id: Nugget.userID })
  return (<Card
    title={Nugget.Type}
    image={Nugget.URL.uri}>
    <Text style={{ color: 'blue' }} > {Provider.profile.UserName}
    </Text>
    <Text style={{ marginBottom: 10 }}>
      {
        Nugget.Text
      }  </Text>
    <Button
      icon={{ name: ICON }}
      backgroundColor='#03A9F4'
      fontFamily='Lato'
      buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
      title={Title}
      onPress={() => {
        if (Title == "Book NOW") {
          this.props.SetProvider(Provider._id)
          this.props.navigation.navigate('Calender')
        }
      }
      }
    />
    <Button
      icon={{ name: ICON }}
      backgroundColor='#03A9F4'
      fontFamily='Lato'
      buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
      title="ShowDetails"
      onPress={() => { this.props.navigation.navigate('Details',Nugget) }}
    />
  </Card>
  )

})



return (
  <ScrollView>
    <View>
      {Nuggets}
    </View>
  </ScrollView>
)
}}



styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,

  }
})
const mapStateToProps = (state) => {
  return {

    ...state

  }
}
const mapDispatchersToProps = (dispatcher) => {
  return {
    SetProvider: (provider) => dispatcher({ type: 'SelectedProvider', value: provider }),
  }
}
export default connect(mapStateToProps, mapDispatchersToProps)(Posts)
