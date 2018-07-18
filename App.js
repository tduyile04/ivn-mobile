import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import UserProfile from './src/components/UserProfile';
import PartyProfile from './src/components/PartyProfile';

export default class App extends React.Component {
  state = {
    ready: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-medium': require('./assets/fonts/Raleway-Regular.ttf'),
    });
    this.setState({ ready: true });
  }

  render() {
    if(!this.state.ready) return <AppLoading />;
    return (
        <View style={styles.container}>
            <PartyProfile />
        </View> 
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
