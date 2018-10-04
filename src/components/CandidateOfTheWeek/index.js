import React, { Component } from 'react'
import {Text, View, Container, Button, Icon, Content, Card, Spinner} from 'native-base';
import { connect } from 'react-redux';
import {StyleSheet, Image, Alert, FlatList} from 'react-native';
import Header from '../../shared-components/Header'
import { getCandidateOfTheWeek } from '../../actions/posts';
import { get } from '../../modules/cache'
import {DownloadButton, FollowButton, UnfollowButton} from "../../shared-components/Buttons";
import HorizontalLine from "../../shared-components/HorizontalLine";

const paragraph = props => <View><Text></Text></View>
class CandidateOfTheWeek extends Component {
  state = {
    clicked: false,
    candidateWeek: [],
      refreshing:  false,userId:null
  }

  async componentDidMount(){
    let userId = await get('user_id');
      if (userId) {
          await this.props.getCandidateOfTheWeek(userId)
      }

  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps.candidateWeek)
      if(nextProps.candidateWeek != null){
        this.setState({
            candidateWeek:nextProps.candidateWeek.candidates
        })
      }
  }

    handleRefresh = () => null
    fetchMorePosts = () =>  null

  render() {

    return (
      <Container>
        <Header title='Weekly Pick!' menu />
        <Content style={styles.textViewStyle}>
            <FlatList
                data={this.state.candidateWeek}
                renderItem={({ item }) =>  {


                    return (
                        <React.Fragment>
                            <View style={{ padding: 8, alignItems: "center", }} >
                                <Image
                                    source={{uri: item.avatar}}
                                    style={{ width: 110, height: 110, borderRadius: 55 }} />
                                <Text style={[styles.textStyle, { fontFamily: "raleway-bold", textAlign: "center", fontSize: 18, color: '#628AFF' }]}>
                                    {item.firstName} {item.lastName}
                                </Text>
                                <Text style={[styles.textStyle, {fontFamily: "raleway-italic", textAlign: "center"}]}>
                                    The Dancing Governor???
                                </Text>

                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Button style={styles.followButton} iconLeft onPress={() => this.setState(prevState => ({ clicked: !prevState.clicked }))}>
                                        <Icon type="Feather" name='user-plus' style={styles.userIcon} />
                                        <Text style={styles.followText}>{this.state.clicked ? "Endorse" : "Unendorse"}</Text>
                                    </Button>
                                </View>
                            </View>

                            {paragraph()}
                            <Text style={styles.textStyle}>Born on the 13th of May 1960 Ademola Adeleke is a Politician in Nigeria and also a senator who represents Osun-west district of Osun state since the year 2017. </Text>
                            {paragraph()}
                            <Text style={styles.textStyle}>Formally a member of the APC, he now belongs to the political party called PDP. He is tagged and nicknamed Dancing senator by friends and family members as well as social media critics.</Text>
                            {paragraph()}
                            <Text style={styles.textStyle}>He was elected as Senator of the Osun West Senatorial district to replace his late brother, in the July 2017, by-election.</Text>
                            {paragraph()}
                            <Text style={styles.textStyle}>Osun elections hold this weekend the 16th of September 2018 and candidates include:</Text>
                            {paragraph()}
                            <Text style={styles.textStyle}>Here’s wishing all the candidates a peaceful and credible election!!!</Text>
                        </React.Fragment>
                    )
                }}
                keyExtractor={item => item.id}
                refreshing={this.state.refreshing}
                onEndReachedThreshold={0.5}
            />

        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10
  }, 
  textViewStyle: {
    padding: 10,
    flex: 1
  },
  textStyle: {
    fontFamily: "raleway-regular",
    fontSize: 12,
  },
  center: {
    alignItems: "center",
  },
  userIcon: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  followButton: {
    height: 30,
    width: 120,
    backgroundColor: '#628AFF',
    borderRadius: 3,
    marginTop: 13,
  },
  followText: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#FFFFFF',
    marginLeft: -5
  },
})

const mapStateToProps = state => ({
    candidateWeek: state.post.candidateWeek,
    error: state.post.error,
    loading: state.post.loading
})

const mapDispatchToProps = dispatch => ({
    getCandidateOfTheWeek: userId=> dispatch(getCandidateOfTheWeek(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CandidateOfTheWeek);