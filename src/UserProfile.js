import React, { Component } from 'react'
import { View , Text , ScrollView , StyleSheet} from 'react-native'
import Bar from './Bar'
import Header from './Header'
import PhotoGrid from './PhotoGrid'
export default class ProfilePage extends Component {
  render() {
    return (
        <View style={styles.container}>
        <ScrollView>
<Header/>
<Bar/>
<View>
<PhotoGrid/>
</View>
</ScrollView>
</View>
    )
  }
}
const styles = StyleSheet.create( {

container:{
    flex:1,
    backgroundColor:"#000"
}

})