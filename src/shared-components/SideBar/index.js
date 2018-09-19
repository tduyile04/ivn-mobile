import React, { Component } from 'react';
import { Text, View, Container, Button, Icon, Spinner } from 'native-base';
import { StyleSheet, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { getUserDetails } from '../../actions/user';
import HorizontalLine from '../../shared-components/HorizontalLine';
import Listings from '../../shared-components/Listings';
import { get, mapSet, remove } from '../../modules/cache';

class SideBar extends Component {
  state = {
    loading: true,
    user: '',
  }

  async componentDidMount() {
    let user = await get("user");
    if(!user) {
      const userId = await get('user_id');
      await this.props.getUserDetails(userId);
      user = JSON.stringify(this.props.user.user);
      mapSet([{user}]);
    }
    this.setState({user, loading: false});
  }

  logout = () => {
    remove("token");
    remove("user");
    remove("user_id"); // To refactor to use a removeList method
    Actions.login();
  }

  confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure?',
      [
        {text: 'NO', onPress: () => console.log('NO Pressed'), style: 'cancel'},
        {text: 'YES', onPress: () => this.logout()},
      ]
    );
  }

  render() {
    const user = this.state.user && JSON.parse(this.state.user);
    const { loading } = this.state;
    const { followings=[], followers=[], endorsements=[] } = user;
    if(loading) return <Spinner color='black' style={styles.container} />;
    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.center}>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg'}}
            />
            <Text style={[styles.name, styles.boldText]}>{user.firstName} {user.lastName}</Text>
            <Text style={[styles.text, styles.username]}>{user.email}</Text>
            <Image
              style={styles.partyFlag}
              source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
              resizeMode="contain"
            />
            <HorizontalLine lineStyle={styles.lineStyle} />
            <Listings endorsements={endorsements.length} followers={followers.length} following={followings.length} countStyle={styles.count} />
            <HorizontalLine lineStyle={styles.lineStyle} />
          </View>
          <View style={[styles.box, styles.main]}>
            <View style={[styles.rowCenter]}>
              <Button transparent>
                <Icon name="comment-question-outline" type='MaterialCommunityIcons' style={styles.icon} />
                <Text style={styles.text}>Questions</Text>
              </Button>
            </View>
            <View style={[styles.rowCenter]}>
              <Button transparent onPress={() => Actions.partyList()}>
                <Icon name="flag" type='SimpleLineIcons' style={styles.icon} />  
                <Text style={styles.text}>Parties</Text>
              </Button>
            </View>
            <View style={[styles.rowCenter]}>
              <Button transparent onPress={() => Actions.aspirants()}>
                <Icon name="user" type='SimpleLineIcons' style={styles.icon} />
                <Text style={styles.text}>Aspirants</Text>
              </Button>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <HorizontalLine lineStyle={styles.lineStyle} />
          <View style={styles.box}>
            <View style={[styles.rowCenter]}>
              <Button transparent>
                <Icon name="settings" type='SimpleLineIcons' style={styles.icon} />
                <Text style={styles.text}>Account Settings</Text>
              </Button>
            </View>
            <View style={[styles.rowCenter]}>
              <Button transparent>
                <Icon name="help-circle-outline" type='MaterialCommunityIcons' style={styles.icon} />
                <Text style={styles.text}>Help</Text>
              </Button>
            </View>
          </View>
          <HorizontalLine lineStyle={styles.lineStyle} />
          <View style={styles.box}>
            <View style={[styles.rowCenter, styles.box]}>
              {/* <Text style={[styles.text, styles.footerText]}>Privacy Policy</Text> */}
              <Text style={[styles.text, styles.footerText]}>Terms of Use</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={[styles.text, styles.footerText, styles.terms]} onPress={() => this.confirmLogout()}>Log out</Text> 
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
  },
  name: {
    fontSize: 18,
    marginTop: 10,
  },
  username: {
    fontSize: 13,
  },
  partyFlag: {
    width: 39,
    height: 26,
    marginTop: 15,
    marginBottom: 10,
  },
  count: {
    fontSize: 18,
  },
  lineStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#3F3F3F'
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  dots: {
    color: '#D8D8D8'
  },
  text: {
    fontFamily: "raleway-regular",
    fontSize: 14,
    color: '#3F3F3F',
    marginLeft: -15,
  },
  footerText: {
    fontSize: 12,
    marginLeft: 15,
  },
  terms: {
    marginLeft: 0,
  },
  boldText: {
    fontFamily: 'raleway-bold',
  },
  main: {
    marginTop: 5
  }
});

const mapStateToProps = ({user}) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  getUserDetails: userId => dispatch(getUserDetails(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
