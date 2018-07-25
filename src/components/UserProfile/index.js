import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';

import Listings from '../../shared-components/Listings';
import CoverImage from '../../shared-components/CoverImage';
import UserDetails from './UserDetails';
import UserActions from './UserActions';
import ScrollableTabs from './ScrollableTabs';
import Footer from '../../shared-components/Footer';

export default class UserProfile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CoverImage 
            sourceUri='http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg' 
            coverImageStyle={styles.coverImageStyle} 
          />
          <UserDetails />
          <Listings followers={21098} following={50} endorsements={19205} />
          <UserActions />
          <ScrollableTabs />
        </Content>
        <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImageStyle: {
    width: '100%',
    height: 76,
  }
});
