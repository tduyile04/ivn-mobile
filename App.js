import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import UserProfile from './src/components/UserProfile';
import PartyProfile from './src/components/PartyProfile';
import Search from './src/components/Search';

export default class App extends React.Component {
  state = {
    ready: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-medium': require('./assets/fonts/Raleway-Regular.ttf'),
      'museosans-500': require('./assets/fonts/MuseoSans_500.ttf'),
    });
    this.setState({ ready: true });
  }

  render() {
    if(!this.state.ready) return <AppLoading />;
    return (
        <View style={styles.container}>
            <Search />
        </View> 
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
