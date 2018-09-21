import React from 'react';
import { Content, Tab, Tabs, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';

import Parties from './parties';
import People from './people';

const ScrollableTabs = (props) => {
  return (
    <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
      <Tab heading="People" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white}>
        {props.loading
          ? (<Spinner size="small" color="#000" />)
          : (<Content><People data={props.users} /></Content>)
        }
      </Tab>
      <Tab heading="Parties" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white}>
        {props.loading
          ? (<Spinner size="small" color="#000" />)
          : (<Content><Parties data={props.parties} /></Content>)
        }
      </Tab>
    </Tabs>
  );
};

const styles = StyleSheet.create({
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
  white: {
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#3F3F3F',
    fontFamily: 'raleway-regular'
  }
});

export default ScrollableTabs;
