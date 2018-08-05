import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Menu extends Component {
    render() {
        return (
            <ScrollView >
                <View style={styles.mainContainer}>
                    <Image style={styles.img} source={require('./img/profilePic.jpg')} />

                    <View>

                        <Text numberOfLines={1} style={styles.username}> Amira Mahmoud Atef   </Text>

                        <Text style={styles.text}>View your profile</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Icon name="id-card" size={30} color="#900" />
                    <Text style={styles.text}>Nuggets</Text>
                </View>
   <View style={styles.section}>
                    <Icon name="users" size={30} color="#900" />
                    <Text style={styles.text}>Groups</Text>
                </View>



                <View style={styles.section}>
                    <Icon name="sign-out" size={30} color="#900" />
                    <Text style={styles.text}>Sign out</Text>
                </View>


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