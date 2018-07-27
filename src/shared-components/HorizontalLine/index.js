import React from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';

const HorizontalLine = () => <View  style={styles.line}/>;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginTop: 5,
  }
});

export default HorizontalLine;
