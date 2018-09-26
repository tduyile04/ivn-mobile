import React from 'react';
import { Container, View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import HorizontalLine from '../../../shared-components/HorizontalLine';

const About = ({ user }) => {
  return (
    <Container>
      <View style={styles.card}>
        <Text style={styles.description}>
          {user.user && user.user.bio ? user.user.bio: "No bio updated yet" }
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 14,
    color: '#628AFF',
    marginBottom: 15
  },
  card: {
    marginTop: 20,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  position: {
    fontFamily: 'raleway-bold',
    fontSize: 14,
    color: '#000000',
    marginBottom: 6
  },
  positionCard: {
    marginBottom: 20
  },
  description: {
    fontFamily: 'raleway-regular',
    fontSize: 14,
  }
});

export default About;
