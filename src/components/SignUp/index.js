import React from 'react';
import { Container, Text, Icon, Form, Item, Input, Button, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


const SignUp = () => {
  return (
    <Container style={styles.container}>
      <Text style={[styles.text, styles.title]}>Welcome!</Text>
      <Text style={[styles.text, styles.description]}>Sign up to continue</Text>
      <Form style={styles.form}>
        <Item>
          <Icon active name='person' />
          <Input placeholder='Email or username' />
        </Item>
        <Item style={styles.passwordSection}>
          <Icon active name='lock' />
          <Input placeholder='Password' />
        </Item>
        <Button block dark style={styles.button} onPress={() => Actions.home()}>
          <Text style={styles.buttonTitle}>Sign up</Text>
        </Button>
      </Form>
      <View style={styles.bottom}>
        <Text style={styles.text}>Have an account? 
          <Text style={[styles.text, styles.logInText]} onPress={() => Actions.login()}> Log in</Text>
        </Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 100,
  },
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 30,
  }, 
  description: {
    fontSize: 20,
  },
  form: {
    marginTop: 70
  },
  button: {
    marginTop: 60,
    borderRadius: 4,
    height: 60,
  },
  buttonTitle: {
    fontFamily: 'raleway-bold',
    fontSize: 16,
  },
  text: {
    fontFamily: 'raleway-regular',
    fontSize: 16,
    color: '#4F5764',
  },
  bottom: {
    marginTop: 44
  },
  recover: {
    marginTop: 15
  },
  passwordSection: {
    marginTop: 20
  },
  logInText: {
    fontFamily: 'raleway-bold',
    color: '#002728',
  }
});

export default SignUp;
