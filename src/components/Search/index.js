import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from 'native-base';

import SearchBar from './SearchBar';
import ScrollableTabs from './ScrollableTabs';

const Search = () => {
  return (
    <Container style={styles.container}>
      <SearchBar />
      <ScrollableTabs />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default Search;
