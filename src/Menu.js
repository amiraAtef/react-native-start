import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';


export default class Menu extends Component {
    render() {
        const { navigate } = this.props.navigation;

        console.log(this.props.navigation)

        return (
            <ScrollView >
                <TouchableOpacity style={styles.mainContainer}  onPress={() =>{this.props.navigation.navigate('profile', { name: 'Jane' })}}  >
                    <Image style={styles.img} source={require('./img/profilePic.jpg')} />

                    <View >

                        <Text numberOfLines={1} style={styles.username} > Amira Mahmoud Atef   </Text>

                        <Text style={styles.text}>View your profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.section}  onPress={() =>{this.props.navigation.navigate('Nuggets', { name: 'Jane' })}}>
                    <Icon name="id-card" size={30} color="#900" />
                    <Text style={styles.text}>Nuggets</Text>
                </TouchableOpacity>
   <View style={styles.section}>
                    <Icon name="newspaper" size={30} color="#900" />
                    <Text style={styles.text}>Articals</Text>
                </View>
                <TouchableOpacity style={styles.section}>
                    <Icon name="calendar-alt" size={30} color="#900" onPress={() =>{this.props.navigation.navigate('Calender', { name: 'Jane' })}}/>
                    <Text style={styles.text}>Calender</Text>
                </TouchableOpacity>

 <TouchableOpacity style={styles.section}>
                    <Icon name="users" size={30} color="#900" />
                    <Text style={styles.text}>Groups</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.section} onPress={

()=>{Meteor.logout()
this.props.navigation.navigate('Login', { name: 'Jane' })}
}>
                    <Icon name="sign-out-alt" size={30} color="#900"  />
                    <Text style={styles.text}>Sign out</Text>
                </TouchableOpacity>


            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start', alignItems: 'flex-start',
        borderBottomWidth: 1
    },
    img: {
        borderRadius: 100,
        width: 70,
        height: 70

    },
    username: {
        fontWeight: 'bold',
        fontSize: 26,

    },
    text: {
        fontSize: 22,
        flexDirection: 'row',
        paddingLeft: 30,

    },
    section:{
        flex: 1,
        flexDirection: 'row',
    padding:10   }

})