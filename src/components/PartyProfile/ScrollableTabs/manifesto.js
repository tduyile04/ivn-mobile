import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const Manifesto = () => {
  return (
    <Container style={styles.container}>
      <Text style={styles.text}>
        See what I’m getting at here? You have the right to take any piece of your personal 
        history and reinterpret it to your advantage rather than to your detriment. 
        You can find ways to turn your past to your own good.
        {"\n\n"}
        See what I’m getting at here? You have the right to take any piece of your personal 
        history and reinterpret it to your advantage rather than to your detriment. 
        You can find ways to turn your past to your own good.
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
  text: {
    fontFamily: 'raleway-regular',
    fontSize: 14,
    color: '#000000',
    textAlign: 'left',
    lineHeight: 27,
  }
});

export default Manifesto;