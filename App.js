import React from 'react';
import { Font, AppLoading } from 'expo';
import { Router, Scene, Drawer, Tabs, Modal } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { Root } from "native-base";

import MyProfile from './src/components/MyProfile';
import EditProfile from './src/components/EditProfile';
import UserProfile from './src/components/UserProfile';
import PartyProfile from './src/components/PartyProfile';
import PartyList from './src/components/PartyList';
import Search from './src/components/Search';
import Home from './src/components/Home';
import Comments from './src/components/Comments';
import Notifications from './src/components/Notifications';
import SideBar from './src/shared-components/SideBar';
import Footer from './src/shared-components/Footer';
import TextEditor from './src/components/TextEditor';
import Question from './src/components/Question';
import QuestionList from './src/components/Question/QuestionList';
import Onboarding from './src/components/Onboarding';
import Aspirants from './src/components/Aspirants';
import CandidateOfTheWeek from './src/components/CandidateOfTheWeek';
import AspirantModal from './src/components/Modal/AspirantModal';
import Thoughts from './src/components/Thoughts';

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
    this.setState({ ready: true, loggedIn, returningUser: !!returningUser });
  }

  render() {
    if(!this.state.ready) return <AppLoading />;
    return (
      <Root>
        <Provider store={store}>
          <Router>
            <Modal>
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
                      key='search'
                      component={Search}
                      hideNavBar
                    />
                    <Scene 
                      key='notifications'
                      component={Notifications}
                      hideNavBar 
                    />
                    <Scene 
                      key='myProfile'
                      component={MyProfile}
                      hideNavBar
                    />
                    {/* Other Scenes can be moved around freely. Temporary fix till we 
                    come up with a better solution */}
                    <Scene
                      key='editProfile'
                      component={EditProfile}
                      hideNavBar
                      hideTabBar
                    />
                    <Scene
                      key='comments'
                      component={Comments}
                      hideNavBar
                      hideTabBar
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
                    <Scene
                      key='question'
                      component={Question}
                      hideNavBar
                    />
                    <Scene
                      key='questionList'
                      component={QuestionList}
                      hideNavBar
                    />
                    <Scene
                      key='candidateOfTheWeek'
                      component={CandidateOfTheWeek}
                      hideNavBar
                    />
                    <Scene
                      key='thoughts'
                      component={Thoughts}
                      hideNavBar
                    />
                  </Tabs>
                </Drawer>
              </Scene>
              <Scene 
                key="aspirantModal" 
                component={AspirantModal}  
                hideNavBar 
              />
              <Scene
                key='textEditor'
                component={TextEditor}
                hideTabBar
                hideNavBar
              />
            </Modal>
          </Router>
        </Provider>
      </Root>
    );
  }
}


export default App;
