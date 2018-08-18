import React, { Component } from 'react';
import { Container, Content, Text, Icon, Form, Item, Input, Button, View, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { mapSet } from '../../modules/cache';
import Toaster from '../../modules/Toaster';
import { isLoginCredentialsValid } from '../../utils/Validation';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      visible: false,
      error: {
        key: {},
        messages: []
      }
    }
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    const error = isLoginCredentialsValid(email, password)
    if (error.messages && error.messages.length > 0) {
      Toaster.show(error.messages[0]);
      return this.setState(() => ({ error }))
    }
    await this.props.login({ email, password });
    if (this.props.error) Toaster.show(this.props.error);
    if (!this.props.error) {
      mapSet([{ "email": email}, {"token": this.props.token}, {"user_id": this.props.user.id}])
      this.setState(() => ({ email: '', password: '' }))
      return Actions.home();
    }
  }

  updateInputField = (value, field)  => {
    return this.setState(() => ({ [field]: value, error: { key: {}, messages: [] } }));
  }

  render() {
    const { visible } = this.state;
    const { loading } = this.props;
    const error = this.props.error.length > 0 || this.state.error.messages.length > 0;

    return (
      <Container>
        <Content style={styles.content}>
          <Text style={[styles.text, styles.title]}>Welcome Back!</Text>
          <Text style={[styles.text, styles.description]}>Sign in to continue</Text>
          <Form style={styles.form}>
            <Item error={error && this.state.error.key.email}>
              <Icon active name='person-outline' type='MaterialIcons' style={styles.icon} />
              <Input 
                placeholder='Email or username' 
                style={styles.text}
                value={this.state.email}
                onChangeText={text => this.updateInputField(text, 'email')}
                autoCapitalize = 'none'
              />
            </Item>
            <Item error={error && this.state.error.key.password} style={styles.passwordSection}>
            <Icon active name='lock-open' type='MaterialIcons' style={styles.icon} />
              <Input 
                placeholder='Password' 
                autoCapitalize = 'none' 
                style={styles.text}
                value={this.state.password}
                onChangeText={text => this.updateInputField(text, 'password')}
                secureTextEntry={!visible}
              />
              { !visible && 
                <Icon active name='eye-outline' type='MaterialCommunityIcons' style={styles.icon} onPress={() => this.setState({visible: true})} /> }
              { visible && 
                <Icon active name='eye-off-outline' type='MaterialCommunityIcons' style={styles.icon} onPress={() => this.setState({visible: false})} /> }
            </Item>
            <Button block dark style={styles.button} onPress={this.handleLogin}>
              {loading 
              ? <Spinner size="small" color="#FFF" />
              : <Text style={styles.buttonTitle}>LOGIN</Text>}
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
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  content: {
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