import React, { Component } from 'react';
import { Spinner, Content, Container } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { getUserDetails } from '../../actions/user';
import Listings from '../../shared-components/Listings';
import CoverImage from '../../shared-components/CoverImage';
import UserDetails from './UserDetails';
import ScrollableTabs from './ScrollableTabs';
import { get } from '../../modules/cache';

class MyProfile extends Component {

  state = {
    loading: true,
    user: '',
  }

  async componentDidMount() {
    const user = await get("user");
    this.setState({user, loading: false});
  }

  hasRole = (roles, name) => roles.some(role => role.name === name);

  render() {
    const user = this.state.user && JSON.parse(this.state.user);
    const { loading } = this.state;
    const { followings=[], followers=[], roles=[] } = user;
    const candidate  = this.hasRole(roles, 'candidate');
    if(loading) return <Spinner color='black' style={styles.container} />;
    return (
      <Container style={styles.container}>
        <Content>
          <Image 
            style={styles.icon}
            source={require('../../../assets/images/backdrop.png')}
          />
          <UserDetails user={user} editProfileButton />
          {
            candidate ?
              <Listings followers={followers.length} following={followings.length} endorsements={endorsements.length}/>
            :
            <Listings followers={followers.length} following={followings.length} />
          }
          <ScrollableTabs />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({user}) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  getUserDetails: userId => dispatch(getUserDetails(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  coverImageStyle: {
    width: '100%',
    height: 76, 
  },
});
