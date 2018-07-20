import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View, Icon } from 'native-base';

// Pass in a buttonStyle props to override the existing button style

export const UnfollowButton = ({buttonStyle}) => {
  return (
    <View>
      <Button bordered style={[styles.unfollowButton, buttonStyle]} >
        <Text style={styles.unfollowText}>Unfollow</Text>
      </Button>
    </View>
  );
}

export const FollowButton = ({buttonStyle}) => {
  return (
    <View>
      <Button iconLeft style={[styles.followButton, buttonStyle]} >
        <Icon type="Feather" name='user-plus' style={styles.userIcon} />
        <Text style={styles.followText}>Follow</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
