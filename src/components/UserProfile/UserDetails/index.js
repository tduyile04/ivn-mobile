import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View, Button, Icon } from 'native-base';

import { FollowButton, UnfollowButton } from '../../../shared-components/Buttons';
import defaultPicture from '../../../../assets/images/placeholder.png';

const UserDetails = ({
    id,
    user,
    endorseUser, 
    withdrawEndorsement,
    endorsed, 
    following,
    candidate
}) => {
  const avatar = user && user.avatar ? { uri: user.avatar } : defaultPicture;
  return (
    <View style={styles.content}>
      <View style={styles.row}>
        <View style={styles.profileImageSection}>
          <Image
            style={styles.profileImage}
            source={avatar}
          />
        </View>
        <View style={styles.actionSection}>
          {
            candidate && ( endorsed ?
              <Button transparent dark style={styles.endorseBtn} onPress={() => withdrawEndorsement(id)}>
                <Text style={styles.text}>Unendorse</Text>
              </Button> 
            :
              <Button transparent dark style={styles.endorseBtn} onPress={() => endorseUser(id)}>
                <Icon type="MaterialCommunityIcons" name='checkbox-marked-circle-outline' style={styles.verified} /> 
                <Text style={[styles.text, styles.endorse]}>Endorse</Text>
            </Button> )
          }
          { following ? <UnfollowButton /> : <FollowButton /> }
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
        <View style={styles.userDetailsSection}>
          <Text style={styles.username}>{user.email}</Text>
          {/* <View style={styles.partyDetails}>
            <View>
              <Image
                style={styles.partyFlag}
                source={{ uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif' }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.partyInfo}>
              <Text style={styles.member}>
                member of 
                <Text style={styles.partyName}> People's Democratic Party</Text>
              </Text>
            </View>
          </View> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  row: {
    flexDirection: 'row'
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 33,
    marginTop: -25,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'raleway-bold',
    color: "#3F3F3F",
    marginTop: 10,
  },
  username: {
    fontSize: 13,
    color: "#3F3F3F",
    fontFamily: "raleway-regular",
    marginBottom: 30
  },
  partyDetails: {
    flexDirection: 'row',
    marginTop: 10,
  },
  partyFlag: {
    width: 39,
    height: 26,
  },
  partyInfo: {
    marginLeft: 7,
    marginBottom: 20,
  },
  partyName: {
    fontSize: 11,
    lineHeight: 13,
    fontFamily: 'raleway-bold',
    color: "#000000",
  }, 
  member: {
    fontSize: 11,
    marginTop: 6,
    lineHeight: 13,
    fontFamily: 'raleway-regular',
    color: "#3F3F3F",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E5E5E5'
  },
  text: {
    fontFamily: 'raleway-bold',
    color: '#4F5764',
    fontSize: 13,
    textAlign: 'center'
  },
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 29,
  },
  endorseBtn: {
    marginTop: 5,
  },
  endorse: {
    marginLeft: -28,
  },
  verified: {
    color: '#ff6277',
  }
});

export default UserDetails; 
