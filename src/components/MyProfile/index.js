import React, { Component } from 'react';
import { Spinner, Content, Container, Button, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
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
            style={styles.coverImageStyle}
            source={require('../../../assets/images/backdrop.png')}
            resizeMode='cover'
          />
          <Button transparent onPress={() => Actions.pop()} style={styles.backBtn}>
            <Icon name='chevron-left' type='MaterialCommunityIcons' style={styles.backIcon}/>
          </Button> 
          <UserDetails user={user} editProfileButton />
          {
            candidate ?
              <Listings followers={followers.length} following={followings.length} endorsements={candidate && endorsements.length}/>
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
  backBtn: {
    position: 'absolute',
    top: 5, 
    left: 10
  },
  backIcon: {
    color: '#fff', 
    marginLeft: 10
  }
});
