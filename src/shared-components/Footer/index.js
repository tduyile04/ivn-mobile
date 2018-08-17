import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';

import { VIEWS } from '../../components/Home/constants';

const FooterTabs = ({setActive}) => 
  <Footer>
    <FooterTab>
      <Button onPress={() => setActive(VIEWS.feed)}>
        <Icon name="home" type='SimpleLineIcons' />
      </Button>
      <Button onPress={() => setActive(VIEWS.search)}>
        <Icon name="magnifier" type='SimpleLineIcons' />
      </Button>
      <Button badge onPress={() => setActive(VIEWS.notifications)}>
        <Badge><Text>2</Text></Badge>
        <Icon name="bell" type='SimpleLineIcons' />
      </Button>
      <Button onPress={() => setActive(VIEWS.userProfile)}>
        <Icon name="people" type='SimpleLineIcons' />
      </Button>
    </FooterTab>
  </Footer>

export default FooterTabs;