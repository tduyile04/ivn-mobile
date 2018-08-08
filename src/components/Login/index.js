import React, { Component } from 'react';
import { Container, Text, Icon, Form, Item, Input, Button, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.input = {}
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    await this.props.login({ email, password });
    return this.setState(() => ({ email: '', password: '' }))
  }

  updateInputField = (value, field)  => {
    return this.setState(() => ({ [field]: value }));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={[styles.text, styles.title]}>Welcome Back!</Text>
        <Text style={[styles.text, styles.description]}>Sign in to continue</Text>
        <Form style={styles.form}>
          <Item>
            <Icon active name='person-outline' type='MaterialIcons' style={styles.icon} />
            <Input 
              placeholder='Email or username' 
              style={styles.text}
              value={this.state.email}
              onChangeText={text => this.updateInputField(text, 'email')}
            />
          </Item>
          <Item style={styles.passwordSection}>
          <Icon active name='lock-open' type='MaterialIcons' style={styles.icon} />
            <Input 
              placeholder='Password' 
              type='password' 
              style={styles.text}
              value={this.state.password}
              onChangeText={text => this.updateInputField(text, 'password')}
              secureTextEntry
            />
          </Item>
          <Button block dark style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonTitle}>LOGIN</Text>
          </Button>
        </Form>
        <View style={styles.bottom}>
          <View style={{flexDirection: 'row'}}> 
            <Text style={styles.text}>Don't have an account? 
              <Text style={[styles.text, styles.signUpText]} onPress={()=> Actions.signup()}> Sign up</Text>
            </Text>
          </View>
          <Text style={[styles.text, styles.recover]}>Recover password</Text>
        </View>
      </Container>
    );
  }
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
    marginTop: 70,
    alignSelf: 'stretch'
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
  icon: {
    color: '#97A1B3',
  },
  signUpText: {
    fontFamily: 'raleway-bold',
    color: '#002728',
  }
});

export default Login;