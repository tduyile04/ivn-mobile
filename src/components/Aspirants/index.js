import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Content, Button, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { Actions } from 'react-native-router-flux';

import { getAspirants } from '../../actions';
import Header from '../../shared-components/Header';

import defaultPicture from '../../../assets/images/placeholder.png';

import { localGovernmentCategories } from '../../modules/mock/localgovernment';

const stateCategories = [
  { label: "Lagos", value: "lagos" }
]

const leadershipLevel = [
  { level: "Country" },
  { level: "State" },
  { level: "Local Government" }
]

const defaultLocations = {
  COUNTRY: "nigeria",
  STATE: "lagos",
  LGA: "maryland"
}

class Aspirants extends Component {

  componentDidMount() {
    this.props.getAspirants(defaultLocations.COUNTRY);
  }

  renderCard = ({item, index}) => {
    return (
      <Button 
        style={styles.cardStyle}
        onPress={() => this.renderCategory(index)}
      >
        <Text style={styles.cardTextHeaderStyle}>{item.level}</Text>
        {/* <Text style={styles.cardTextSubStyle}>Sub-Heading</Text> */}
      </Button>
    )
  }

  renderCategory = index => {
    const { getAspirants } = this.props;
    const { COUNTRY, STATE, LGA } = defaultLocations;
    if (index === 0) {
      getAspirants(COUNTRY);
    } else if (index === 1) {
      getAspirants(COUNTRY, STATE);
    } else if (index === 2) {
      getAspirants(COUNTRY, STATE, LGA);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
         <Header title='Aspirants' back />
        {/*Carousel section*/}
        <View style={styles.carouselCoverStyle}>
          <Carousel 
            data={leadershipLevel}
            layout={'default'}
            inactiveSlideScale={1}
            renderItem={this.renderCard}
            itemWidth={256}
            firstItem={0}
            activeSlideAlignment={'start'}
            sliderWidth={360}
            useScrollView
          />
        </View>
        {/* Current Leader section */}
        <Container style={styles.profileSection}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 15, paddingBottom: 10 }}>
            <Image
              style={styles.profileImage}
              source={defaultPicture}
            />
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
              <Text style={styles.currentLeaderTextStyle}>Joke Adams</Text>
              <View style={styles.tagSection}>
                {/* <Button bordered small rounded style={styles.tagBtn}> */}
                  <Text style={styles.tagText}>Current</Text>
                {/* </Button> */}
              </View>
            </View>
          </View>

          {/* Aspirant title */}

          <View style={{ paddingBottom: 15, paddingLeft: 10 }}>
            <View style={styles.filterSection}>
              <Button bordered small rounded style={styles.tagBtn} 
                onPress={() => 
                  Actions.aspirantModal({ viewState: true, stateSelected: defaultLocations.STATE, stateCategories })
                }>
                <Text style={styles.tagText}>state</Text>
              </Button>
              <Button bordered small rounded style={styles.tagBtn} 
                onPress={() => 
                  Actions.aspirantModal({ viewLocalGovernment: true, lgaSelected: defaultLocations.LGA, localGovernmentCategories })
                }>
                <Text style={styles.tagText}>lga</Text>
              </Button>
            </View>
          </View>

          {/*Aspirant list view */}
          <Content>
            {this.props.loading && <Spinner size="small" color="#000" />}
            {this.props.aspirants && this.props.aspirants.map((aspirant, index) => {
              return (
                <View key={index} style={{ display: 'flex', flexDirection: 'row', paddingTop: 40, borderTopColor: '#ECECEC', borderTopWidth: 1, borderStyle: 'solid' }}>
                  <Image
                    style={[styles.profileImage, { borderRadius: 5 }]}
                    source={defaultPicture}
                  />
                  <View>
                    <Text style={styles.aspirantBasicStyle}>{aspirant.firstName} {aspirant.lastName}</Text>
                    <Text style={styles.aspirantNormalStyle}>member of</Text>
                    <Text style={styles.aspirantPartyName}>People Democratic Party</Text>
                  </View>
                </View>
              )
            })}
          </Content>
        </Container>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  carouselCoverStyle: {
    height: 110, 
    width: '100%',
    marginTop: 25,
    marginBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
  },
  profileSection: {
    padding: 15,
    paddingTop: 0
  },
  cardStyle: {
    height: 100,
    width: 220,
    padding: 15,
    backgroundColor: '#628AFF',
    borderRadius: 5
  },
  cardTextHeaderStyle: {
    color: '#fff',
    fontFamily: 'raleway-bold',
    fontSize: 16,
    lineHeight: 19
  },
  cardTextSubStyle: {
    color: '#fff',
    fontFamily: 'raleway-regular',
    fontSize: 12,
    lineHeight: 13
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10, 
    marginTop: 0
  },
  currentLeaderTextStyle: {
    fontFamily: 'raleway-bold',
    color: '#464646',
    fontSize: 16,
    lineHeight: 13,
    paddingTop: 5,
  },
  positionTagStyle: {
    width: 92,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#628AFF'
  },
  filterSection: {
    display: "flex",
    flexDirection: "row"
  },
  positionTextStyle: {
    color: "#628AFF",
  },
  tagBtn: {
    borderColor: '#628AFF',
    marginRight: 4,
    marginTop: 4,
    width: 102,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tagText: {
    color: '#628AFF',
  },
  aspirantBasicStyle: {
    fontFamily: 'raleway-regular',
    fontSize: 13,
    color: '#3F3F3F'
  },
  aspirantPartyName: {
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#000000',
    lineHeight: 15
  }
})

const mapStateToProps = state => ({
  aspirants: state.aspirant.aspirants,
  loading: state.aspirant.loading
})

const mapDispatchToProps = dispatch => ({
  getAspirants: (country, state, localgovernment) => dispatch(getAspirants(country, state, localgovernment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Aspirants);