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
import { get, remove } from '../../../src/modules/cache';

class EditProfile extends Component {

  state = {
      loading: true,
      userId: '',
  }

  async componentDidMount() {
    const user = await get("user");
    this.setState({user, loading: false});
  }

  render() {
    const { loading, user } = this.state;

    if(loading) return <Spinner color='black' style={styles.container} />;

    return (
      <Container>
          <Content>
            <Image
              style={styles.coverImageStyle}
              source={require('../../../assets/images/backdrop.png')}
              resizeMode='cover'
            />
            <Button transparent onPress={() => Actions.myProfile()} style={styles.backBtn}>
                <Icon name='chevron-left' type='MaterialCommunityIcons' style={styles.backIcon}/>
            </Button> 
            <EditableUserProfile
              user={user}
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
