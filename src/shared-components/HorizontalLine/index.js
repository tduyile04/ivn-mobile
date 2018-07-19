import React from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';

const HorizontalLine = () => <View  style={styles.line}/>;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    marginLeft: -100,
    marginRight: -100,
    marginTop: 20,
  }
});

export default HorizontalLine;
