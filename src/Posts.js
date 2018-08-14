import React, { Component } from 'react'
import { Card, ListItem, Button , Rating  } from 'react-native-elements'
import Meteor from 'react-native-meteor'
import {
    Platform,
    StyleSheet,
    Text,
    View,
  ScrollView
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome'

  
export default class Posts extends Component {

  render() {
    let Title=""
    let ICON=""
    const user= Meteor.user()
    console.log("USER",user)
if (user.profile.UserType=="Customer")
{
Title='Book NOW'
ICON='schedule'
}
  else{
    Title='Endorse'
    ICON='verified-user'

    
  }



    return (
        <ScrollView>
            <View>
        <Card
        title='Service'
        image={require('./img/1.jpg')}>
        <Text style={{marginBottom: 10}}>
        I trid this medicine i found it fin with my skin 
        </Text>
        <Button
          icon={{name: ICON}}
          backgroundColor='#03A9F4'
          fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title={Title}
          onPress={() =>{this.props.navigation.navigate('Calender', { name: 'Jane' })}}
            />
      </Card>
      {/* <Rating
  showRating
  type="star"
  fractions={1}
  startingValue={3.6}
  readonly
  imageSize={20}
  onFinishRating={this.ratingCompleted}
/> */}
{/* <View style={{flex:1 , flexDirection:'row', justifyContent:'flex-end' , alignItems:'flex-end'}} >
<View style={{padding:10}}>
    <Text style={styles.text}>Like</Text>
<Icon name="gratipay" size={30} />
</View> 
<View style={{padding:10}}>
    <Text style={styles.text}>Share</Text>
<Icon name="share" size={30}  /> 
</View> 

</View> */}
      </View>



<View>
      <Card
      title='Product'
      image={require('./img/2.jpg')}>
      <Text style={{marginBottom: 10}}>
Try this       </Text>
      <Button
        icon={{name: 'add-shopping-cart'}}
        backgroundColor='#03A9F4'
        fontFamily='Lato'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Buy NOW' />
    <Rating
  showRating
  type="star"
  fractions={1}
  startingValue={3.6}
  readonly
  imageSize={20}
  onFinishRating={this.ratingCompleted}
/>

    </Card>

{/* <View style={{flex:1 , flexDirection:'row', justifyContent:'flex-end' , alignItems:'flex-end'}} >
<View style={{padding:10}}>
<Icon name="gratipay" size={30} />
<Text style={styles.text}>Like</Text>

</View> 
<View style={{padding:10}}>
<Icon name="share" size={30}  /> 
<Text style={styles.text}>Share</Text>

</View> 

</View> */}

      </View>

      <View>
    <Card
    
    title='Sucess Story'
    image={require('./img/3.jpg')}>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      The idea with React Native Elements is more about component structure than actual design.
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={{name: 'person'}}
      backgroundColor='#03A9F4'
      fontFamily='Lato'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      
     />
       <Rating
  showRating
  type="star"
  fractions={1}
  startingValue={3.6}
  readonly
  imageSize={20}
  onFinishRating={this.ratingCompleted}
/>
  </Card>

{/* // <View style={{flex:1 , flexDirection:'row', justifyContent:'flex-end' , alignItems:'flex-end'}} >
// <View style={{padding:10}}>
// <Icon name="gratipay" size={30} />
// <Text style={styles.text}>Like</Text>

// </View> 
// <View style={{padding:10}}>
// <Icon name="share" size={30}  /> 
// <Text style={styles.text}>Share</Text>

// </View> 

// </View> */}
      </View>
      <View>
  <Card
    title='HELLO WORLD'
    image={require('./img/4.jpg')}>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={{name: 'code'}}
      backgroundColor='#03A9F4'
      fontFamily='Lato'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />

  </Card>
  <Rating
  showRating
  type="star"
  fractions={1}
  startingValue={3.6}
  readonly
  imageSize={20}
  onFinishRating={this.ratingCompleted}
/>
<View style={{flex:1 , flexDirection:'row', justifyContent:'flex-end' , alignItems:'flex-end'}} >
<View style={{padding:10}}>
<Icon name="gratipay" size={30} />
<Text style={styles.text}>Like</Text>

</View> 
<View style={{padding:10}}>
<Icon name="share" size={30}  /> 
<Text style={styles.text}>Share</Text>

</View> 

</View>
      </View>
  </ScrollView>
    )
  }
}


styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 20,

    }
})
