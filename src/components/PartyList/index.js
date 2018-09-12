import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, View, Text, Button, Icon, Spinner, Card } from 'native-base';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import CoverImage from '../../shared-components/CoverImage';
import Listings from '../../shared-components/Listings';
// import ScrollableTabs from './ScrollableTabs';
import { FollowButton } from '../../shared-components/Buttons';
import Header from '../../shared-components/Header';

import { getParties } from '../../actions/party';
import { Actions } from 'react-native-router-flux';

class PartyList extends React.Component {
  state = { refreshing:  false }

  componentDidMount () {
    this.props.getParties();
  }

  handleRefresh = () => null
  fetchMorePosts = () =>  null

  render () {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Header title='Parties' />
          <FlatList
            data={this.props.parties}
            renderItem={({ item }) => {
              return (
                <Card key={item.id} style={styles.partyCard}>
                  <View style={styles.partyCard} onPress={() => console.log('PRESSED!!!!!')}>
                    <Grid>
                      <Col style={{ width: '20%' }}>
                        <View style={styles.partyFlagContainer}>
                          <Image
                            style={styles.partyFlag}
                            source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
                            />
                        </View>
                      </Col>
                      <Col>
                        <View style={styles.partyDetails}>
                          <View><Text style={styles.partyName} onPress={() => Actions.partyProfile(item.id)}>{item.name}</Text></View>
                          <View><Text style={styles.partyAbbr}>{item.abbr && item.abbr.length ? `(${item.abbr})`: ""}</Text></View>
                          <View><Text style={styles.partyMotto}>{item.motto && item.motto.length ? `"${item.motto}"`: ""}</Text></View>
                        </View>
                      </Col>
                      <Col style={{ width: '25%' }}>
                        <View style={styles.partyMembers}>
                          <View><Text>{item.members.length}</Text></View>
                          <View><Text>Members</Text></View>
                        </View>
                      </Col>
                    </Grid>
                  </View>
                </Card>
              )
            }}
            keyExtractor={item => item.id}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.fetchMorePosts}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => <Spinner size="small" color="#000" />}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    padding: 0
  },
  coverImageStyle: {
    width: '100%',
    height: 76,
  },
  partyFlag: {
    width: 40,
    height: 40,
  },
  partyDetailsContainer: {
    alignItems: 'center',
  },
  partyFlagContainer: {
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 42,
    height: 42,
    marginLeft: 15,
    marginTop: 25
  },
  partyName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'raleway-bold',
    color: "#3F3F3F",
    marginTop: 10
  },
  partyHandle: {
    fontSize: 13,
    color: "#3F3F3F",
    fontFamily: "raleway-regular",
    marginTop: 2,
    marginBottom: 22,
  },
  followActionView: {
    marginTop: 32
  },
  partyMotto: {
    fontSize: 14,
    fontStyle: 'italic'
  },
  partyCard: {
    margin: 0,
    display: 'flex',
  },
  partyDetails: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5
  },
  partyMembers: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: 130,
    color: '#FFFFFF',
    fontWeight: '400',
    backgroundColor: '#628AFF'
  },
  partyAbbr: {
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  parties: state.party.parties,
  error: state.party.error,
  loading: state.party.loading
})

const mapDispatchToProps = dispatch => ({
  getParties: () => dispatch(getParties())
})

export default connect(mapStateToProps, mapDispatchToProps)(PartyList)
