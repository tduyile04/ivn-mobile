import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Button, Text, View, Icon } from 'native-base';

// Pass in a buttonStyle props to override the existing button style

export const UnfollowButton = ({buttonStyle}) => 
  <View>
    <Button bordered style={[styles.unfollowButton, buttonStyle]} >
      <Text style={styles.unfollowText}>Unfollow</Text>
    </Button>
  </View>

export const FollowButton = ({buttonStyle}) => 
  <View>
    <Button iconLeft style={[styles.followButton, buttonStyle]} >
      <Icon type="Feather" name='user-plus' style={styles.userIcon} />
      <Text style={styles.followText}>Follow</Text>
    </Button>
  </View>

export const Heart = ({ filled, style, ...props}) => 
  <Animated.View {...props} style={[styles.heartView, style]}>
    {!filled && <Icon name='heart-outline' type='MaterialCommunityIcons' style={styles.numbHeart} />}
    {filled && <Icon name='heart' type='MaterialCommunityIcons' style={styles.heart} />}
  </Animated.View> 
   
const styles = StyleSheet.create({
  unfollowText: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#628AFF',
    textAlign: 'center'
  },
  unfollowButton: {
    height: 30,
    width: 114,
    borderWidth: 1,
    borderColor: '#628AFF',
    justifyContent: 'center',
    borderColor: '#628AFF',
    borderRadius: 3,
    marginTop: 13,
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
  heartView:{
    width: '10%',
    marginTop: 20,
  },
  heart: {
    color: '#FF6D6D',
    height: 30,
    width: 30
  },
  numbHeart: {
    color: '#777',
    height: 30,
    width: 30,
  },
  likeSection:{
    width: '10%',
    marginTop: 20,
  },
  heart: {
    color: '#FF6D6D',
    height: 30,
    width: 30
  },
  numbHeart: {
    color: '#333',
    height: 30,
    width: 30
  },
});
