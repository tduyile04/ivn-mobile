import React from 'react';
import { View, Text, Tab, Tabs, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';

import Parties from './parties';
import People from './people';

const ScrollableTabs = (props) => {
  return (
    <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
      <Tab heading="People" activeTextStyle={styles.activeTextStyle}>
        {props.loading
          ? (<Spinner size="small" color="#000" />)
          : (<People data={props.users} />)
        }
      </Tab>
      <Tab heading="Parties" activeTextStyle={styles.activeTextStyle}>
        {props.loading
          ? (<Spinner size="small" color="#000" />)
          : (<Parties data={props.parties} />)
        }
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
