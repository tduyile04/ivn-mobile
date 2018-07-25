import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';

export default class HeaderIcon extends Component {
  render() {
    return (
      <Header style={styles.header} hasTabs>
        <Left>
          <Button transparent>
            <Icon name='menu' type='MaterialCommunityIcons' style={{color: '#3F3F3F', marginLeft: 10 }}/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Timeline</Title>
        </Body>
        <Right>
        </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth:0
  },
  title: {
    color: '#3F3F3F',
    // fontFamily: 'raleway-regular',
  }
});