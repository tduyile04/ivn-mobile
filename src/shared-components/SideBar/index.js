import React from 'react';
import { Text, View, Container, Button, Icon, Badge, Left, Body, Right } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import HorizontalLine from '../../shared-components/HorizontalLine';
import Listings from '../../shared-components/Listings';

const SideBar = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <View style={styles.center}>
          <Image
            style={styles.profileImage}
            source={{uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg'}}
          />
          <Text style={[styles.name, styles.boldText]}>Jessicca Simpsons</Text>
          <Text style={[styles.text, styles.username]}>@jessica_sims</Text>
          <Image
            style={styles.partyFlag}
            source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
            resizeMode="contain"
          />
          <HorizontalLine lineStyle={styles.lineStyle} />
          <Listings endorsements={19205} followers={21098} following={50} countStyle={styles.count} />
          <HorizontalLine lineStyle={styles.lineStyle} />
        </View>
        <View style={[styles.box, styles.main]}>
          <View style={[styles.rowCenter]}>
            <Button transparent>
              <Icon name="home" type='SimpleLineIcons' style={styles.icon} />
            </Button>
            <Text style={styles.text}>Timeline</Text>
          </View>
          {/* <View style={[styles.rowCenter]}>
            <Button badge transparent>
              <Icon name="people" type='SimpleLineIcons' style={styles.icon} />
            </Button>
            <Text style={styles.text}>People</Text>
          </View> */}
          <View style={[styles.rowCenter]}>
            <Button transparent>
              <Icon name="bell" type='SimpleLineIcons'style={styles.icon} />
            </Button>
            <Text style={styles.text}>Notifications</Text>
          </View>
          <View style={[styles.rowCenter]}>
            <Button transparent>
              <Icon name="comment-question-outline" type='MaterialCommunityIcons' style={styles.icon} />
            </Button>
            <Text style={styles.text}>Questions</Text>
          </View>
          <View style={[styles.rowCenter]}>
            <Button transparent onPress={() => Actions.partyList()}>
              <Icon name="people" type='SimpleLineIcons' style={styles.icon} />  
            </Button>
            <Text style={styles.text}>Parties</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <HorizontalLine lineStyle={styles.lineStyle} />
        <View style={styles.box}>
          <View style={[styles.rowCenter]}>
            <Button transparent>
              <Icon name="settings" type='SimpleLineIcons' style={styles.icon} />
            </Button>
            <Text style={styles.text}>Account Settings</Text>
          </View>
          <View style={[styles.rowCenter]}>
            <Button transparent>
              <Icon name="help-circle-outline" type='MaterialCommunityIcons' style={styles.icon} />
            </Button>
            <Text style={styles.text}>Help</Text>
          </View>
        </View>
        <HorizontalLine lineStyle={styles.lineStyle} />
        <View style={styles.box}>
          <View style={[styles.rowCenter, styles.box]}>
            <Text style={[styles.text, styles.footerText]}>Privacy Policy</Text>
            <Icon name='dot-single' type='Entypo' style={styles.dots} />
            <Text style={[styles.text, styles.footerText]}>Terms of Use</Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

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
  },
  footerText: {
    fontSize: 12,
  },
  boldText: {
    fontFamily: 'raleway-bold',
  },
  main: {
    marginTop: 5
  }
});

export default SideBar;
