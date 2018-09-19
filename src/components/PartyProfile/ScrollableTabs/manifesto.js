import React from 'react';
import { FileSystem } from 'expo';
import { Container, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';

const downloadFile = (name, url) => FileSystem.downloadAsync(url, `${FileSystem.documentDirectory}${name}.pdf`)

const Manifesto = (props) => {
  return (
    <Container style={styles.container}>
      {props.party && props.party.manifesto && props.party.manifesto.length > 0
        ? <Button onPress={() => downloadFile(props.party.abbr, props.party.manifesto)}>
              <Text>Download Manifesto</Text>
            </Button>
        : <Text style={styles.text}>
            Manifesto not available yet on this platform.
          </Text>
      }
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
