import React, { Component } from 'react';
import { Button, Icon, Fab, View } from 'native-base';
import { StyleSheet } from 'react-native';

export default class FloatingButton extends Component {
 
  state = {
    active: false
  }

  render() {
    return (  
      <View style={styles.fabView}>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={styles.color}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="plus" type="MaterialCommunityIcons" />
          <Button style={styles.color}>
            <Icon name="comment-question-outline" type="MaterialCommunityIcons" />
          </Button>
          <Button style={styles.color}>
            <Icon name="edit" type="FontAwesome" />
          </Button>
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fabView: {
    position: 'relative', 
    bottom:  50
  },
  color: {
    backgroundColor: '#628AFF',
  }
});
