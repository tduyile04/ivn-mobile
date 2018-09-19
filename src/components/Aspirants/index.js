import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Container, Content, Button, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { Actions } from 'react-native-router-flux';

import { getAspirants, getState, getLocalGovernmentFromSelectedState } from '../../actions';
import Header from '../../shared-components/Header';

import defaultPicture from '../../../assets/images/placeholder.png';

import { localGovernmentCategories } from '../../modules/mock/localgovernment';

const stateCategories = [
  { label: "Lagos", value: "lagos" }
]

const leadershipLevel = [
  { level: "Select Filter >> " },
  { level: "Country" },
  { level: "State" },
  { level: "Local Government" }
]

const convertDataToPickerOptions = list => {
  return Object.keys(list).reduce((accumulator, value, index) => {
    accumulator[index] = {}
    accumulator[index].label = value
    accumulator[index].value = value
    return accumulator
  }, [])
}

const defaultLocations = {
  COUNTRY: "nigeria",
  STATE: "lagos",
  LGA: "maryland"
}

const ITEM_WIDTH = 240;

class Aspirants extends Component {
  state = {
    sliderWidth: Dimensions.get('window').width,
    itemWidth: ITEM_WIDTH
  }

  componentDidMount() {
    this.props.getAspirants(defaultLocations.COUNTRY);
  }

  renderCard = ({item, index}) => {
    const cardColor = index === 0 ? { backgroundColor: "rgba(18,30,65,0.61)" } : { backgroundColor: '#628AFF' }
    return (
      <Button 
        style={[ styles.cardStyle, cardColor ]}
        onPress={() => this.renderCategory(index)}
      >
        <Text style={styles.cardTextHeaderStyle}>{item.level}</Text>
      </Button>
    )
  }

  renderCategory = index => {
    const { getAspirants } = this.props;
    const { COUNTRY, STATE, LGA } = defaultLocations;
    if (index === 0) {
      return null;
    }
    if (index === 1) {
      getAspirants(COUNTRY);
    } else if (index === 2) {
      getAspirants(COUNTRY, STATE);
    } else if (index === 3) {
      getAspirants(COUNTRY, STATE, LGA);
    }
  }

  handleStatePickerClick = async () => {
    await this.props.getState("ng")
    console.log("the countey state -> ", this.props.countryState)
    const stateCategories = convertDataToPickerOptions(this.props.countryState);
    console.log("the stateCategories ", stateCategories);
    Actions.aspirantModal({ viewState: true, stateSelected: defaultLocations.STATE, stateCategories })
  }
  
  handleLocalGovtPickerClick = async () => {
    await this.props.getLocalGovernmentFromSelectedState("ng", "Lagos")
    Actions.aspirantModal({ viewLocalGovernment: true, lgaSelected: defaultLocations.LGA, localGovernmentCategories })
  }

  render() {
    return (
      <Container>
      <Header title='Aspirants' back />
      <ScrollView>
        <View 
          style={styles.container} 
          onLayout={() => this.setState(() => ({ sliderWidth: Dimensions.get('window').width }))}>
          {/*Carousel section*/}
          <View style={[styles.carouselCoverStyle, { width: this.state.sliderWidth }]}>
            <Carousel 
              data={leadershipLevel}
              layout={'default'}
              inactiveSlideScale={1}
              renderItem={this.renderCard}
              itemWidth={this.state.itemWidth}
              firstItem={0}
              activeSlideAlignment={'start'}
              sliderWidth={this.state.sliderWidth}
              useScrollView
            />
          </View>

          {/* Current Leader section */}
          <View style={styles.profileSection}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 15, paddingBottom: 10 }}>
              <Image
                style={styles.profileImage}
                source={{ uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg' }}
              />
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <Text style={styles.currentLeaderTextStyle}>Joke Adams</Text>
                <View style={styles.tagSection}>
                  <Text style={styles.tagText}>Current</Text>
                </View>
              </View>
            </View>

            {/* Aspirant title */}

            <View style={{ paddingBottom: 15, paddingLeft: 10 }}>
              <View style={styles.filterSection}>
                <Button bordered small rounded style={styles.tagBtn} onPress={() => this.handleStatePickerClick() }>
                  <Text style={styles.tagText}>state</Text>
                </Button>
                <Button bordered small rounded style={styles.tagBtn} 
                  onPress={() => null }>
                  <Text style={styles.tagText}>lga</Text>
                </Button>
              </View>
            </View>

            {/*Aspirant list view */}
            <View>
              {this.props.loading && <Spinner size="small" color="#000" />}
              {this.props.aspirants && this.props.aspirants.map((aspirant, index) => {
                return (
                  <View key={index} style={{ display: 'flex', flexDirection: 'row', paddingTop: 40, borderTopColor: '#ECECEC', borderTopWidth: 1, borderStyle: 'solid' }}>
                    <Image
                      style={[styles.profileImage, { borderRadius: 5 }]}
                      source={{ uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg' }}
                    />
                    <View>
                      <Text style={styles.aspirantBasicStyle}>{aspirant.firstName} {aspirant.lastName}</Text>
                      <Text style={styles.aspirantNormalStyle}>member of</Text>
                      <Text style={styles.aspirantPartyName}>People Democratic Party</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </ScrollView>
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
  countryState: state.aspirant.countryState,
  lga: state.aspirant.lga,
  loading: state.aspirant.loading
})

const mapDispatchToProps = dispatch => ({
  getAspirants: (country, state, localgovernment) => dispatch(getAspirants(country, state, localgovernment)),
  getState: country => dispatch(getState(country)),
  getLocalGovernmentFromSelectedState: (country, state) => dispatch(getLocalGovernmentFromSelectedState(country, state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Aspirants);