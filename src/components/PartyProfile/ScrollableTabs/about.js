import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const About = (props) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.about}>
        {props.party && props.party.about && props.party.about.length > 0
          ? props.party.about
          : 'Information about this party not available yet on this platform'
        }
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    paddingLeft: 25,
    paddingRight: 25
  },
  about: {
    fontFamily: 'raleway-regular',
    fontSize: 14,
    color: '#000000',
    textAlign: 'left',
    lineHeight: 27,
  }
});

export default About;
