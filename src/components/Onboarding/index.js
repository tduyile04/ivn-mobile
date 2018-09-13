import React, { Component } from 'react';
import { Container, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';

import Step1 from './step_1';
import Step2 from './step_2';
import Step3 from './step_3';
import { Actions } from 'react-native-router-flux';
import { mapSet } from '../../../src/modules/cache';

class Onboarding extends Component {
  state = {
    step: 1
  }

  componentDidMount() {
    mapSet([{"returningUser": "true"}])
  }

  switchStep = step => this.setState({step});

  showSkipOption = step => 
    step !== 3 ? <Text style={styles.skip} onPress={() => Actions.login()}>SKIP</Text> : <Text style={styles.skip}></Text>

  render() {
    const { step } = this.state;
    return (
      <Container style={styles.container}>
        { this.showSkipOption(step) }
        <View style={styles.content}>
          { step === 1 && <Step1 styles={styles} switchStep={this.switchStep} /> }
          { step === 2 && <Step2 styles={styles} switchStep={this.switchStep} /> }
          { step === 3 && <Step3 styles={styles} switchStep={this.switchStep} /> }
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  content: {
    flex: 6,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'raleway-regular',
    textAlign: 'center'
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  heading: {
    fontSize: 25,
    marginBottom: 5,
  },
  skip: {
    flex: 1,
    textAlign: 'right'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    height: 50,
    borderRadius: 4,
  },
  dots: {
    fontSize:  10,
    marginRight: 5
  },
  location: {
    fontSize:  25,
    marginBottom: 10,
  },
  dotsView: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 40,
  },
});
export default Onboarding;
