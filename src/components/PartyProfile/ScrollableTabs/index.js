import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';

import About from './about';
import Manifesto from './manifesto';
import Members from './members';
import HorizontalLine from '../../../shared-components/HorizontalLine';

const ScrollableTabs = () => {
  return (
    <Container style={styles.container}>
      <HorizontalLine />
      <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
        <Tab heading="About" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle} >
          <About />
        </Tab>
        <Tab heading="Maifesto" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle} >
          <Manifesto />
        </Tab>
        <Tab heading="Members" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle} >
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
    backgroundColor: '#444',
    borderBottomWidth:0
  },
  white: {
    backgroundColor: '#fff',
  },
  activeTextStyle: {
    color: '#444',
    fontFamily: 'raleway-bold',
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: '#3F3F3F',
    fontFamily: 'raleway-regular'
  }
}

export default ScrollableTabs;
