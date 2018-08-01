import React, { Component } from 'react'
import { View , Text , ScrollView , StyleSheet , Image, Dimensions} from 'react-native'
export default class Posts extends Component {
    state={

        Posts:[
          require('./img/2.jpg'),
          require('./img/3.jpg'),
          require('./img/4.jpg'),
        ]
    }
  render() {
    let images = this.state.Posts.map((val,key)=>{
        
        return  (
        <View>
        <Image  style={styles.photo} source={val}/>
        </View>
        )
    })

    return (
<ScrollView>
<View style={styles.photoGrid}>

    <View style={styles.photoWrap}>
    <ScrollView>

{/* <Image  source={require('./img/2.jpg')}/> */}
{images}
</ScrollView>

    </View>
</View>

</ScrollView>
    )
  }
}
const styles = StyleSheet.create( {

    photoGrid:{
    flexDirection:'row',
    flexWrap:"wrap",
},

photoWrap:{
height:120,
width:'100%',

},
photo:{
flex:1,
alignSelf:'center',
resizeMode:'cover'
}
})