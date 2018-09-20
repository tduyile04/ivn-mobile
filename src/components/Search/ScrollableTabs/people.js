import React from 'react';
import { Container, Text, View, Button, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import HorizontalLine from '../../../shared-components/HorizontalLine';
import { UnfollowButton, FollowButton } from '../../../shared-components/Buttons';
import defaultPicture from '../../../../assets/images/placeholder.png';

const setAvatar = userAvatar => userAvatar ? { uri: userAvatar } : defaultPicture;

const People = (props) => {
  return (
    <Container style={styles.container}>
      {props.data.map((user) => {
        return (
          <View key={user.id}>
            <View style={styles.card}>
              <Image
                style={styles.profileImage}
                source={setAvatar(user.avatar)}
              />
              <View style={styles.items}>
                <Text style={styles.fullname}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.handle}>@{user.firstName}_{user.lastName}</Text>
                <FollowButton />
              </View>
            </View>
            <HorizontalLine />
          </View>
        )
      })}
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
  },
  fullname: {
    fontFamily: 'raleway-regular',
    fontSize: 13,
    color: '#3F3F3F',
    marginTop: 3,
    fontWeight: 'bold'
  }
});

export default People;
