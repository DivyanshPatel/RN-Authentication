import React , {Component } from 'react';
import {View, Text } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';
import config from './components/config';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp(config);
  }


  render(){
    return (
      <View>
      <Header headerText='Authentication!!'/>
      <LoginForm />
    </View>
    );
  }
};

export default App;
