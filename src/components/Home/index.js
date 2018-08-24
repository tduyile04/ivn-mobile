import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Header from '../../shared-components/Header';

import ScrollableTabs from './ScrollableTabs';

class Home extends Component {

  render() {
    const { user } = this.props;
    return (
      <Container>
        <Header title='Timeline' menu />
        <ScrollableTabs />
      </Container>
    );
  };
}

export default Home;

