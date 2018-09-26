import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';
import HorizontalLine from '../../../shared-components/HorizontalLine';

import About from './about';

const ScrollableTabs = (props) => {
  return (
    <Container style={styles.container}>
      {/* <HorizontalLine /> */}
      <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
        <Tab heading="About" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
          <About user={props.user} />
        </Tab>
        <Tab heading="Posts" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
          <Text style={styles.text}>No post(s) available yet</Text>
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
  },
  text: {
    fontFamily: 'raleway-regular',
    marginTop: 20,
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 14,
  }
});

export default ScrollableTabs;
