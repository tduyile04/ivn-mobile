import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Modal } from 'react-native';
import { Container, Content, Button, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { Actions } from 'react-native-router-flux';
import AspirantModal from '../Modal/AspirantModal'
import { getAspirants, getState, getLocalGovernmentFromSelectedState } from '../../actions';
import Header from '../../shared-components/Header';

import defaultPicture from '../../../assets/images/placeholder.png';

const leadershipLevel = [
  { level: "Select Filter >> " },
  { level: "Country" },
  { level: "State" },
  { level: "Local Government" }
]

const setAvatar = userAvatar => userAvatar ? { uri: userAvatar } : defaultPicture;

const convertStateDataToPickerOptions = list => {
  return Object.keys(list).reduce((accumulator, value, index) => {
    accumulator[index] = {}
    accumulator[index].label = value
    accumulator[index].value = value
    return accumulator
  }, [])
}

const convertLocalGovtDataToPickerOptions = list => list.reduce((accumulator,value, index) => {
  accumulator[index] = {}
  accumulator[index].label = value
  accumulator[index].value = value
  return accumulator
}, [])

const ITEM_WIDTH = 240;

class Aspirants extends Component {
  state = {
    sliderWidth: Dimensions.get('window').width,
    itemWidth: ITEM_WIDTH
  }

  componentDidMount() {
    this.props.getAspirants(this.props.countrySelected);
  }

  renderCard = (item, index, stateSelected, localGovernmentSelected) => {
    const cardColor = index === 0 ? { backgroundColor: "rgba(18,30,65,0.61)" } : { backgroundColor: '#628AFF' }
    return (
      <Button 
        style={[ styles.cardStyle, cardColor ]}
        onPress={() => this.renderCategory(index)}
        onLongPress={() => this.handleLongPress(index)}
      >
        <Text style={styles.cardTextHeaderStyle}>{item.level}</Text>
        {index === 1  && <Text style={styles.cardTextHeaderStyle}>Nigeria</Text>}
        {index === 2  && <Text style={styles.cardTextHeaderStyle}>{stateSelected}</Text>}
        {index === 3  && <Text style={styles.cardTextHeaderStyle}>{localGovernmentSelected}</Text>}
      </Button>
    )
  }

  renderCategory = index => {
    const { getAspirants } = this.props;
    const { 
      countrySelected, 
      stateSelected, 
      localGovernmentSelected 
    } = this.props;
    if (index === 0) {
      return null;
    }
    if (index === 1) {
      getAspirants(countrySelected);
    } else if (index === 2) {
      getAspirants(countrySelected, stateSelected);
    } else if (index === 3) {
      getAspirants(countrySelected, stateSelected, localGovernmentSelected);
    }
  }

  handleStatePickerClick = async () => {
    await this.props.getState(this.props.countrySelected)
    const stateCategories = convertStateDataToPickerOptions(this.props.countryState);
    Actions.aspirantModal({
      stateCategories,
      viewState: true
    })
  }
  
  handleLocalGovtPickerClick = async () => {
    await this.props.getLocalGovernmentFromSelectedState(this.props.countrySelected, this.props.stateSelected)
    const localGovernmentCategories = convertLocalGovtDataToPickerOptions(this.props.countryLocalGovernment)
    Actions.aspirantModal({ 
      viewLocalGovernment: true, 
      localGovernmentCategories 
    })
  }

  handleLongPress = index => {
    if (index === 1) {
      return;
    } else if (index === 2) {
      this.handleStatePickerClick()
    } else if (index === 3) {
      this.handleLocalGovtPickerClick()
    }
  }

  render() {
    return (
      <Container>
      <Header title='Aspirants' back />
      <Content>
        <View 
          style={styles.container} 
          onLayout={() => this.setState(() => ({ sliderWidth: Dimensions.get('window').width }))}>
          {/*Carousel section*/}
          <View style={[styles.carouselCoverStyle, { width: this.state.sliderWidth }]}>
            <Carousel 
              data={leadershipLevel}
              layout={'default'}
              inactiveSlideScale={1}
              renderItem={({item, index}) => this.renderCard(item, index, this.props.stateSelected, this.props.localGovernmentSelected)}
              itemWidth={this.state.itemWidth}
              firstItem={0}
              activeSlideAlignment={'start'}
              sliderWidth={this.state.sliderWidth}
              useScrollView
            />
          </View>

          {/* Current Leader section */}
          <View style={styles.profileSection}>
            {/* <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 15, paddingBottom: 10 }}>
              <Image
                style={styles.profileImage}
                source={setAvatar(null)}
              />
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <Text style={styles.currentLeaderTextStyle}>Joke Adams</Text>
                <View style={styles.tagSection}>
                  <Text style={styles.tagText}>Current</Text>
                </View>
              </View>
            </View> */}

            {/* Aspirant title */}

            <View style={{ paddingBottom: 15, paddingLeft: 10 }}>
              <View style={styles.filterSection}>
                <Button bordered small rounded style={styles.tagBtn} onPress={() => this.handleStatePickerClick() }>
                  <Text style={styles.tagText}>{this.props.stateSelected}</Text>
                </Button>
                <Button bordered small rounded style={styles.tagBtn} 
                  onPress={() => this.handleLocalGovtPickerClick() }>
                  <Text style={styles.tagText}>{this.props.localGovernmentSelected}</Text>
                </Button>
              </View>
            </View>

            {/*Aspirant list view */}
            <View>
              {this.props.loading && <Spinner size="small" color="#000" />}
              {(!this.props.aspirants || this.props.aspirants.length === 0) && !this.props.loading && <Text style={{ textAlign: "center", paddingTop: 40, fontFamily: "raleway-regular" }}>No Aspirants available for this region</Text>}
              {this.props.aspirants && this.props.aspirants.map((aspirant, index) => {
                return (
                  <View key={index} style={{ display: 'flex', flexDirection: 'row', paddingTop: 40, borderTopColor: '#ECECEC', borderTopWidth: 1, borderStyle: 'solid' }}>
                    <Image
                      style={[styles.profileImage, { borderRadius: 5 }]}
                      source={setAvatar(aspirant.avatar)}
                    />
                    <View>
                      <Text style={styles.aspirantBasicStyle} onPress={() => Actions.userProfile({ id: aspirant.id })}>{aspirant.firstName} {aspirant.lastName}</Text>
                      <Text style={styles.aspirantNormalStyle}>member of</Text>
                      <Text style={styles.aspirantPartyName}>People Democratic Party</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </Content>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around"
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
  countryLocalGovernment: state.aspirant.countryLocalGovernment,
  countrySelected: state.aspirant.countrySelected,
  lga: state.aspirant.lga,
  loading: state.aspirant.loading,
  stateSelected: state.aspirant.stateSelected,
  localGovernmentSelected: state.aspirant.localGovernmentSelected
})

const mapDispatchToProps = dispatch => ({
  getAspirants: (country, state, localgovernment) => dispatch(getAspirants(country, state, localgovernment)),
  getState: country => dispatch(getState(country)),
  getLocalGovernmentFromSelectedState: (country, state) => dispatch(getLocalGovernmentFromSelectedState(country, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Aspirants);