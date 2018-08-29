import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './Reducers/store'
import Calender from './Calender'
import {TouchableWithoutFeedback}from 'react-native'
import { View } from 'native-base';
export default class CalenderWrap extends Component {
    render() {
        return (

<Calender/>

        )
    }
}
