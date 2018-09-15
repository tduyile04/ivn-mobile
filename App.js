import React from 'react';
import { Font, AppLoading } from 'expo';
import { Router, Scene, Drawer, Tabs } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { Root } from "native-base";

import MyProfile from './src/components/UserProfile/me';
import UserProfile from './src/components/UserProfile/others';
import PartyProfile from './src/components/PartyProfile';
import PartyList from './src/components/PartyList';
import Search from './src/components/Search';
import Home from './src/components/Home';
import Comments from './src/components/Comments';
import Notifications from './src/components/Notifications';
import SideBar from './src/shared-components/SideBar';
import Footer from './src/shared-components/Footer';
import TextEditor from './src/components/TextEditor';
import Onboarding from './src/components/Onboarding';
import Aspirants from './src/components/Aspirants';

import SignUp from './src/containers/SignUp'
import Login from './src/containers/Login';

import store from './src/store';
import { get, remove } from './src/modules/cache';

class App extends React.Component {
  state = {
    ready: false,
    loggedIn: false,
    returningUser: false, // First-time-User if value is false.
  };

  async componentDidMount() {
    await Font.loadAsync({
      'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-medium': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-italic': require('./assets/fonts/Raleway-Italic.ttf'),
      'museosans-500': require('./assets/fonts/MuseoSans_500.ttf'),
      'SFProText-regular': require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
      'SFProText-SemiBold': require('./assets/fonts/SFProText-SemiBold.ttf'),
      'Roboto': require("native-base/Fonts/Roboto.ttf"),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
      'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    const loggedIn = await get("token");
    const returningUser = await get("returningUser");
    console.disableYellowBox = true; //  Disable yellow box warning message
    this.setState({ ready: true, loggedIn, returningUser: !!returningUser });
  }

  render() {
    if(!this.state.ready) return <AppLoading />;
    return (
      <Root>
        <Provider store={store}>
          <Router>
            <Scene key='root'>
              <Scene
                key="onboarding"
                component={Onboarding}
                initial={!this.state.returningUser}
                hideNavBar
              />
              <Scene
                key='login'
                component={Login}
                hideNavBar
                initial={!this.state.loggedIn && this.state.returningUser}
              />
              <Scene
                key='signup'
                component={SignUp}
                hideNavBar
              />
              <Drawer
                  hideNavBar
                  key="drawer"
                  contentComponent={SideBar}
                  drawerWidth={300}
                  drawerPosition="left"
                  open={false}
                  initial={this.state.loggedIn && this.state.returningUser}
              >
                <Tabs
                  key='tabs'
                  tabBarComponent={Footer}
                >
                  <Scene
                    key='home'
                    component={Home}
                    hideNavBar
                  />
                  <Scene
                    key='textEditor'
                    component={TextEditor}
                    hideTabBar
                    hideNavBar
                  />
                  <Scene
                    key='comments'
                    component={Comments}
                    hideNavBar
                    hideTabBar
                  />
                  <Scene 
                    key='notifications'
                    component={Notifications}
                    hideNavBar 
                  />
                  <Scene 
                    key='search'
                    component={Search}
                    hideNavBar
                  />
                  <Scene 
                    key='myProfile'
                    component={MyProfile}
                    hideNavBar
                  />
                  <Scene 
                    key='userProfile'
                    component={UserProfile}
                    hideNavBar
                  />
                  <Scene
                    key='partyList'
                    component={PartyList}
                    hideNavBar
                  />
                  <Scene 
                    key='partyProfile'
                    component={PartyProfile}
                    hideNavBar
                  />
                  <Scene 
                    key='aspirants'
                    component={Aspirants}
                    hideNavBar
                  />
                </Tabs>
              </Drawer>
            </Scene>
          </Router>
        </Provider>
      </Root>
    );
  }
}


export default App;
