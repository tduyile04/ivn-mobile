import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import Listings from '../../shared-components/Listings';
import CoverImage from './CoverImage';
import UserDetails from './UserDetails';
import UserActions from './UserActions';
import ScrollableTabs from './ScrollableTabs';

export default class UserProfile extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CoverImage />
          <UserDetails />
          <Listings />
          <UserActions />
          <ScrollableTabs />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}
