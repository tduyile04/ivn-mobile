import React from 'react';
import { Container, Text, View, Button, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import HorizontalLine from '../../../shared-components/HorizontalLine';
import { UnfollowButton, FollowButton } from '../../../shared-components/Buttons';

const People = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://78.media.tumblr.com/918336515ad76e6fbbb9f1b43a77433d/tumblr_ojqofutSn41rkih50o1_500.jpg'}}
        />
        <View style={styles.items}>
          <Text style={styles.handle}>@anthony_franklink</Text>
          <View style={styles.partyDetails}>
            <Image
              style={styles.partyFlag}
              source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
              resizeMode="contain"
            />
            <View style={styles.partyInfo}>
              <Text style={styles.member}>member of</Text>
              <Text style={styles.partyName}>People's Democratic Party</Text>
            </View>
          </View>
          <FollowButton />
        </View>
      </View>

      <HorizontalLine />

      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg'}}
        />
        <View style={styles.items}>
          <Text style={styles.handle}>@jessicca_alli</Text>
          <View style={styles.partyDetails}>
            <Image
              style={styles.partyFlag}
              source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
              resizeMode="contain"
            />
            <View style={styles.partyInfo}>
              <Text style={styles.member}>member of</Text>
              <Text style={styles.partyName}>People's Democratic Party</Text>
            </View>
          </View>
          <UnfollowButton />
        </View>
      </View>

      <HorizontalLine />

      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://i.pinimg.com/736x/19/a8/6c/19a86c6673349bb21910dd4b3bb18e68.jpg'}}
        />
        <View style={styles.items}>
          <Text style={styles.handle}>@daniel_smith</Text>
          <View style={styles.partyDetails}>
            <Image
              style={styles.partyFlag}
              source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
              resizeMode="contain"
            />
            <View style={styles.partyInfo}>
              <Text style={styles.member}>member of</Text>
              <Text style={styles.partyName}>People's Democratic Party</Text>
            </View>
          </View>
          <UnfollowButton />
        </View>
      </View>
      <HorizontalLine />
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  items: {
    marginLeft: 17
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 16,
    color: '#3F3F3F'
  },
  handle: {
    fontFamily: 'raleway-regular',
    fontSize: 13,
    color: '#3F3F3F',
    marginTop: 3,
  },
  partyInfo: {
    marginLeft: 7,
  },
  partyName: {
    fontSize: 11,
    lineHeight: 13,
    fontFamily: 'raleway-bold',
    color: "#000000",
  }, 
  member: {
    fontSize: 11,
    lineHeight: 13,
    fontFamily: 'raleway-regular',
    color: "#3F3F3F",
  },
  partyDetails: {
    flexDirection: 'row',
    marginTop: 10,
  },
  partyFlag: {
    width: 39,
    height: 26,
  }
});

export default People;
