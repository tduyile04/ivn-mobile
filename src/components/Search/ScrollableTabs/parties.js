import React from 'react';
import { Container, Text, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import HorizontalLine from '../../../shared-components/HorizontalLine';
import { UnfollowButton, FollowButton } from '../../../shared-components/Buttons';

const Parties = () => {
  return (
    <Container>
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
          resizeMode='contain'
        />
        <View style={styles.items}>
          <Text style={styles.handle}>@pdp</Text>
          <Text style={styles.title}>People’s Democratic Party</Text>
          <FollowButton />
        </View>
      </View>
      <HorizontalLine />
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
          resizeMode='contain'
        />
        <View style={styles.items}>
          <Text style={styles.handle}>@pdpofficial</Text>
          <Text style={styles.title}>The official account of PDP</Text>
          <UnfollowButton />
        </View>
      </View>
      <HorizontalLine />
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
          resizeMode='contain'
        />
        <View style={styles.items}>
          <Text style={styles.handle}>@pdpfanpage</Text>
          <Text style={styles.title}>Fan page of PDP</Text>
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
  },
  userIcon: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  followText: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#FFFFFF',
    marginLeft: -5
  },
  followButton: {
    height: 30,
    width: 114,
    backgroundColor: '#628AFF',
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 13,
  },
  unfollowText: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#4F5764',
    textAlign: 'center'
  },
  unfollowButton: {
    height: 30,
    width: 114,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 13,
  },
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#3F3F3F',
    marginTop: 8,
  },
  handle: {
    fontFamily: 'raleway-regular',
    fontSize: 13,
    color: '#3F3F3F',
  }
});

export default Parties;
