import React, { Component } from 'react'
import { Text, View, Container, Button, Icon, Spinner, Card } from 'native-base';
import { StyleSheet, Image, Alert } from 'react-native';
import Header from '../../shared-components/Header'

const paragraph = props => <View><Text></Text></View>
class CandidateOfTheWeek extends Component {
  render() {
    return (
      <Container>
        <Header title='Weekly Pick!' menu />
        <Card style={styles.textViewStyle}>
          <View style={{ padding: 8 }}>
            <Image 
              source={require('../../../assets/images/Untitled.png')}
              style={{ width: 110, height: 110, borderRadius: 5 }} />
          </View>
          <Text style={[styles.textStyle, { fontFamily: "raleway-bold" }]}>Senator Ademola Adeleke</Text>
          <Text style={[styles.textStyle]}>The DANCING GOVERNOR??</Text>
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
        </Card>
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "raleway-regular"
  }
})

export default CandidateOfTheWeek