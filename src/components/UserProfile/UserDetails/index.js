import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from 'native-base';

const UserDetails = ({user}) => {
  const avatar = user.avatar || 'http://marydupriestudio.com/wordpress/wp-content/uploads/2016/04/Detroit_Mi_Actors_Headshot_Photographers_105-2.jpg';
  return (
    <View style={styles.content}>
      <View style={styles.profileImageSection}>
        <Image
          style={styles.profileImage}
          source={{uri: avatar}}
        />
      </View>
      <View style={styles.userDetailsSection}>
        <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
        <Text style={styles.username}>{user.email}</Text>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row'
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 33,
    marginTop: -15,
  },
  userDetailsSection: {
    marginLeft: 29,
    marginTop: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'raleway-bold',
    color: "#3F3F3F",
  },
  username: {
    fontSize: 13,
    color: "#3F3F3F",
    fontFamily: "raleway-regular",
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
    marginBottom: 40,
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
});

export default UserDetails; 
