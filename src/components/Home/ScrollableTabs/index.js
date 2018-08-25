import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';
import Trending from './trending';
import Feed from './feed';

const ScrollableTabs = () =>
  <Container style={styles.container}>
    <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
      <Tab heading="Feed" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white}>
        <Feed />
      </Tab>
      <Tab heading="Trending" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white}>
        <Trending />
      </Tab>
    </Tabs>
  </Container>

const styles = {
  container: {
    backgroundColor: 'transparent'
  },
  tabsStyle: {
    backgroundColor: '#000',
  },
  white: {
    backgroundColor: '#fff',
  },
  activeTextStyle: {
    color: '#000',
    fontFamily: 'raleway-bold',
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: '#3F3F3F',
    fontFamily: 'raleway-regular'
  }
}

export default ScrollableTabs;
