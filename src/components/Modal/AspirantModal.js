import React, { Component } from 'react';
import { Picker, PickerIOS, Text, View, Dimensions } from 'react-native';
import { Button, Container } from 'native-base'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { updateSelectedState, updateSelectedLocalGovernment } from "../../actions";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class AspirantModal extends Component {
  state = {
    stateSelected: "",
    stateView: ""
  }

  componentDidMount() {
    const { viewState, viewLocalGovernment } = this.props;
    this.pickCategoryOption(viewState, viewLocalGovernment)
  }

  pickCategoryOption = (viewStateOption, viewLocalGovernmentOption) => {
    if (viewStateOption) {
      return this.setState(() => ({ stateCategories: this.props.stateCategories }))
    }
    if (viewLocalGovernmentOption) {
      return this.setState(() => ({ localGovernmentCategories: this.props.localGovernmentCategories }))
    }
  }

  render() {

    const { stateCategories, localGovernmentCategories } = this.state;
    return (
      <Container>
        <View style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center', backgroundColor: "white" }}>
          <Text style={{ marginTop: 80, fontSize: 24, fontFamily: 'raleway-regular' }}>
            Select {stateCategories ? 'State' : 'Local Government'}
          </Text>
          <View>
            {stateCategories && (<Picker
                selectedValue={this.props.stateSelected}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue) => this.props.updateSelectedState(itemValue)}>
                {stateCategories.map((category, index) => <Picker.Item key={index} label={category.label} value={category.value} />)}
              </Picker>)}
            {localGovernmentCategories && (<Picker
                selectedValue={this.props.localGovernmentSelected}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue) => this.props.updateSelectedLocalGovernment(itemValue)}>
                {localGovernmentCategories.map((category, index) => <Picker.Item key={index} label={category.label} value={category.value} />)}
              </Picker>)}
          </View>
        </View>
        <Button bordered style={{ position: "absolute", bottom: (HEIGHT / 2) - 40, width: WIDTH - 40, marginLeft: 20, marginRight: 20, borderColor: '#000' }}
          onPress={() => Actions.pop()}>
          <Text style={{ marginLeft: "auto", marginRight: "auto", fontFamily: 'raleway-regular', fontSize: 18 }}>SELECT</Text>
        </Button>
      </Container>

    )
  }
}

const mapStateToProps = state => ({
  stateSelected: state.aspirant.stateSelected,
  localGovernmentSelected: state.aspirant.localGovernmentSelected
})

const mapDispatchToProps = dispatch => ({
  updateSelectedState: stateSelected => dispatch(updateSelectedState(stateSelected)),
  updateSelectedLocalGovernment: localgovernmentSelected => dispatch(updateSelectedLocalGovernment(localgovernmentSelected))
})

export default connect(mapStateToProps, mapDispatchToProps)(AspirantModal);