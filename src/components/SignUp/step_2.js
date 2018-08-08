import React from 'react';
import { Text, Icon, Form, Item, Input, Button, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Step2 = ({styles}) =>
  <View>
    <View style={styles.row}>
      <Text style={styles.text}>STEP <Text style={styles.bold}>2</Text> of 2</Text>
      <View style={styles.dotsView}>
        <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
        <Icon active name='circle' type='FontAwesome' style={styles.dots} />
      </View>
    </View>
    <Form style={styles.form}>
      <Item>
        <Input placeholder='Nigeria' style={styles.text} />
      </Item>
      <Item style={styles.section}>
        <Input placeholder='Lagos' style={styles.text} />
      </Item>
      <Item style={styles.section}>
        <Input placeholder='Local Government Area' style={styles.text} />
      </Item>
      <Button block dark style={[styles.button, styles.completeButton]} onPress={() => Actions.home()}>
        <Text style={[styles.text, styles.bold, styles.white]}>COMPLETE</Text>
      </Button>
    </Form>
  </View>;


export default Step2;
