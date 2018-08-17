import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import Header from '../../shared-components/Header';
import Footer from '../../shared-components/Footer';
import CommentTab from '../../shared-components/CommentTab';
import FloatingButton from '../../shared-components/FloatingButton';
import Feeds from '../Feeds';
import Search from '../Search';
import UserProfile from '../UserProfile';
import PartyProfile from '../PartyProfile';
import Post from '../Post';
import Notifications from '../Notifications';

import { VIEWS } from './constants';

class Home extends Component {

  state = {
    active: VIEWS.feed,
  }

  componentDidMount() {
    // get cached data and store in state
  }

  setActive = (view) => 
    this.setState({ active: view });
  

  showHeader = () => 
    this.state.active === VIEWS.feed || this.state.active === VIEWS.notifications

  showMenuButton = () =>
    this.state.active === VIEWS.feed
  

  render() {
    const { active } = this.state;
    
    return (
      <Container> 
        <Content>
          { this.showHeader() && <Header menu={this.showMenuButton()} back={!this.showMenuButton()} title={this.state.active} setActive={this.setActive} /> }
          { active === VIEWS.feed && <Feeds setActive={this.setActive} /> }
          { active === VIEWS.search && <Search /> }
          { active === VIEWS.post && <Post setActive={this.setActive}/> }
          { active === VIEWS.userProfile && <UserProfile /> }
          { active === VIEWS.partyProfile && <PartyProfile /> }
          { active === VIEWS.notifications && <Notifications /> }
        </Content>
        { active === VIEWS.post ? <CommentTab /> : <Footer setActive={this.setActive} /> }
        <FloatingButton />
      </Container>
    );
  }
}

export default Home;
