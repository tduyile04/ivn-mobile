import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux'
import { Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';

import { Actions } from 'react-native-router-flux';
import { incrementUnread, getNotifications, addNotification, clearUnread } from '../../actions/notification'

import { get } from '../../modules/cache';

class FooterTabs extends Component {
  async componentDidMount () {
    const token = await get("token");
    const socket = openSocket(`https://ivotenaija.herokuapp.com/?token=${token}`)
    socket.on('notification', async (data) => {
      this.props.addNotification(data.notification)
      this.props.incrementUnread()
    });
  }

  pressNotification () {
    this.props.clearUnread()
    return Actions.notifications()
  }

  render () {
    const { unread } = this.props
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => Actions.home()}>
            <Icon name="home" type='SimpleLineIcons' />
          </Button>
          <Button onPress={() => Actions.search()}>
            <Icon name="magnifier" type='SimpleLineIcons' />
          </Button>
          <Button badge onPress={() => this.pressNotification()}>
            {!unread &&<Badge style={{ backgroundColor: 'transparent' }}></Badge>}
            {unread && <Badge><Text>{unread}</Text></Badge>}
            <Icon name="bell" type='SimpleLineIcons' />
          </Button>
          <Button onPress={() => Actions.userProfile()}>
            <Icon name="people" type='SimpleLineIcons' />
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const mapStateToProps = state => ({
  unread: state.notification.new,
  page: state.notification.page,
  limit: state.notification.limit,
})

const mapDispatchToProps = dispatch => ({
  incrementUnread: () => dispatch(incrementUnread()),
  getNotifications: (page, limit) => dispatch(getNotifications(page, limit)),
  addNotification: (notification) => dispatch(addNotification(notification)),
  clearUnread: () => dispatch(clearUnread())
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterTabs)
