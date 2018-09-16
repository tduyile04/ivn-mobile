import React from 'react';
import { Text, Icon, Form, Item, Input, Button, View } from 'native-base';
import RadioButtons from '../../shared-components/RadioButtons';

const Step1 = ({ 
  styles, 
  handleNextButtonClick, 
  handleRadioButtonPress, 
  updateInputField, 
  selected, 
  textValueArray,
  email,
  error,
  errorCheck,
  firstName,
  lastName,
  password,
  gender
}) => {
  const field = { key: 1, email, firstName, lastName, password, gender }
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>STEP <Text style={styles.bold}>1</Text> of 2</Text>
        <View style={styles.dotsView}>
          <Icon active name='circle' type='FontAwesome' style={styles.dots} />
          <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
        </View>
      </View>
      <Form style={styles.form}>
        <Item error={errorCheck && error.key.firstName}>
          <Icon active name='person-outline' type='MaterialIcons' style={styles.icon} />
          <Input 
            placeholder='First Name' 
            value={firstName} 
            style={styles.text}
            autoCapitalize = 'none'
            onChangeText={text => updateInputField(text, 'firstName')} />
        </Item>
        <Item error={errorCheck && error.key.lastName}>
          <Icon active name='person-outline' type='MaterialIcons' style={styles.icon} />
          <Input 
            placeholder='Last Name' 
            value={lastName} 
            style={styles.text}
            autoCapitalize = 'none'
            onChangeText={text => updateInputField(text, 'lastName')} />
        </Item>
        <Item error={errorCheck && error.key.email} style={styles.section}>
          <Icon active name='email-outline' type='MaterialCommunityIcons' style={styles.icon} />
          <Input 
            placeholder='Email' 
            style={styles.text}
            value={email} 
            autoCapitalize = 'none'
            onChangeText={text => updateInputField(text, 'email')} />
        </Item>
        <Item error={errorCheck && error.key.password} style={styles.section}>
          <Icon active name='lock-open' type='MaterialIcons' style={styles.icon} />
          <Input 
            placeholder='Password'
            value={password}
            onChangeText={text => updateInputField(text, 'password')}
            autoCapitalize = 'none'
            secureTextEntry 
            style={styles.text} />
          <Icon active name='eye-outline' type='MaterialCommunityIcons' style={styles.icon}/>
        </Item>
        <RadioButtons 
          viewStyle={[styles.row, styles.section, styles.radioSection]}
          textStyle={[styles.text, styles.radioText]}
          iconStyle={[styles.icon, styles.radio]}
          selected={selected}
          textValueArray={textValueArray}
          handlePress={handleRadioButtonPress}
        />
        <Button block dark bordered style={styles.button} onPress={() => handleNextButtonClick(field)}>
          <Text style={styles.text}>NEXT</Text>
        </Button>
      </Form>
    </View>
  )
}


export default Step1;
