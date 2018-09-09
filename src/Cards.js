import React, { Component } from 'react'
import { Select, Option } from 'react-native-select-lists';
import Draggable from 'react-native-draggable';
import { Button } from 'react-native-elements';
import ProvideProduct from './ProvideProduct'
import ProvideService from './ProvideService'
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { connect } from 'react-redux';

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
class Cards extends Component {
    constructor() {
        super()

    }

    state = {
        currentcomponent: 0,
        show: false
    }
    choosen = (text, value, e) => {
        console.log(value, text)
        // this.setState({ currentcomponent: value })
        this.props.SetCurrentCmp(text)
        this.props.SetNuggetType(text)

    }
    render() {

        let SuccessStory = null
        let provideProduct = null
        let provideService = null
        console.log("props", this.props)

        console.log("current value", this.props.app.currentcomponent)
        if (this.props.app.currentcomponent =='Success Story' ) {

            SuccessStory = <Successstory navigation={this.props.navigation} Nuggettype={this.props.app.currentcomponent} />
            provideService=null
            provideProduct = null

        }
        if (this.props.app.currentcomponent =='Provide Service') {
            provideService = <ProvideService  navigation={this.props.navigation} Nuggettype={this.props.app.currentcomponent}/>
            SuccessStory = null
            provideProduct=null


        }
        if (this.props.app.currentcomponent =='Provide Product')
        {
            provideProduct = <ProvideProduct navigation={this.props.navigation} Nuggettype={this.props.app.currentcomponent}/>
            provideService=null
            SuccessStory = null

        }
        const slideAnimation = new SlideAnimation({
            slideFrom: 'bottom',
        });

        return (
            <View>
   {SuccessStory}
                {provideProduct}
                {provideService}
                
                <PopupDialog
                    height={330}
                    dialogTitle={<Text style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                    }}>Please choose one</Text>}
                    ref={(popupDialog) => {
                        this.popupDialog = popupDialog;
                        if (popupDialog) {
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
const mapStateToProps = (state) => {
    return {

        ...state

    }
}
const mapDispatchersToProps = (dispatcher) => {
    return {
        SetImage: (img) => dispatcher({ type: 'ChooseImage', value: img }),
        SetNuggetType: (Nug) => dispatcher({ type: 'NuggetType', value: Nug }),
        SetCurrentCmp:(cmp)=>dispatcher({type:'ChangeCurrentCmp',value:cmp})
    }
}
export default connect(mapStateToProps, mapDispatchersToProps)(Cards);