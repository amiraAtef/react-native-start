import React, { Component } from 'react'
import { View , Text , ScrollView , StyleSheet} from 'react-native'


export default class Bar extends Component {
  render() {
    return (
<View style={styles.bar}>
<View style={[styles.barItem, styles.barseperate] } >
<Text style={styles.barTop} > 12 </Text>
<Text style={styles.barBottom} > folowing </Text>
</View>
<View style={styles.barItem} >
<Text style={styles.barTop} > 12 </Text>
<Text style={styles.barBottom} > folowing </Text>
</View>

</View>

    )

  }
}
const styles = StyleSheet.create( {

bar:{
    borderTopColor:"#fff",
    borderTopWidth:4,
    flexDirection:'row',
    backgroundColor:"#ec2e4a"
},
barseperate:{
    borderRightWidth:4,

},
barItem:{
flex:1,
padding:18,
alignItems:'center'
},
barTop:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    fontStyle:'italic'

},
barBottom:{
    color:"#000",
    fontSize:14,
    fontWeight:'bold',

}


})