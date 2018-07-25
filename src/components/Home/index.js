import React, { Component } from 'react';
import { Container, Text, Drawer, View } from 'native-base';
import { StyleSheet } from 'react-native';

import Header from '../../shared-components/Header';
import SideBar from '../../shared-components/SideBar';
import Footer from '../../shared-components/Footer';
import ScrollableTabs from './ScrollableTabs';
import FloatingButton from '../../shared-components/FloatingButton';

class Feed extends Component {
  render() {
    return (
      <Container> 
        <Header />
        <ScrollableTabs />
        <Footer />
        <FloatingButton />
      </Container>
    );
  };
}

const styles = StyleSheet.create({

});

export default Feed;
