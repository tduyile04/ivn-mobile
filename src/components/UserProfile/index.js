import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { getUserDetails } from '../../actions/user';
import Listings from '../../shared-components/Listings';
import CoverImage from '../../shared-components/CoverImage';
import UserDetails from './UserDetails';
import UserActions from './UserActions';
import ScrollableTabs from './ScrollableTabs';

class UserProfile extends Component {

  async componentDidMount() {
    await this.props.getUserDetails();
    console.log(this.props.user.user.id, 'user');
  }

  render() {
    const { user, loading } = this.props.user;
    const { followings=[], followers=[], endorsements=[] } = user;

    if(loading) return <Spinner color='black' />;
    return (
      <View>
        <CoverImage 
          sourceUri='http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg' 
          coverImageStyle={styles.coverImageStyle} 
        />
        <UserDetails user={user} />
        <Listings followers={followers.length} following={followings.length} endorsements={endorsements.length} />
        <UserActions />
        <ScrollableTabs />
      </View>
    );
  }
}
;

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
