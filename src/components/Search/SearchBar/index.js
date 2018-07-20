import React from 'react';
import { Item, Input, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <Item style={styles.SearchBar}> 
      <Input style={styles.input} placeholder='Search' placeholderTextColor="#3F3F3F"/>
      <Icon active name='search' style={styles.icon} />
    </Item>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    height: 46,
  },
  input: {
    color:"#3F3F3F", 
    fontFamily:"museosans-500", 
    paddingLeft: 30
  },
  icon: {
    color:"#000000", 
    paddingRight: 30,
  }
});

export default SearchBar;