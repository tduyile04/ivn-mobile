import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from './SearchBar';
import ScrollableTabs from './ScrollableTabs';

const Search = () => {
  return (
    <View>
      <SearchBar />
      <ScrollableTabs />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Search;
