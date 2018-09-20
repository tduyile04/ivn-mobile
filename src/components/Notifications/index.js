import React, { Component } from 'react';
import moment from 'moment'
import { View, Text, StyleSheet, Image  } from 'react-native';
import { connect } from 'react-redux';
import { Content, Container } from 'native-base';
import { Card, Icon } from 'native-base';
import HorizontalLine from '../../shared-components/HorizontalLine';
import Header from '../../shared-components/Header';
import { getNotifications, clearUnread } from '../../actions/notification'

import defaultPicture from '../../../assets/images/placeholder.png';

class Notifications extends Component {

  async componentDidMount() {
    await this.props.getNotifications(this.props.page, this.props.limit)
    this.props.clearUnread()
  }

  renderNotificationCard() {
    const adminAction = {
      'role_upgrade': 'Role Upgrade!!!',
      'party_member_add': 'You\'ve been added to a party!',
      'party_member_remove': 'You\'ve been removed from a party!',
      'role_downgrade': 'Revoked role access!'
    }

    const setAvatar = userAvatar => userAvatar ? { uri: userAvatar } : defaultPicture;

    return this.props.notifications.map(notification => (
      <View key={notification.id}>
        <Card transparent style={styles.card}>
          <View style={styles.row}>
            {Object.keys(adminAction).includes(notification.context)
              ? <Image
                  style={styles.profileImage}
                  source={{
                    uri: '' }}
                />
              :
                <Image
                  style={styles.profileImage}
                  source={setAvatar(notification.sender[0].avatar)}
                />
            }
            <View style={styles.right}>
              <View style={[styles.row, styles.user]}>
                  <Text style={styles.name}>
                    {Object.keys(adminAction).includes(notification.context)
                        ? adminAction[notification.context]
                        : `${notification.sender[0].firstName} ${notification.sender[0].lastName}`
                    }
                  </Text>
                  <Icon name='dot-single' type='Entypo' style={styles.dots} />
                  <Text style={styles.blueText}>
                    {moment(notification.created_at).fromNow()}
                  </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.notify}>{notification.note}</Text>
              </View>
            </View>
          </View>
        </Card>
        <HorizontalLine />
      </View>
    ))
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header back title='Notifications' />
        <Content>
          {this.renderNotificationCard()}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    marginTop: 25,
    marginBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
  },
  row: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  name: {
    fontFamily: 'raleway-bold',
    fontSize: 12,
    color: '#000'
  },
  blueText: {
    fontFamily: 'museosans-500',
    fontSize: 12,
    color: '#628AFF',
  },
  dots: {
    color: '#D8D8D8',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  right: {
    marginLeft: 20,
    flex: 1,
  },
  user: {
    alignItems: 'center',
    marginTop: -12,
  },
  notify: {
    fontFamily: 'SFProText-regular',
    marginTop: - 5,
    color: '#4F5764',
    lineHeight: 18,
    fontSize: 12,
  },
  notifyBold: {
    fontFamily: 'SFProText-SemiBold'
  }
});

const mapStateToProps = state => ({
  notifications: state.notification.notifications,
  page: state.notification.page,
  limit: state.notification.limit,
  error: state.notification.error,
  loading: state.notification.loading
})

const mapDispatchToProps = dispatch => ({
  getNotifications: (page, limit) => dispatch(getNotifications(page, limit)),
  clearUnread: () => dispatch(clearUnread())
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
