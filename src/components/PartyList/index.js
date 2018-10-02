import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, View, Text, Button, Icon, Spinner, Card } from 'native-base';
import { StyleSheet, Image, FlatList,Linking } from 'react-native';

import Header from '../../shared-components/Header';

import { getParties, getParty, unSelectParty,followUserByParty,unfollowUserByParty } from '../../actions/party';
import { Actions } from 'react-native-router-flux';
import HorizontalLine from '../../shared-components/HorizontalLine';
import { UnfollowButton, FollowButton,DownloadButton } from '../../shared-components/Buttons';
import {get} from "../../modules/cache";

class PartyList extends React.Component {
  state = { refreshing:  false,userId:null }

    async componentDidMount () {
      const userId = await get('user_id'); // Logged-in user ID
      this.setState({userId:userId})
       this.props.getParties();
  }

  handleSelectParty = (item) => {
    this.props.unSelectParty();
    this.props.getParty(item.id);
    return Actions.partyProfile(item.id);
  }

  download=(item)=>{

    if(!item){

      return false;
    }

    Linking.openURL(item)

  }

  handleRefresh = () => null
  fetchMorePosts = () =>  null

    followUser=async (id)=>{
        this.setState({refreshing: true});
        await this.props.followUserByParty(id)
        this.setState({refreshing: false});
        await alert('Follow...')
        return Actions.partyList()
    }
    unfollowUser=async (id)=>{
        this.setState({refreshing: true});
        await this.props.unfollowUserByParty(id)
        this.setState({refreshing: false});
       await alert('UnFollow ...')
        return Actions.partyList()
    }

  render () {
    return (
      <Container style={styles.container}>
        <Header back title='Parties' />
        <Content style={styles.content}>
          <FlatList
            data={this.props.parties}
            renderItem={({ item }) =>  {

              return (
              <Card transparent style={styles.partyCard}>
                <View style={styles.card}>
                  <View style={styles.items}>
                    <Text style={styles.title} onPress={() => this.handleSelectParty(item)}>
                      {item.name + " "}
                      {item.abbr && item.abbr.length ? `(${item.abbr})`: ""}
                    </Text>
                      { item.motto && item.motto.length ? <Text style={styles.motto}>{`"${item.motto}"`}</Text> :<Text></Text>  }
                    <Text style={styles.followed}>
                      <Text style={styles.bold}>Followed </Text>
                      by {item.members.length} people
                    </Text>
                      <UnfollowButton id={item.id} unfollowUser={(id)=>this.unfollowUser(item.id)} />
                      <FollowButton id={item.id} followUser={(id)=>this.followUser(item.id)} />
                      {
                          item.about?
                              <DownloadButton link={item.about} downloadLink={(link)=>this.download(link)} />
                              :
                              <Text/>
                      }

                  </View>
                </View>
                <HorizontalLine />
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
  card: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  items: {
    marginLeft: 17
  },
  userIcon: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  followText: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#FFFFFF',
    marginLeft: -5
  },
  followButton: {
    height: 30,
    width: 114,
    backgroundColor: '#628AFF',
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 13,
  },
  unfollowText: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#4F5764',
    textAlign: 'center'
  },
  unfollowButton: {
    height: 30,
    width: 114,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 13,
  },
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#3F3F3F',
    marginTop: 8,
    marginBottom: 4,
  },
  motto: {
    fontFamily: 'raleway-italic',
    fontSize: 13,
    color: '#3F3F3F',
    marginBottom: 4,
  },
  followed: {
    fontFamily: 'raleway-regular',
    fontSize: 13,
    color: '#3F3F3F',
  },
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
  }
});

const mapStateToProps = state => ({
  parties: state.party.parties,
  error: state.party.error,
  loading: state.party.loading
})

const mapDispatchToProps = dispatch => ({
  getParty: id => dispatch(getParty(id)),
  getParties: () => dispatch(getParties()),
  unSelectParty: () => dispatch(unSelectParty()),
  followUserByParty:id=>dispatch(followUserByParty(id)),
  unfollowUserByParty:id=>dispatch(unfollowUserByParty(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PartyList)
