import React, {Component} from 'react';
import firebase from 'firebase';
import {Button, Card , CardSection, Input } from './common';

class LoginForm extends Component {

  state = {email:'', password: ''};

  onButtonPress(){
    const {email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value = {this.state.text}
            onChangeText={text => this.setState({ 'email': text })}
            />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            value = {this.state.password}
            onChangeText={text => this.setState({ 'password': text })}
            />
        </CardSection>
        <CardSection/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>



      </Card>
    );
  }
};

export default LoginForm;
