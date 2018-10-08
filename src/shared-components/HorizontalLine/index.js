import React from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';

const HorizontalLine = ({lineStyle}) => <View style={[styles.line, lineStyle]}/>;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginTop: 5,
  }
});

export default HorizontalLine;
