import React from 'react';
import { Container, Text, View, Button, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import HorizontalLine from '../../../shared-components/HorizontalLine';
import { UnfollowButton, FollowButton } from '../../../shared-components/Buttons';

import defaultPicture from '../../../../assets/images/placeholder.png';

const setAvatar = userAvatar => userAvatar ? { uri: userAvatar } : defaultPicture;

const Members = (props) => {
  return (
    <Container>
      {props.party.members.map(member => {
        return (
          <View key={member.id}>
            <View style={styles.card}>
              <Image
                style={styles.profileImage}
                source={setAvatar(member.avatar)}
              />
              <View style={styles.items}>
                <Text style={styles.title}>{member.firstName} {member.lastName}</Text>
                <Text style={styles.handle}>@{member.firstName}_{member.lastName}</Text>
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
    borderRadius: 20,
  },
  userIcon: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  followAction: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#FFFFFF',
    marginLeft: -5
  },
  followActionButton: {
    height: 30,
    width: 114,
    backgroundColor: '#628AFF',
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 13,
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
  }
});

export default Members;
