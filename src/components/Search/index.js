import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';

import SearchBar from './SearchBar';
import ScrollableTabs from './ScrollableTabs';
import Footer from '../../shared-components/Footer';

const Search = () => {
  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <SearchBar />
        <ScrollableTabs />
      </Content>
      <Footer />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Search;
