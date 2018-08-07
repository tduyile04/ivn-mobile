import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';

import Header from '../../shared-components/Header';
import Footer from '../../shared-components/Footer';
import ScrollableTabs from './ScrollableTabs';
import FloatingButton from '../../shared-components/FloatingButton';

class Home extends Component {

  render() {
    const { user } = this.props;
    return (
      <Container> 
        <Header menu />
        <ScrollableTabs />
        <Footer />
        <FloatingButton />
      </Container>
    );
  };
}

export default Home;

