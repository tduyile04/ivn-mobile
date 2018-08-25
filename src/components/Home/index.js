import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Header from '../../shared-components/Header';
import FloatingButton from '../../shared-components/FloatingButton';

import ScrollableTabs from './ScrollableTabs';

class Home extends Component {
  render() {
    const { user } = this.props;
    return (
      <Container>
        <Header title='Timeline' menu />
        <ScrollableTabs />
        <FloatingButton />
      </Container>
    );
  };
}

export default Home;

