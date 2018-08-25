import React, { Component } from 'react';
import { Button, Icon, Fab, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class FloatingButton extends Component {

  render() {
    return (  
      <View style={styles.fabView}>
        <Fab
          direction="up"
          containerStyle={{}}
          style={styles.color}
          position="bottomRight"
          onPress={() => Actions.textEditor()}>
          <Icon name="plus" type="MaterialCommunityIcons" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#628AFF',
  }
});
