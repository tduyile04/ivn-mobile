import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Content, Container, Button, Icon, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getUserDetails,
    endorseUser,
    withdrawEndorsement,
    followUser,
    unfollowUser,
} from '../../actions/user';
import EditableUserProfile from './UserProfile/EditableUserProfile';
import FooterTabs from '../../shared-components/Footer';
import Header from '../../shared-components/Header';
import { get, remove } from '../../../src/modules/cache';

class EditProfile extends Component {

    state = {
        loading: true,
        userId: '',
    }

    async componentDidMount() {
        const id = this.props.id; // Id of user which page you are viewing
        const userId = await get('user_id'); // Logged-in user ID
        // if(id === userId) Actions.myProfile();
        await this.props.getUserDetails(id);
        this.setState({loading: false, userId});
    }

    async componentDidUpdate(prevProps) {
        // if(this.props.id === this.state.userId) Actions.myProfile();
        if (this.props.id !== prevProps.id || this.props.user.message !== prevProps.user.message) {
            await this.props.getUserDetails(this.props.id);
        }
    }

    exist = (list, userId) => list.some(element => element.id === userId);

    hasRole = (roles, name) => roles.some(role => role.name === name);

  render() {

      const {endorseUser, followUser, withdrawEndorsement, unfollowUser, user: { user } } = this.props;
      const { loading, userId } = this.state;
      const { followings=[], followers=[], endorsements=[], roles=[] } = user;
      const endorsed = this.exist(endorsements, userId);
      const following = this.exist(followers, userId);
      const candidate  = this.hasRole(roles, 'candidate');

      if(loading) return <Spinner color='black' style={styles.container} />;

    return (
        <Container>
            <Content>
              {/* <Header back /> */}
              <Image
                style={styles.coverImageStyle}
                source={require('../../../assets/images/backdrop.png')}
                resizeMode='cover'
              />
              <EditableUserProfile
                user={user}
                candidate={candidate}
                id={user.id}
                endorseUser={endorseUser}
                withdrawEndorsement={withdrawEndorsement}
                followUser={followUser}
                unfollowUser={unfollowUser}
                endorsed={endorsed}
                following={following}
              />
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    coverImageStyle: {
        width: '100%',
        height: 76,
    },
    button: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30,
        height: 30,
        borderColor: '#d5d5d5'
    },
    text: {
        fontFamily: 'raleway-bold',
        color: '#4F5764',
        fontSize: 13,
        marginLeft: -20
    },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
