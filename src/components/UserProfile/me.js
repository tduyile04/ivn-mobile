import React, { Component } from 'react';
import { Spinner, Content, Container } from 'native-base';
import { StyleSheet } from 'react-native';
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

  render() {
    const user = this.state.user && JSON.parse(this.state.user);
    const { loading } = this.state;
    const { followings=[], followers=[], endorsements=[] } = user;
    if(loading) return <Spinner color='black' style={styles.container} />;
    return (
      <Container style={styles.container}>
        <Content>
          <CoverImage 
            sourceUri='http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg' 
            coverImageStyle={styles.coverImageStyle} 
          />
          <UserDetails user={user} editProfileButton />
          <Listings followers={followers.length} following={followings.length} posts />
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
