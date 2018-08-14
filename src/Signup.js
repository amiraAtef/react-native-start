import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';


import GenerateForm from 'react-native-form-builder';
import Meteor, { withTracker, MeteorListView ,Accounts } from 'react-native-meteor';
Meteor.connect('ws://localhost:3000//websocket')

const styles = {
    wrapper: {
      flex: 1,
      marginTop: 150,
    },
    submitButton: {
      paddingHorizontal: 10,
      paddingTop: 20,
    },
  };


  const fields = [
    {
      type: 'text',
      name: 'user_name',
      required: true,
      icon: 'ios-person',
      label: 'Username',
    },
    {
      type: 'password',
      name: 'password',
      icon: 'ios-lock',
      required: true,
      label: 'Password',
    },
    {
        type: 'picker',
        name: 'userType',
        icon: 'ios-person',
        options: ['Thripest', 'Customer'],
        defaultValue: 'Customer',
        mode: 'dialog',
        required: true,
        label: 'Are you Thripest or Customer',
      },
    {
      type: 'picker',
      name: 'country',
      mode: 'dialog',
      label: 'Select Country',
      defaultValue: 'INDIA',
      options: ['US', 'INDIA', 'UK', 'CHINA', 'FRANCE','EGYPT'],
    },
  ];
  class Signup extends Component {
    signup() {
        let Newuser={
            user_name:"",
            password:"",
            country:"",
            userType:""
        }
        Newuser = this.formGenerator.getValues();
     let email= Newuser.user_name
     let password = Newuser.password
     let Country = Newuser.country
      let UserType = Newuser.userType
      if(this.props.currentUser)
      {
      this.props.navigation.navigate('Home',Newuser)
      }
  console.log(Accounts)
      Accounts.createUser({email, password,Country,UserType},(err) => {
        if (err) {
   console.log( err.reason);
        }
      })
      this.props.navigation.navigate('Home',Newuser)

    }

    render() {


      return (
        <View style={styles.wrapper}>
          <View>
            <GenerateForm
              ref={(c) => {
                this.formGenerator = c;
              }}
              fields={fields}
            />
          </View>
          <View style={styles.submitButton}>
            <Button block onPress={() => this.signup()}>
              <Text>Submit</Text>
            </Button>
          </View>
        </View>
      );
    }
  }

  export default withTracker(props=>{//---------->changed 
    const handel = Meteor.subscribe('myuser')
    return {
      currentUser: Meteor.user(),
        listLoading: !handel.ready(),
    }
  })(Signup)