import React from 'react';
import moment from 'moment';
import { View, Text, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import defaultPicture from '../../../assets/images/placeholder.png';

const Comment = ({ item }) => 
  <View style={styles.container}>
    <View>
      <Image
        style={styles.profileImage}
        source={item.user && item.user.avatar ? { uri: item.user.avatar } : defaultPicture}
      />
      <Icon style={{ fontSize: 18, color: '#97A1B3', marginTop: 5 }} name="subdirectory-arrow-right" type="MaterialCommunityIcons" />
    </View>
    <View style={styles.contents}>
      <View style={styles.items}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.user && item.user.firstName} {item.user && item.user.lastName}</Text>
          <Icon name='dot-single' type='Entypo' style={styles.dots} />
          <Text style={[styles.text, styles.blueText]}>{moment(item.createdAt).fromNow()}</Text>
        </View>
        <Text style={styles.description}>{item.comment}</Text>
      </View>
    </View>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  contents: {
    width: '70%'
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  items: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  info: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  name: {
    fontFamily: 'raleway-bold',
    fontSize: 12,
    color: '#000'
  },
  text: {
    fontFamily: 'museosans-500',
    fontSize: 12,
  },
  blueText: {
    color: '#628AFF',
  },
  darkText: {
    color: '#3F3F3F',
    marginLeft: -10
  },
  dots: {
    color: '#D8D8D8'
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    color: '#000',
    fontFamily: 'SFProText-regular',
    marginBottom: 10,
  },
  button: {
    borderColor: '#E3E3E3',
    marginTop: 5,
    marginBottom: 10,
  },
  icon: {
    color: '#97A1B3',
  }
});

export default Comment;
