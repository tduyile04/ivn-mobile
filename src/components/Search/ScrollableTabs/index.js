import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';

import Parties from './parties';
import People from './people';

const ScrollableTabs = () => {
  return (
    <Container style={styles.container}>
      <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
        <Tab heading="Feed" activeTextStyle={styles.activeTextStyle} >
        <Text style={{marginTop: 15, fontFamily: 'raleway-regular', paddingLeft: 16, paddingRight: 16 }}>
          This text should be replaced with a react component for feed. This is just a placeholder.
          {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
          {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
          {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
          {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
        </Text>
        </Tab>
        <Tab heading="People" activeTextStyle={styles.activeTextStyle}>
         <People />
        </Tab>
        <Tab heading="Parties" activeTextStyle={styles.activeTextStyle}>
          <Parties />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
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
