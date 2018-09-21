import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';
import HorizontalLine from '../../../shared-components/HorizontalLine';

import About from './about';

const ScrollableTabs = () => {
  return (
    <Container style={styles.container}>
      {/* <HorizontalLine /> */}
      <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
        <Tab heading="About" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
          <About />
        </Tab>
        <Tab heading="Posts" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
          <Text>Hello there 2</Text>
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'transparent'
  },
  tabsStyle: {
    backgroundColor: '#628AFF',
    borderBottomWidth:0
  },
  white: {
    backgroundColor: '#fff',
  },
  activeTextStyle: {
    color: '#628AFF',
    fontFamily: 'raleway-bold',
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: '#3F3F3F',
    fontFamily: 'raleway-regular'
  }
});

export default ScrollableTabs;
