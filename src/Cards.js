import React, { Component } from 'react'
import { Select, Option } from 'react-native-select-lists';
import Draggable from 'react-native-draggable';
import { Button } from 'react-native-elements';
import ProvideProduct from './ProvideProduct'
import ProvideService from './ProvideService'
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform,
    TextInput
} from 'react-native';

import Successstory from './Successstory'
export default class Cards extends Component {
    constructor() {
        super()

    }

    state = {
        currentcomponent: 0,
        show:false
    }
    choosen = (text, value, e) => {
        console.log(value, text)
        this.setState({ currentcomponent: value })

    }
    render() {

        let SuccessStory = null
        let provideProduct = null
        let provideService = null
        console.log("current value", this.state.currentcomponent)
        if (this.state.currentcomponent == 1 || this.state.currentcomponent == 2 || this.state.currentcomponent == 2) {
            alert("koko")
            console.log("koko")
            SuccessStory = <Successstory navigation={this.props.navigation}/>
        }
      
        console.log("current value", this.state.currentcomponent)

        console.log(this.props.navigation)
        const slideAnimation = new SlideAnimation({
            slideFrom: 'bottom',
        });

        return (
            <View>
                {SuccessStory}
             
                <PopupDialog
                    height={330}
                    dialogTitle={<Text style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                    }}>Please choose one</Text>}
                    ref={(popupDialog) => {
                        this.popupDialog = popupDialog;
                        if(popupDialog)
                        {
                        this.popupDialog.show()
                        }

                    }}
                >

                    <Select caret="down" selectTextStyle={{ fontWeight: 'bold', fontSize: 16, }} listHeight={200} last={true} onSelect={(value, text) => {
                        this.choosen(text, value)

                    }} >
                        <Option value={1}>Success Story</Option>
                        <Option value={2}>Provide Service</Option>
                        <Option value={3}>Provide Product</Option>
                    </Select>

                    <Button title="OK"
                        onPress={() => {
                            this.popupDialog.dismiss();
                        }}
                        style={styles.bottomView}
                    />
                </PopupDialog>

            </View>
        )

    }
}
