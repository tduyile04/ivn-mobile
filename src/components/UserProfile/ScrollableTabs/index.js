import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';

import About from './about';

const ScrollableTabs = () => {
  return (
    <Container style={styles.container}>
      <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
        <Tab heading="About" activeTextStyle={styles.activeTextStyle} >
          <About />
        </Tab>
        <Tab heading="Posts" activeTextStyle={styles.activeTextStyle}>
          <Text>Hello there 2</Text>
        </Tab>
        <Tab heading="Questions" activeTextStyle={styles.activeTextStyle}>
          <Text>Hello there 3</Text>
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
  },
  activeTextStyle: {
    color: '#628AFF',
    fontFamily: 'raleway-bold',
    backgroundColor: 'transparent'
  }
});

export default ScrollableTabs;
