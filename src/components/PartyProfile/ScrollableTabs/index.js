import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';

import About from './about';
import Manifesto from './manifesto';
import Members from './members';

const ScrollableTabs = () => {
  return (
    <Container style={styles.container}>
      <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
        <Tab heading="About" activeTextStyle={styles.activeTextStyle} >
          <About />
        </Tab>
        <Tab heading="Maifesto" activeTextStyle={styles.activeTextStyle}>
          <Manifesto />
        </Tab>
        <Tab heading="Members" activeTextStyle={styles.activeTextStyle}>
          <Members />
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = {
  container: {
    marginTop: 30,
    backgroundColor: 'transparent'
  },
  tabsStyle: {
    backgroundColor: '#628AFF',
  },
  activeTextStyle: {
    color: '#628AFF',
    fontFamily: 'raleway-bold',
    backgroundColor: 'transparent'
  }
}

export default ScrollableTabs;
