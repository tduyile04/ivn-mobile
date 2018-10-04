import React, { Component } from 'react'
import { Text, View, Container, Button, Icon, Content } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, Image, Alert } from 'react-native';
import Header from '../../shared-components/Header'
import { getCandidateOfTheWeek } from '../../actions/posts';
import { get } from '../../modules/cache'

const paragraph = props => <View><Text></Text></View>
class CandidateOfTheWeek extends Component {
  state = {
    clicked: false
  }

  async componentDidMount(){
    let user = await get('user');
    console.log(user.id,"user")
    await this.props.getCandidateOfTheWeek(user.id)
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.candidateWeek)
  }

  render() {
    return (
      <Container>
        <Header title='Weekly Pick!' menu />
        <Content style={styles.textViewStyle}>
          <View style={{ padding: 8, alignItems: "center", }}>
            <Image 
              source={require('../../../assets/images/Untitled.png')}
              style={{ width: 110, height: 110, borderRadius: 55 }} />
            <Text style={[styles.textStyle, { fontFamily: "raleway-bold", textAlign: "center", fontSize: 18, color: '#628AFF' }]}>Senator Ademola Adeleke</Text>
            <Text style={[styles.textStyle, {fontFamily: "raleway-italic", textAlign: "center"}]}>The Dancing Governor???</Text>

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
    loading: state.post.userPostLoading,
})

const mapDispatchToProps = dispatch => ({
    getCandidateOfTheWeek: userId=> dispatch(getCandidateOfTheWeek(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CandidateOfTheWeek);