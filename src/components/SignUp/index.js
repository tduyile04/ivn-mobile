import React, { Component }  from 'react';
import { Container, Content, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../shared-components/Header';
import Toaster from '../../modules/Toaster';
import { mapSet } from '../../modules/cache';
import Step1 from './step_1';
import Step2 from './step_2';

import { isSignupCredentialsValid_stepOne, isSignupCredentialsValid_stepTwo } from '../../utils/Validation'

class SignUp extends Component {
  state = {
    credentials: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      gender: 'Male',
      country: '',
      state: '',
      localGovernment: ''
    },
    step1: true,
    selected: [true, false],
    textValueArray: ["Male", "Female"],
    error: {
      key: {},
      messages: []
    }
  }

  handleNextButtonClick = async (fields) => {
    if (fields.key === 1) {
      const error = isSignupCredentialsValid_stepOne(fields)
      if (error.messages && error.messages.length > 0) {
        Toaster.show(error.messages[0]);
        return this.setState(() => ({ error }))
      } 
      return this.setState({step1: false});
    }
    if (fields.key === 2) {
      const error = isSignupCredentialsValid_stepTwo(fields)
      if (error.messages && error.messages.length > 0) {
        Toaster.show(error.messages[0]);
        return this.setState(() => ({ error }))
      }
      const { key, ...data } = fields;
      const signUpData = {...data, gender: data.gender.toLowerCase()};
      console.log("the sign upd data", signUpData)
      await this.props.signup(signUpData)
      if (this.props.error) Toaster.show(this.props.error);
      if (!this.props.error) {
        mapSet([{ "email": this.props.user.email}, {"token": this.props.token}])
        return Actions.home();
      }
    }
  }

  handleRadioButtonPress = index => {
    this.setState(prevState => {
      const newSelected = [
        ...prevState.selected.slice(0, index).fill(false), 
        true, 
        ...prevState.selected.slice(index + 1).fill(false)
      ]
      return { selected: newSelected }
    }, () => { this.getSelectedRadioButton() })
  }

  getSelectedRadioButton = () => {
    const { selected, textValueArray } = this.state;
    const index = selected.findIndex(option => option === true)
    this.setState(() => ({ gender: textValueArray[index] }))
  }


  updateInputField = (value, field)  => {
    return this.setState(prevState => ({ credentials: { ...prevState.credentials, [field]: value }, error: { key: {}, messages: [] } }));
  }

  render() {
    const { credentials, step1, selected, textValueArray } = this.state;
    const { email, firstName, lastName, password, phoneNumber, gender, country, state, localGovernment } = credentials;
    const errorCheck = this.props.error.length > 0 || this.state.error.messages.length > 0;
    return (
      <Container>
        <Header back />
        <Content style={styles.content}>
          <View styles={styles.header}>
            <Text style={[styles.text, styles.title]}>Welcome!</Text>
            <Text style={[styles.text, styles.description]}>Let’s get you setup quickly</Text>
          </View>

          
          { step1 
            ? <Step1 
                email={email}
                error={this.state.error}
                errorCheck={errorCheck}
                firstName={firstName}
                lastName={lastName}
                password={password}
                phoneNumber={phoneNumber}
                styles={styles}
                selected={selected}
                gender={gender}
                textValueArray={textValueArray}
                handleRadioButtonPress={this.handleRadioButtonPress}
                handleNextButtonClick={this.handleNextButtonClick}
                updateInputField={this.updateInputField} />
            : <Step2
                error={this.state.error}
                errorCheck={errorCheck}
                styles={styles}
                country={country}
                state={state}
                localGovernment={localGovernment}
                loading={this.props.loading}
                email={email}
                firstName={firstName}
                lastName={lastName}
                password={password}
                phoneNumber={phoneNumber}
                styles={styles}
                selected={selected}
                gender={gender} 
                handleNextButtonClick={this.handleNextButtonClick}
                updateInputField={this.updateInputField} /> }
              
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 30,
  }, 
  description: {
    fontSize: 20,
    marginBottom: 30,
  },
  form: {
    marginTop: 30
  },
  button: {
    marginTop: 20,
    borderRadius: 4,
    height: 60,
  },
  text: {
    fontFamily: 'raleway-regular',
    fontSize: 16,
    color: '#4F5764',
  },
  bold: {
    fontFamily: 'raleway-bold'
  },
  bottom: {
    marginTop: 44
  },
  recover: {
    marginTop: 15
  },
  section: {
    marginTop: 20
  },
  logInText: {
    fontFamily: 'raleway-bold',
    color: '#002728',
  },
  row: {
    flexDirection: 'row'
  }, 
  dots: {
    fontSize:  10,
    marginRight: 5
  },
  dotsView: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end'
  },
  radio: {
    marginRight: 18
  },
  radioText: {
    marginRight: 30
  },
  radioSection: {
    alignItems: 'center',
    marginLeft: 10
  },
  icon: {
    color: '#97A1B3',
  },
  completeButton: {
    marginTop: 50,
  },
  white: {
    color: '#FFF',
  }
});

export default SignUp;
