import React from 'react'
import { Dimensions, StyleSheet,TouchableHighlight , View, TouchableNativeFeedback , TouchableOpacity , ImageBackground, ScrollView, Text, TextInput, Modal, label } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import moment from 'moment';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/FontAwesome5'
import DoubleClick from 'react-native-double-click';
import Meteor, { withTracker, MeteorListView , } from 'react-native-meteor';

import { connect } from 'react-redux';


import DateTimePicker from 'react-native-modal-datetime-picker';

import EventCalendar from 'react-native-events-calendar'

let { width } = Dimensions.get('window')

 class Calender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Notes: "",
      Title: "",
      EventDateFormateStart: '',
      EventDateFormateEnd: '',
      status: '',

      modalVisible:false,
      start: '',
      StartTime: "",
      End: '',
      isDateTimePickerVisible: false,
      events: [
        { start: '2018-08-22 00:30:00', end: '2018-08-22 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2018-08-23 01:30:00', end: '2017-08-23 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        { start: '2018-08-24 04:10:00', end: '2017-081-24 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
      ],
      lastPress:0
    };
  }
componentWillReceiveProps()
{
  // this.setState(prevState => ({
  //   events: [...prevState.events, this.props.app.Eventadded]
  //  }))
  }
  _eventTapped(event) {
    alert(JSON.stringify(event))
  }

//   componentWillReceiveProps()
//   {
//     console.log("Calender", this.props.app.clicked)
//   if( this.props.app.clicked)
//   {

//     this.setModalVisible(true)
//   }
// }
  render() {
  console.log(",,,,,",this.state.modalVisible)
    var currentDate = moment().format("YYYY-MM-DD");
    var EventdateFormate = ""
    _handleDatePicked = (date) => {
      EventdateFormate = moment(date).format('MM-DD-YYYY HH:mm:ss')
      var pickedTimeFormate = moment(EventdateFormate).format("hh:mm a")
      var pickedDateFormate = moment(EventdateFormate).format("MM-DD-YYYY")


      console.log('A EventdateFormate: ', EventdateFormate);
      console.log('A pickedDateFormate: ', pickedDateFormate);
      console.log('A pickedTimeFormate: ', pickedTimeFormate);

      if (this.state.start) {
        this.setState({ End: DateFormate })
        this.setState({ EventDateFormateEnd: EventdateFormate })
        console.log("EventEnd", EventDateFormateEnd)
      }
      else {
        this.setState({ start: DateFormate })
        this.setState({ EventDateFormateStart: EventdateFormate })
        console.log("EventEnd", EventDateFormateStart)

      }
      this._hideDateTimePicker();

    }
    return (
<TouchableNativeFeedback>

        <EventCalendar
        eventTapped={this._eventTapped.bind(this)}
          events={this.state.events}
          width={width}
          numberOfDay={60}
          initDate={currentDate}
          scrollToFirst
        />





</TouchableNativeFeedback>

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
    isDbClicked: (DBclick) => dispatcher({ type: 'dbClicked', value: DBclick }),
}}

export default connect(mapStateToProps, mapDispatchersToProps)(Calender);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Logo: {
    color: 'white',
    fontSize: 40
    ,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    marginBottom: 20
  },

  inputContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 300,
    height: 40,
    padding: 10,
    fontSize: 20
  },
  Notes: {
    fontSize: 22,
    padding: 10,
    width: 300,

    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',


  },
  section: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  }, buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgb(240,230,140)'


  }
  ,
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }

})