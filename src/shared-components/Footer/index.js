import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => Actions.userProfile()}>
            <Icon name="people" type='SimpleLineIcons' />
          </Button>
          <Button onPress={() => Actions.home()}>
            <Icon name="home" type='SimpleLineIcons' />
          </Button>
          <Button>
            <Icon name="bell" type='SimpleLineIcons' />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}