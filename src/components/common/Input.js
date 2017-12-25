import React from 'react';
import {TextInput, View, Text } from 'react-native';

const Input = (props) => {

  const {labelStyle, textStyle, containerStyle} = styles;

  return(
    <View style={containerStyle}>

      <Text style={labelStyle}>{props.label}</Text>

      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        autoCorrect={false}
        style={textStyle}
        value={props.value}
        onChangeText={props.onChangeText}
      />


    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textStyle: {
    fontSize: 18,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
