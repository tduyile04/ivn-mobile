import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Router, Scene } from 'react-native-router-flux';

import UserProfile from './src/components/UserProfile';
import PartyProfile from './src/components/PartyProfile';
import Search from './src/components/Search';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';

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
      'SFProText-regular': require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
    });
    this.setState({ ready: true });
  }

  render() {
    if(!this.state.ready) return <AppLoading />;
    return (
        <Router>
          <Scene key='root'>
            <Scene 
              key='login'
              component={Login}
              hideNavBar
            />
            <Scene 
              key='signup'
              component={SignUp}
              hideNavBar
            />
            <Scene 
              key='search'
              component={Search}
              hideNavBar
            />
            <Scene 
              key='userProfile'
              component={UserProfile}
              hideNavBar
            />
            <Scene 
              key='partyProfile'
              component={PartyProfile}
              hideNavBar
            />
            <Scene 
              key='home'
              component={Home}
              title='Timeline'
              hideNavBar
              initial
            />
          </Scene>
        </Router>
      );
  }
}
