import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => Actions.home()}>
            <Icon name="home" type='SimpleLineIcons' />
          </Button>
          <Button onPress={() => Actions.search()}>
            <Icon name="magnifier" type='SimpleLineIcons' />
          </Button>
          <Button badge>
            <Badge><Text>2</Text></Badge>
            <Icon name="bell" type='SimpleLineIcons' />
          </Button>
          <Button onPress={() => Actions.userProfile()}>
            <Icon name="people" type='SimpleLineIcons' />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
