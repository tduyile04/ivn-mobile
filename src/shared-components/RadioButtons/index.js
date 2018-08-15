import React, { Component } from 'react';
import { View, Text, Icon } from 'native-base';

const RadioButtons = ({ selected, textValueArray, viewStyle, textStyle, iconStyle, handlePress }) => {
  return (
    <View style={viewStyle}>
      {textValueArray.map((textValue, index) => {
        return (
          <View key={index}>
            <Icon 
              active
              name={`md-radio-button-${selected[index] ? 'on' : 'off'}`} 
              type='Ionicons' 
              style={iconStyle}
              onPress={() => handlePress(index)}
            />
            <Text 
              style={textStyle} 
              onPress={() => handlePress(index)}>{textValue}</Text>
          </View>
        )})}
    </View>
  )
}

export default RadioButtons;



