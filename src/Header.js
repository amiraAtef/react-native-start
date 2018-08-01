import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native'

export default class Userprofile extends Component {
    render() {
        return (
            <ImageBackground style={styles.headerBackground} source={require('./img/ProfileBG.jpg')}   >
                <View style={styles.header} >
                    <View style={styles.profilepicWrap}>
                        <Image style={styles.profilepic} source={require('./img/profilePic.jpg')} />

                    </View>

                    <Text style={styles.name}  > Amira Atef</Text>
                    <Text style={styles.pos}  > MERN Developer </Text>

                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        alignItems: 'stretch',

    },
    profilepicWrap: {
        width: 150,
        height: 200,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 14,

    },

    header: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: 'rgba(0,0,0,0.5)',
        padding:20
    }, name: {

        marginTop: 10,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'

    },
    profilepic: {
        flex: 1,
        alignSelf: 'center',
        borderColor: '#fff',
        height: 200,
        width: 150,
        borderWidth: 4,
        borderRadius: 75,
        resizeMode: 'cover'
    },

    pos: {
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic'



    },
})