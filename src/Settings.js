import React, { Component } from 'react'
import {SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker} from 'react-native-settings-components';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView
  } from 'react-native';
export default class Settings extends Component {

    constructor() {
        super();
        this.state = {
          username: '',
          allowPushNotifications: false,
          gender: '',
        };
      }
     
      render() {
 return(
     <View>
        {/* <ScrollView style={{flex: 1, backgroundColor: (Platform.OS === 'android') ? colors.iosSettingsBackground : colors.white}}>
     
            <SettingsCategoryHeader title={'My Account'} textStyle={(Platform.OS === 'android') ? {color: colors.monza} : null}/>
     
            <SettingsDividerLong android={false}/>
     
            <SettingsEditText
                title="Username"
                dialogDescription={'Enter your username.'}
                valuePlaceholder="..."
                negativeButtonTitle={'Cancel'}
                buttonRightTitle={'Save'}
                onSaveValue={(value) => {
                    console.log('username:', value);
                    this.setState({
                        username: value
                    });
                }}
                value={this.state.username}
                dialogAndroidProps={{
                    widgetColor: colors.monza,
                    positiveColor: colors.monza,
                    negativeColor: colors.monza,
                }}
            />
            <SettingsDividerShort/>
            <Text>amira</Text>

            <SettingsPicker
                title="Gender"
                dialogDescription={'Choose your gender.'}
                possibleValues={[
                    {label: '...', value: ''},
                    {label: 'male', value: 'male'},
                    {label: 'female', value: 'female'},
                    {label: 'other', value: 'other'}
                ]}
                negativeButtonTitle={'Cancel'}
                // buttonRightTitle={'Save'}
                positiveButtonTitle ={'Save'}
                onSaveValue={value => {
                    console.log('gender:', value);
                    this.setState({
                        gender: value
                    });
                }}
                value={this.state.gender}
                styleModalButtonsText={{color: colors.monza}}
            />
     
     
            <SettingsSwitch
                title={'Allow Push Notifications'}
                onSaveValue={(value) => {
                    console.log('allow push notifications:', value);
                    this.setState({
                        allowPushNotifications: value
                    });
                }}
                value={this.state.allowPushNotifications}
                thumbTintColor={(this.state.allowPushNotifications) ? colors.switchEnabled : colors.switchDisabled}
            />
     
     
          </ScrollView> */}


          <Text>koko</Text>
          </View>
 )
        }
     
    }
     
    const colors = {
      iosSettingsBackground: 'rgb(235,235,241)',
      white: '#FFFFFF',
      monza: '#C70039',
      switchEnabled: (Platform.OS === 'android') ? '#C70039' : null,
      switchDisabled: (Platform.OS === 'android') ? '#efeff3' : null,
      switchOnTintColor: (Platform.OS === 'android') ? 'rgba(199, 0, 57, 0.6)' : null,
      blueGem: '#27139A',
    };