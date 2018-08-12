import React from 'react';
import { Font, AppLoading } from 'expo';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { Root } from "native-base";

import UserProfile from './src/components/UserProfile';
import PartyProfile from './src/components/PartyProfile';
import Search from './src/components/Search';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
import Post from './src/components/Post';
import SideBar from './src/shared-components/SideBar';

import Login from './src/containers/Login';

import store from './src/store';

class App extends React.Component {
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
      'Roboto': require("native-base/Fonts/Roboto.ttf"),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
      'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ ready: true });
  }

  render() {
    if(!this.state.ready) return <AppLoading />;
    return (
      <Root>
        <Provider store={store}>
          <Router>
            <Scene key='root'>
              <Scene 
                key='login'
                component={Login}
                hideNavBar
                initial
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
                key='post'
                component={Post}
                hideNavBar
              />
              <Drawer
                  hideNavBar
                  key="drawer"
                  contentComponent={SideBar}
                  drawerWidth={300}
                  drawerPosition="left"
                  open={false}
              >
                <Scene 
                  key='home'
                  component={Home}
                  hideNavBar
                />
              </Drawer>
            </Scene>
          </Router>
        </Provider>
      </Root>
    );
  }
}


export default App;