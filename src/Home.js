import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SortableGrid from 'react-native-sortable-grid'
// import {FetchLocation} from './src/FetchLocation'
// import {FetchLocation} from './src/FetchLocation'
import ActionBar from 'react-native-action-bar';
import Tabs from 'react-native-tabs';
import Draggable from 'react-native-draggable';

// import{BestGrid} from './src/Gallery'
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {page:'second'};
  }
    render() {
      var self = this;
      return(
      <View style={styles.container}>

       <ActionBar
                    containerStyle={styles.bar}
                    title={'React-native-action-bar Example'}
                    rightText={'Hello'}
                    leftIconName={'menu'}
                    leftBadge={''}
                    onLeftPress={() => console.log('Left!')}
                    onTitlePress={() => console.log('Title!')}
                    rightIcons={[
                        {
                            name: 'star',
                            badge: '1',
                            onPress: () => console.log('Right Star !'),
                        },
                        {
                            name: 'phone',
                            badge: '1',
                            onPress: () => console.log('Right Phone !'),
                            isBadgeLeft: true,
                        },
                        {
                            name: 'plus',
                            onPress: () => console.log('Right Plus !'),
                        },
                        {
                            name: 'flag',
                            badge: '1',
                           onPress: () => console.log('Right Flag !'),
                        },
                    ]}
                />
               {/* <FetchLocation onGetLocation={this.getUserLocationHndeler}/> */}
               {/* <View>
               <BestGrid/>
</View> */}
      <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
            selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
          <Text name="first">Home</Text>
          <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Calender</Text>
          <Text name="third">Map</Text>
          <Text name="fourth" selectedStyle={{color:'green'}}>Nuggets</Text>
          <Text name="fifth">Product and services</Text>
      </Tabs>
        <Text style={styles.welcome}>
            Welcome to React Native
        </Text>
        <Text style={styles.instructions}>
            Selected page: {this.state.page}
        </Text>
<SortableGrid
   blockTransitionDuration      = { 400 }
   activeBlockCenteringDuration = { 200 }
   itemsPerRow                  = { 4 }
   dragActivationTreshold       = { 200 }
   onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
   onDragStart                  = { ()          => console.log("Some block is being dragged now!") } >

   {
     ['a', 'b', 'c'].map( (letter, index) =>

       <View key={index} onTap={() => console.log("Item number:", index, "was tapped!") }>
         <Text>{letter}</Text>
       </View>

     )
   }

 </SortableGrid>
 
        {/* <Draggable renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/>  */}
        <Draggable reverse={false} renderColor='red' renderShape='square' offsetX={0} offsetY={0} renderText='B'/>
        <Draggable/>
    
<View/>
        {/* <ActionBar
                    containerStyle={styles.bar}
                    title={'React-native-action-bar Example'}
                    rightText={'Hello'}
                    leftIconName={'menu'}
                    leftBadge={''}
                    onLeftPress={() => console.log('Left!')}
                    onTitlePress={() => console.log('Title!')}
                    rightIcons={[
                        {
                            name: 'star',
                            badge: '1',
                            onPress: () => console.log('Right Star !'),
                        },
                        {
                            name: 'phone',
                            badge: '1',
                            onPress: () => console.log('Right Phone !'),
                            isBadgeLeft: true,
                        },
                        {
                            name: 'plus',
                            onPress: () => console.log('Right Plus !'),
                        },
                        {
                            name: 'flag',
                            badge: '1',
                            onPress: () => console.log('Right Flag !'),
                        },
                    ]}
                />
               
               <FetchLocation onGetLocation={this.getUserLocationHndeler}/>

                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text> */}
    </View>

              )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCCC',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#3333',
        marginBottom: 5,
    },
});