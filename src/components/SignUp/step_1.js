import React from 'react';
import { Text, Icon, Form, Item, Input, Button, View } from 'native-base';

const Step1 = ({styles, handleNextButtonClick}) =>
  <View>
    <View style={styles.row}>
      <Text style={styles.text}>STEP <Text style={styles.bold}>1</Text> of 2</Text>
      <View style={styles.dotsView}>
        <Icon active name='circle' type='FontAwesome' style={styles.dots} />
        <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
      </View>
    </View>
    <Form style={styles.form}>
      <Item>
        <Icon active name='person-outline' type='MaterialIcons' style={styles.icon} />
        <Input placeholder='Full Name' style={styles.text} />
      </Item>
      <Item style={styles.section}>
        <Icon active name='email-outline' type='MaterialCommunityIcons' style={styles.icon} />
        <Input placeholder='Email' style={styles.text} />
      </Item>
      <Item style={styles.section}>
        <Icon active name='phone' type='Feather' style={styles.icon} />
        <Input placeholder='Phone' style={styles.text} />
      </Item>
      <Item style={styles.section}>
        <Icon active name='lock-open' type='MaterialIcons' style={styles.icon} />
        <Input placeholder='Password' secureTextEntry style={styles.text} />
        <Icon active name='eye-outline' type='MaterialCommunityIcons' style={styles.icon}/>
      </Item>
      <View style={[styles.row, styles.section, styles.radioSection]}>
        <Icon active name='md-radio-button-on' type='Ionicons' style={[styles.icon, styles.radio]}/>
        <Text style={[styles.text, styles.radioText]}>Male</Text>
        <Icon active name='md-radio-button-off' type='Ionicons' style={[styles.icon, styles.radio]} />
        <Text style={[styles.text, styles.radioText]}>Female</Text>
      </View>
      <Button block dark bordered style={styles.button} onPress={() => handleNextButtonClick()}>
        <Text style={styles.text}>NEXT</Text>
      </Button>
    </Form>
  </View>;


export default Step1;
