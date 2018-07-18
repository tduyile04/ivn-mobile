import React from 'react';
import { Container, Text, View, Button, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import HorizontalLine from '../../../shared-components/HorizontalLine';

const Members = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://78.media.tumblr.com/918336515ad76e6fbbb9f1b43a77433d/tumblr_ojqofutSn41rkih50o1_500.jpg'}}
        />
        <View style={styles.items}>
          <Text style={styles.title}>Anthony Franklin</Text>
          <Text style={styles.handle}>@anthony_franklink</Text>
          <Button iconLeft style={styles.followActionButton}>
            <Icon type="Feather" name='user-plus' style={styles.userIcon} />
            <Text style={styles.followAction}>Follow</Text>
          </Button>
        </View>
      </View>
      <HorizontalLine />
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg'}}
        />
        <View style={styles.items}>
          <Text style={styles.title}>Jessicca Alli</Text>
          <Text style={styles.handle}>@jessicca_alli</Text>
          <Button iconLeft style={styles.followActionButton}>
            <Icon type="Feather" name='user-plus' style={styles.userIcon} />
            <Text style={styles.followAction}>Follow</Text>
          </Button>
        </View>
      </View>
      <HorizontalLine />
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://i.pinimg.com/736x/19/a8/6c/19a86c6673349bb21910dd4b3bb18e68.jpg'}}
        />
        <View style={styles.items}>
          <Text style={styles.title}>Daniel Smith</Text>
          <Text style={styles.handle}>@daniel_smith</Text>
          <Button iconLeft style={styles.followActionButton}>
            <Icon type="Feather" name='user-plus' style={styles.userIcon} />
            <Text style={styles.followAction}>Follow</Text>
          </Button>
        </View>
      </View>
      <HorizontalLine />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  card: {
    flexDirection: 'row',
    marginTop: 25,
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
