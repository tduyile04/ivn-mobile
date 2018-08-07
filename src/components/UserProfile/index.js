import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getUserDetails } from '../../actions/user';
import Listings from '../../shared-components/Listings';
import CoverImage from '../../shared-components/CoverImage';
import UserDetails from './UserDetails';
import UserActions from './UserActions';
import ScrollableTabs from './ScrollableTabs';
import Footer from '../../shared-components/Footer';

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUserDetails();
  }

  render() {
    const { user, loading } = this.props.user;
    const { followings=[], followers=[], endorsements=[] } = user;

    if(loading) return <Spinner color='black' />;
    return (
      <Container style={styles.container}>
        <Content>
          <CoverImage 
            sourceUri='http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg' 
            coverImageStyle={styles.coverImageStyle} 
          />
          <UserDetails user={user} />
          <Listings followers={followers.length} following={followings.length} endorsements={endorsements.length} />
          <UserActions />
          <ScrollableTabs />
        </Content>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = ({user}) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  getUserDetails: () => dispatch(getUserDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImageStyle: {
    width: '100%',
    height: 76,
  }
});
