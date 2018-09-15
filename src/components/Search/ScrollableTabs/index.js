import React from 'react';
import { View, Text, Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';

import Parties from './parties';
import People from './people';

const ScrollableTabs = () => {
  return (
    <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
      <Tab heading="Feed" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle} >
        <Text style={{marginTop: 15, fontFamily: 'raleway-regular', paddingLeft: 16, paddingRight: 16 }}>
        This text should be replaced with a react component for feed. This is just a placeholder.
        {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
        {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
        {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
        {"\n\n"}This text should be replaced with a react component for feed. This is just a placeholder.
      </Text>
      </Tab>
      <Tab heading="People" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
        <People />
      </Tab>
      <Tab heading="Parties" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
        <Parties />
      </Tab>
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabsStyle: {
    backgroundColor: '#444',
    borderBottomWidth:0
  },
  activeTextStyle: {
    color: '#444',
    fontFamily: 'raleway-bold',
    backgroundColor: 'transparent'
  },
  tabsStyle: {
    backgroundColor: '#444',
    borderBottomWidth:0
  },
  white: {
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#3F3F3F',
    fontFamily: 'raleway-regular'
  }
});

export default ScrollableTabs;
