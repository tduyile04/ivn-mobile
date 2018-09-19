import React, { Component } from 'react';
import { Picker, PickerIOS, Text, View, Dimensions } from 'react-native';
import { Button, Container } from 'native-base'
import { Actions } from 'react-native-router-flux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

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

  handleValueChange = (itemValue, itemIndex) => {
    this.setState(() => ({ localGovernmentSelected: itemValue }))
  }

  render() {

    const { stateCategories, localGovernmentCategories } = this.state;
    return (
      <Container>
        <View style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center', backgroundColor: "white" }}>
          <Text style={{ marginTop: 50, fontSize: 24, fontFamily: 'raleway-regular' }}>Select From: </Text>
          <View>
            {stateCategories && (<PickerIOS
                selectedValue={{}}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.handleValueChange(itemValue, itemIndex)}>
                {stateCategories.map((category, index) => <Picker.Item key={index} label={category.label} value={category.value} />)}
              </PickerIOS>)}
              {localGovernmentCategories && (<PickerIOS
                selectedValue={{}}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.handleValueChange(itemValue, itemIndex)}>
                {localGovernmentCategories['lagos'].map((category, index) => <Picker.Item key={index} label={category.label} value={category.value} />)}
              </PickerIOS>)}
          </View>
        </View>
        <Button bordered style={{ position: "absolute", bottom: (HEIGHT / 2) - 40, width: WIDTH - 40, marginLeft: 20, marginRight: 20 }}>
          <Text style={{ marginLeft: "auto", marginRight: "auto" }}>SELECT</Text>
        </Button>
      </Container>

    )
  }
}

export default AspirantModal;