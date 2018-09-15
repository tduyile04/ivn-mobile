import React from 'react';
import { Container, View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import HorizontalLine from '../../../shared-components/HorizontalLine';

const About = () => {
  return (
    <Container>
      <View style={styles.card}>
        <Text style={styles.description}>
          See what I’m getting at here? You have the right to take any piece 
          of your personal history and reinterpret it to your advantage rather
          than to your detriment. You can find ways to turn your past to your own good.
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
