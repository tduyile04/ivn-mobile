import React, { Component } from 'react';
import { Spinner, Content, Container } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getUserDetails, 
        endorseUser, 
        withdrawEndorsement, 
        followUser, 
        unfollowUser, 
} from '../../actions/user';
import Listings from '../../shared-components/Listings';
import CoverImage from '../../shared-components/CoverImage';
import UserDetails from './UserDetails';
import UserActions from './UserActions';
import ScrollableTabs from './ScrollableTabs';
import { get } from '../../modules/cache';

class UserProfile extends Component {

  state = {
    loading: true,
    userId: '',
  }

  async componentDidMount() {
    const id = this.props.id; // Id of user which page you are viewing
    await this.props.getUserDetails(id);
    const userId = await get('user_id'); // Logged-in user ID
    this.setState({loading: false, userId});
  }

  async componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) this.setState({loading: true});
    if (this.props.id !== prevProps.id || this.props.user.message !== prevProps.user.message) {
      await this.props.getUserDetails(this.props.id);
      this.setState({loading: false});
    }
  }

  exist = (list, userId) => list.some(element => element.id === userId);

  render() {
    const {endorseUser, followUser, withdrawEndorsement, unfollowUser, user: { user } } = this.props;
    const { loading, userId } = this.state;
    const { followings=[], followers=[], endorsements=[] } = user;
    const endorsed = this.exist(endorsements, userId);
    const following = this.exist(followers, userId);
    if(loading) return <Spinner color='black' style={styles.container} />;
    return (
      <Container style={styles.container}>
        <Content>
          <CoverImage 
            sourceUri='http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg' 
            coverImageStyle={styles.coverImageStyle} 
          />
          <UserDetails user={user} />
          <Listings 
            followers={followers.length} 
            following={followings.length} 
            endorsements={endorsements.length} 
          />
          <UserActions
            id={user.id}
            endorseUser={endorseUser} 
            withdrawEndorsement={withdrawEndorsement}
            followUser={followUser} 
            unfollowUser={unfollowUser}
            endorsed={endorsed}
            following={following} 
          />
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
  getUserDetails: userId => dispatch(getUserDetails(userId)),
  endorseUser: userId => dispatch(endorseUser(userId)),
  followUser: userId => dispatch(followUser(userId)),
  withdrawEndorsement: userId => dispatch(withdrawEndorsement(userId)),
  unfollowUser: userId => dispatch(unfollowUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  coverImageStyle: {
    width: '100%',
    height: 76, 
  }
});
