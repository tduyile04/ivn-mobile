import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, View, Text, Button, Icon, Spinner } from 'native-base';
import { StyleSheet, Image } from 'react-native';

import CoverImage from '../../shared-components/CoverImage';
import Listings from '../../shared-components/Listings';
import ScrollableTabs from './ScrollableTabs';
import { FollowButton } from '../../shared-components/Buttons';

import { getParty, unSelectParty } from '../../actions/party';

class PartyProfile extends React.Component {
  render () {
    return (
      <Container>
        <Content>
          <CoverImage
            sourceUri='http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg'
            coverImageStyle={styles.coverImageStyle}
            />
          <Button transparent onPress={() => Actions.pop()} style={styles.backBtn}>
            <Icon name='chevron-left' type='MaterialCommunityIcons' style={styles.backIcon}/>
          </Button> 
          { this.props.selected
            ? (
              <View style={styles.partyDetailsContainer}>
                <View style={styles.partyFlagContainer}>
                  <Image
                    style={styles.partyFlag}
                    source={{uri: 'https://www.crwflags.com/fotw/images/g/gy%7Dppp.gif'}}
                    resizeMode="contain"
                    />
                </View>
                <Text style={styles.partyName}>{this.props.selected.name}</Text>
                {
                  this.props.selected.abbr &&
                  this.props.selected.abbr.length > 0 &&
                  <Text style={styles.partyHandle}>@{this.props.selected.abbr}</Text>
                }
                <Listings followers={21098} members={1050} />
                <View style={styles.followActionView}>
                  <FollowButton />
                </View>
              </View>
            ) : <Spinner size="small" color="#000" />
          }
          <ScrollableTabs party={this.props.selected}/>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  coverImageStyle: {
    width: '100%',
    height: 76,
  },
  partyFlag: {
    width: 39,
    height: 26,
  },
  partyDetailsContainer: {
    alignItems: 'center',
  },
  partyFlagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 68,
    height: 68,
    marginTop: -30,
    borderRadius: 34
  },
  partyName: {
    fontSize: 18,
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
  backBtn: {
    position: 'absolute',
    top: 5, 
    left: 10
  },
  backIcon: {
    color: '#fff', 
    marginLeft: 10
  }
});


const mapStateToProps = state => ({
  selected: state.party.selected,
  error: state.party.error,
  loading: state.party.loading
})

const mapDispatchToProps = dispatch => ({
  getParty: id => dispatch(getParty(id)),
  unSelectParty: () => dispatch(unSelectParty())
})

export default connect(mapStateToProps, mapDispatchToProps)(PartyProfile)
