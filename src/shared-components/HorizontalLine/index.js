import React from 'react';
import { View } from 'native-base';

const HorizontalLine = () => <View  style={styles.line}/>;

const styles = {
  line: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    marginLeft: -80,
    marginRight: -80,
    marginTop: 20,
  }
};

export default HorizontalLine;
