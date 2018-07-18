import React from 'react';
import { Container, Content, View, Text, Button, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';

import CoverImage from '../../shared-components/CoverImage';
import Listings from '../../shared-components/Listings';
import ScrollableTabs from './ScrollableTabs';

const PartyProfile = () => {
  return (
    <Container style={styles.container}>
      <Content>
        <CoverImage 
          sourceUri='http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg'
          coverImageStyle={styles.coverImageStyle}
        />
        <View style={styles.partyDetailsContainer}>
          <View style={styles.partyFlagContainer}>
            <Image
              style={styles.partyFlag}
              source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.partyName}>People's Democratic Party</Text>
          <Text style={styles.partyHandle}>@pdp</Text>
          <Listings followers={21098} following={50} members={1050} />
          <View style={styles.followActionView}>
            <Button iconLeft style={styles.followActionButton}>
              <Icon type="Feather" name='user-plus' style={styles.userIcon} />
              <Text style={styles.followAction}>Follow</Text>
            </Button>
          </View>
        </View>
        <ScrollableTabs />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  coverImageStyle: {
    width: '100%',
    height: 76,
  },
  partyFlag: {
    width: 39,
    height: 26,
  },
  partyDetailsContainer: {
    alignItems: 'center',
  },
  partyFlagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 68,
    height: 68,
    marginTop: -30,
    borderRadius: 34
  },
  partyName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'raleway-bold',
    color: "#3F3F3F",
    marginTop: 10
  },
  partyHandle: {
    fontSize: 13,
    color: "#3F3F3F",
    fontFamily: "raleway-regular",
    marginTop: 2,
    marginBottom: 22,
  },
  followActionView: {
    marginTop: 32
  },
  followActionButton: {
    height: 30,
    width: 114,
    backgroundColor: '#628AFF',
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
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
});

export default PartyProfile;
