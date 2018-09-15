import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Container } from 'native-base'

class AspirantModal extends Component {
  state = {
    stateSelected: "",
    stateView: "",
    localGovernmentView: "",
    localgovernmentSelected: "",
  }

  componentDidMount() {
    const { viewState, viewLocalGovernment } = this.props;
    this.pickCategoryOption(viewState, viewLocalGovernment)
  }

  pickCategoryOption = (stateOption, localGovernmentOption) => {
    if (stateOption) {
      return this.setState(() => ({ stateCategories: this.props.stateCategories }))
    }
    if (localGovernmentOption) {
      return this.setState(() => ({ localGovernmentCategories: this.props.localGovernmentCategories }))
    }
  }

  render() {

    const { stateCategories, localGovernmentCategories } = this.state;
    return (
      <Container style={{ display: 'flex', alignItems: 'center', fontSize: 24, backgroundColor: "white" }}>
        <Text style={{ marginTop: 50, fontSize: 24, fontFamily: 'raleway-regular', fontWeight: 400 }}>Select From: </Text>
        {stateCategories && (<Picker
            selectedValue={{}}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ stateSelected: itemValue })}>
            {stateCategories.map((category) => <Picker.Item label={category.label} value={category.value} />)}
          </Picker>)}
          {localGovernmentCategories && (<Picker
            selectedValue={{}}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ localGovernmentSelected: itemValue })}>
            {localGovernmentCategories['lagos'].map((category) => <Picker.Item label={category.label} value={category.value} />)}
          </Picker>)}
      </Container>

    )
  }
}

export default AspirantModal;