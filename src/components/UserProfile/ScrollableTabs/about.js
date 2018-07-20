import React from 'react';
import { Container, View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import HorizontalLine from '../../../shared-components/HorizontalLine';

const About = () => {
  return (
    <Container>
      <View style={styles.card}>
        <Text style={styles.title}>Bio</Text>
        <Text style={styles.description}>
          See what I’m getting at here? You have the right to take any piece 
          of your personal history and reinterpret it to your advantage rather
          than to your detriment. You can find ways to turn your past to your own good.
        </Text>
      </View>

      <HorizontalLine />

      <View style={styles.card}>
        <Text style={styles.title}>Manifesto</Text>
        <Text style={styles.description}>
          See what I’m getting at here? You have the right to take any piece 
          of your personal history and reinterpret it to your advantage rather
          than to your detriment. You can find ways to turn your past to your own good.
        </Text>
      </View>

      <HorizontalLine />

      <View style={styles.card}>
        <Text style={styles.title}>Previous Political Experience</Text>
        <View style={styles.positionCard}>
          <Text style={styles.position}>Minister for Housing (2010 - 2014)</Text>
          <Text style={styles.description}>
            I was responsible for introducing home funding and low cost housing.
          </Text>
        </View>
        <View style={styles.positionCard}>
          <Text style={styles.position}>Deputy Governor (2006 - 2009)</Text>
          <Text style={styles.description}>
            I was the assistant to the Governor of Lagos state.
          </Text>
        </View>
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
    paddingLeft: 25,
    paddingRight: 25,
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
