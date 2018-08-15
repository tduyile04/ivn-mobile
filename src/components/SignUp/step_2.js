import React from 'react';
import { Text, Icon, Form, Item, Input, Button, View, Spinner  } from 'native-base';

const Step2 = (props) => {
  const { error, errorCheck, styles, updateInputField, handleNextButtonClick, selected, loading, ...rest } = props;
  const field = {...rest, key: 2}
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>STEP <Text style={styles.bold}>2</Text> of 2</Text>
        <View style={styles.dotsView}>
          <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
          <Icon active name='circle' type='FontAwesome' style={styles.dots} />
        </View>
      </View>
      <Form style={styles.form}>
        <Item error={errorCheck && error.key.country}>
          <Input 
            placeholder='Country' 
            style={styles.text}
            onChangeText={text => updateInputField(text, 'country')} />
        </Item>
        <Item error={errorCheck && error.key.state} style={styles.section}>
          <Input 
            placeholder='State' 
            style={styles.text}
            onChangeText={text => updateInputField(text, 'state')} />
        </Item>
        <Item error={errorCheck && error.key.localGovernment} style={styles.section}>
          <Input 
            placeholder='Local Government Area' 
            style={styles.text}
            onChangeText={text => updateInputField(text, 'localGovernment')} />
        </Item>
        <Button block dark style={[styles.button, styles.completeButton]} onPress={() => handleNextButtonClick(field)}>
          {loading  
            ?  <View><Spinner size="small" color="#FFF" /></View>        
            : <Text style={[styles.text, styles.bold, styles.white]}>COMPLETE</Text> 
          }
        </Button>
      </Form>
    </View>
  )
}


export default Step2;
